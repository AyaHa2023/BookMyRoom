import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

import { RoomService } from '../../services/room.service';
import { RoomModel } from '../../models/room.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule
  ],
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  private roomService = inject(RoomService);
  public auth = inject(AuthService);

  rooms: RoomModel[] = [];
  error: string | null = null;
  loading = false;


  showCreate = false;
  newRoom: Partial<RoomModel> = {};

  ngOnInit() {
    this.loadRooms();
  }

  toggleCreate() {
    this.showCreate = !this.showCreate;
  }

  loadRooms() {
    this.loading = true;
    this.roomService.getAll().subscribe({
      next: (data: RoomModel[]) => {
        this.rooms = data;
        this.loading = false;
      },
      error: (err: any) => {
        this.error = err?.message || 'Failed to load rooms';
        this.loading = false;
      }
    });
  }

  deleteRoom(id: number) {
    this.roomService.delete(id).subscribe({
      next: () => this.loadRooms(),
      error: (err: any) => alert('Delete failed: ' + (err?.message || 'unknown'))
    });
  }

  createRoom() {
    if (!this.newRoom.roomName || !this.newRoom.roomLocation || !this.newRoom.capacity) {
      alert('Please fill all fields');
      return;
    }

    this.roomService.create(this.newRoom as RoomModel).subscribe({
      next: () => {
        this.newRoom = {};
        this.showCreate = false;
        this.loadRooms();
      },
      error: (err: any) => alert('Create failed: ' + (err?.message || 'unknown'))
    });
  }
}
