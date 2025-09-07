import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { RoomService } from '../../services/room.service';
import { RoomModel } from '../../models/room.model';

@Component({
  selector: 'app-room-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.css']
})
export class RoomFormComponent {
  private roomService = inject(RoomService);

  newRoom: Partial<RoomModel> = {};
  loading = false;
  error: string | null = null;

  save() {
    if (!this.newRoom.roomName || !this.newRoom.roomLocation || !this.newRoom.capacity) {
      this.error = 'All fields are required';
      return;
    }

    this.loading = true;
    this.roomService.create(this.newRoom as RoomModel).subscribe({
      next: () => {
        this.newRoom = {};
        this.loading = false;
        this.error = null;
        alert('Room created successfully!');
      },
      error: (err: any) => {
        this.error = err?.message || 'Failed to create room';
        this.loading = false;
      }
    });
  }
}
