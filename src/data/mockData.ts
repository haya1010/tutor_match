import { Tutor } from '../types';

export const tutors: Tutor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Chen',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    subjects: ['Mathematics', 'Physics'],
    rating: 4.9,
    hourlyRate: 50,
    experience: 8,
    bio: 'PhD in Applied Mathematics with 8 years of teaching experience. Specializes in calculus and physics.',
    availability: [
      {
        id: '1a',
        startTime: '2024-03-20T09:00:00Z',
        endTime: '2024-03-20T10:00:00Z',
        isBooked: false
      },
      {
        id: '1b',
        startTime: '2024-03-20T10:00:00Z',
        endTime: '2024-03-20T11:00:00Z',
        isBooked: false
      }
    ]
  },
  {
    id: '2',
    name: 'Prof. James Wilson',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    subjects: ['Chemistry', 'Biology'],
    rating: 4.8,
    hourlyRate: 45,
    experience: 12,
    bio: 'Former university professor with extensive experience in chemistry and biology tutoring.',
    availability: [
      {
        id: '2a',
        startTime: '2024-03-20T14:00:00Z',
        endTime: '2024-03-20T15:00:00Z',
        isBooked: false
      },
      {
        id: '2b',
        startTime: '2024-03-20T15:00:00Z',
        endTime: '2024-03-20T16:00:00Z',
        isBooked: false
      }
    ]
  }
];