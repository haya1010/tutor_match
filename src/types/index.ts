export interface Tutor {
  id: string;
  name: string;
  avatar: string;
  subjects: string[];
  rating: number;
  hourlyRate: number;
  experience: number;
  bio: string;
  availability: TimeSlot[];
}

export interface TimeSlot {
  id: string;
  startTime: string;
  endTime: string;
  isBooked: boolean;
}

export interface Booking {
  id: string;
  tutorId: string;
  studentId: string;
  timeSlot: TimeSlot;
  subject: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
}