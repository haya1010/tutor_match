import { Star, Clock, DollarSign, BookOpen } from 'lucide-react';
import { Tutor } from '../types';

interface TutorCardProps {
  tutor: Tutor;
  onSelect: (tutor: Tutor) => void;
}

export default function TutorCard({ tutor, onSelect }: TutorCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start space-x-4">
        <img
          src={tutor.avatar}
          alt={tutor.name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{tutor.name}</h3>
          <div className="flex items-center mt-1 text-sm text-gray-600">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span>{tutor.rating} rating</span>
            <span className="mx-2">•</span>
            <Clock className="w-4 h-4 mr-1" />
            <span>{tutor.experience} years experience</span>
          </div>
          <div className="flex items-center mt-2">
            <DollarSign className="w-4 h-4 text-green-600 mr-1" />
            <span className="text-green-600 font-medium">${tutor.hourlyRate}/hour</span>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {tutor.subjects.map((subject) => (
              <span
                key={subject}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
              >
                <BookOpen className="w-3 h-3 mr-1" />
                {subject}
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-4 text-sm text-gray-600 line-clamp-2">{tutor.bio}</p>
      <button
        onClick={() => onSelect(tutor)}
        className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
      >
        View Available Times
      </button>
    </div>
  );
}