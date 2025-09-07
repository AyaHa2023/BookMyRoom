import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { RoomService } from '../../services/room.service';
import { RoomModel } from '../../models/room.model';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-update-room',
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
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})
export class UpdateRoomComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private roomService = inject(RoomService);
  public auth = inject(AuthService);

  room: RoomModel | null = null;
  loading = false;
  error: string | null = null;
  private id!: number;

  ngOnInit(): void {
    const raw = this.route.snapshot.paramMap.get('id');
    this.id = raw ? Number(raw) : NaN;
    if (!this.id || isNaN(this.id)) {
      this.router.navigate(['/rooms']);
      return;
    }

    this.loading = true;
    this.roomService.getById(this.id).subscribe({
      next: (r) => { this.room = r; this.loading = false; },
      error: (err) => { this.error = 'Failed to load room'; this.loading = false; console.error(err); }
    });
  }

  save(): void {
    if (!this.room) return;
    this.roomService.update(this.id, this.room).subscribe({
      next: () => {
        alert('Room updated successfully');
        this.router.navigate(['/rooms']);
      },
      error: (err) => {
        console.error('Update failed', err);
        this.error = err?.error?.message || err?.message || 'Update failed';
      }
    });
  }

  cancel(): void {
    this.router.navigate(['/rooms']);
  }
}
