

export interface ReservationRequest {
  userId: number | null;
  roomId: number;
  date: string;      // "YYYY-MM-DD"
  startTime: string; // "HH:mm"
  endTime: string;   // "HH:mm"
}

export interface ReservationResponse {
  reservationId: number;
  userId: number;
  roomId: number;
  roomName: string;

  date: string | { year: number; month: number; day: number };

  startTime: string | { hour: number; minute: number };
  endTime: string | { hour: number; minute: number };

  status?: string;
  createdAt?: string;
}


