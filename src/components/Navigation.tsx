import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { GraduationCap, Globe } from 'lucide-react';

export default function Navigation() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ja' : 'en');
  };

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">TutorConnect</span>
            </Link>
            <div className="hidden md:flex space-x-4">
              <Link to="/tutors" className="text-gray-600 hover:text-gray-900">
                {t('nav.tutors')}
              </Link>
              <Link to="/dashboard" className="text-gray-600 hover:text-gray-900">
                {t('nav.dashboard')}
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="p-2 text-gray-600 hover:text-gray-900"
              aria-label="Toggle language"
            >
              <Globe className="h-5 w-5" />
            </button>
            <Link
              to="/login"
              className="text-gray-600 hover:text-gray-900"
            >
              {t('nav.login')}
            </Link>
            <Link
              to="/signup"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              {t('nav.signup')}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}