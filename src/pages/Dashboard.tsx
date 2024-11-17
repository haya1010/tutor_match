import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Calendar, Clock, BookOpen, Settings } from 'lucide-react';
import { format } from 'date-fns';

export default function Dashboard() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('upcoming');

  const upcomingBookings = [
    {
      id: '1',
      tutor: 'Dr. Sarah Chen',
      subject: 'Mathematics',
      date: '2024-03-20T09:00:00Z',
      duration: 60,
    },
    {
      id: '2',
      tutor: 'Prof. James Wilson',
      subject: 'Chemistry',
      date: '2024-03-22T14:00:00Z',
      duration: 60,
    },
  ];

  const pastBookings = [
    {
      id: '3',
      tutor: 'Dr. Sarah Chen',
      subject: 'Mathematics',
      date: '2024-03-15T09:00:00Z',
      duration: 60,
      rating: 5,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-64 space-y-4">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Profile"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h2 className="font-semibold text-gray-900">John Doe</h2>
                <p className="text-sm text-gray-500">student@example.com</p>
              </div>
            </div>
            <div className="mt-6 space-y-2">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`w-full text-left px-4 py-2 rounded-md flex items-center space-x-3 ${
                  activeTab === 'upcoming'
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Calendar className="w-5 h-5" />
                <span>{t('dashboard.upcomingBookings')}</span>
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`w-full text-left px-4 py-2 rounded-md flex items-center space-x-3 ${
                  activeTab === 'past'
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Clock className="w-5 h-5" />
                <span>{t('dashboard.pastBookings')}</span>
              </button>
              <button
                onClick={() => setActiveTab('settings')}
                className={`w-full text-left px-4 py-2 rounded-md flex items-center space-x-3 ${
                  activeTab === 'settings'
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Settings className="w-5 h-5" />
                <span>{t('dashboard.settings')}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow">
            {activeTab === 'upcoming' && (
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  {t('dashboard.upcomingBookings')}
                </h2>
                <div className="space-y-4">
                  {upcomingBookings.map((booking) => (
                    <div
                      key={booking.id}
                      className="border rounded-lg p-4 flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <BookOpen className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">
                            {booking.subject} with {booking.tutor}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {format(new Date(booking.date), 'PPP p')} •{' '}
                            {booking.duration} minutes
                          </p>
                        </div>
                      </div>
                      <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-md">
                        {t('dashboard.joinSession')}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'past' && (
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  {t('dashboard.pastBookings')}
                </h2>
                <div className="space-y-4">
                  {pastBookings.map((booking) => (
                    <div
                      key={booking.id}
                      className="border rounded-lg p-4 flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-gray-100 rounded-lg">
                          <BookOpen className="w-6 h-6 text-gray-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">
                            {booking.subject} with {booking.tutor}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {format(new Date(booking.date), 'PPP p')} •{' '}
                            {booking.duration} minutes
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center text-yellow-400">
                        {[...Array(booking.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'settings' && (
              <div className="p-6">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">
                  {t('dashboard.settings')}
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      {t('dashboard.name')}
                    </label>
                    <input
                      type="text"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      defaultValue="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      {t('dashboard.email')}
                    </label>
                    <input
                      type="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                      defaultValue="student@example.com"
                    />
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                    {t('dashboard.saveChanges')}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}