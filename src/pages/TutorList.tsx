import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, SlidersHorizontal } from 'lucide-react';
import { tutors } from '../data/mockData';
import TutorCard from '../components/TutorCard';
import BookingModal from '../components/BookingModal';
import FilterDrawer from '../components/FilterDrawer';
import { Tutor } from '../types';

export default function TutorList() {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTutor, setSelectedTutor] = useState<Tutor | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: 100,
    minRating: 0,
    subjects: [] as string[],
  });

  const filteredTutors = tutors.filter((tutor) => {
    const matchesSearch = tutor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutor.subjects.some(subject => subject.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesPrice = tutor.hourlyRate >= filters.minPrice && tutor.hourlyRate <= filters.maxPrice;
    const matchesRating = tutor.rating >= filters.minRating;
    const matchesSubjects = filters.subjects.length === 0 || 
      tutor.subjects.some(subject => filters.subjects.includes(subject));

    return matchesSearch && matchesPrice && matchesRating && matchesSubjects;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
        <h1 className="text-2xl font-bold text-gray-900">{t('tutors.title')}</h1>
        <div className="flex w-full md:w-auto space-x-4">
          <div className="relative flex-1 md:w-80">
            <input
              type="text"
              placeholder={t('common.search')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <button
            onClick={() => setIsFilterOpen(true)}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <SlidersHorizontal className="h-5 w-5 mr-2" />
            {t('tutors.filters')}
          </button>
        </div>
      </div>

      {filteredTutors.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg font-medium text-gray-900">{t('common.noResults')}</p>
          <p className="mt-2 text-gray-600">{t('common.tryAgain')}</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTutors.map((tutor) => (
            <TutorCard
              key={tutor.id}
              tutor={tutor}
              onSelect={() => setSelectedTutor(tutor)}
            />
          ))}
        </div>
      )}

      <BookingModal
        tutor={selectedTutor}
        isOpen={!!selectedTutor}
        onClose={() => setSelectedTutor(null)}
      />

      <FilterDrawer
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        filters={filters}
        onFiltersChange={setFilters}
      />
    </div>
  );
}