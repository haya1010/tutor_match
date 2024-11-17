import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  filters: {
    minPrice: number;
    maxPrice: number;
    minRating: number;
    subjects: string[];
  };
  onFiltersChange: (filters: FilterDrawerProps['filters']) => void;
}

const SUBJECTS = ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'History'];

export default function FilterDrawer({
  isOpen,
  onClose,
  filters,
  onFiltersChange,
}: FilterDrawerProps) {
  const { t } = useTranslation();

  const handleSubjectToggle = (subject: string) => {
    const newSubjects = filters.subjects.includes(subject)
      ? filters.subjects.filter(s => s !== subject)
      : [...filters.subjects, subject];
    onFiltersChange({ ...filters, subjects: newSubjects });
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-500"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-500"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="w-screen max-w-md">
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex items-center justify-between px-4 py-6 sm:px-6">
                  <Dialog.Title className="text-lg font-medium text-gray-900">
                    {t('tutors.filterTitle')}
                  </Dialog.Title>
                  <button
                    type="button"
                    className="rounded-md text-gray-400 hover:text-gray-500"
                    onClick={onClose}
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="px-4 sm:px-6">
                  <div className="space-y-6">
                    {/* Price Range */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 mb-4">
                        {t('tutors.priceRange')}
                      </h3>
                      <div className="flex items-center space-x-4">
                        <input
                          type="number"
                          value={filters.minPrice}
                          onChange={(e) => onFiltersChange({
                            ...filters,
                            minPrice: Number(e.target.value)
                          })}
                          className="w-24 px-3 py-2 border border-gray-300 rounded-md"
                          min="0"
                        />
                        <span>-</span>
                        <input
                          type="number"
                          value={filters.maxPrice}
                          onChange={(e) => onFiltersChange({
                            ...filters,
                            maxPrice: Number(e.target.value)
                          })}
                          className="w-24 px-3 py-2 border border-gray-300 rounded-md"
                          min="0"
                        />
                      </div>
                    </div>

                    {/* Rating */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 mb-4">
                        {t('tutors.minRating')}
                      </h3>
                      <input
                        type="range"
                        min="0"
                        max="5"
                        step="0.5"
                        value={filters.minRating}
                        onChange={(e) => onFiltersChange({
                          ...filters,
                          minRating: Number(e.target.value)
                        })}
                        className="w-full"
                      />
                      <div className="text-sm text-gray-600 mt-2">
                        {filters.minRating} {t('common.rating')}
                      </div>
                    </div>

                    {/* Subjects */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-900 mb-4">
                        {t('tutors.subjects')}
                      </h3>
                      <div className="space-y-2">
                        {SUBJECTS.map((subject) => (
                          <label
                            key={subject}
                            className="flex items-center space-x-3"
                          >
                            <input
                              type="checkbox"
                              checked={filters.subjects.includes(subject)}
                              onChange={() => handleSubjectToggle(subject)}
                              className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="text-sm text-gray-700">{subject}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-auto border-t border-gray-200 px-4 py-6 sm:px-6">
                  <button
                    type="button"
                    className="w-full rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
                    onClick={onClose}
                  >
                    {t('common.apply')}
                  </button>
                </div>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}