import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Users, Calendar, Monitor, Star } from 'lucide-react';

export default function Landing() {
  const { t, i18n } = useTranslation();

  const testimonials = [
    {
      name: 'Emily Chen',
      nameja: '陳 愛美',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
      text: 'TutorConnect helped me improve my grades significantly. The tutors are knowledgeable and patient.',
      textja: 'TutorConnectのおかげで成績が大幅に向上しました。講師の方々は知識が豊富で、丁寧に教えてくれます。',
    },
    {
      name: 'David Kim',
      nameja: '金 大衛',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80',
      text: 'The flexibility of online tutoring is amazing. I can learn at my own pace.',
      textja: 'オンライン学習の柔軟性が素晴らしいです。自分のペースで学習できます。',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
              {t('landing.hero.title')}
            </h1>
            <p className="mt-4 text-xl text-blue-100">
              {t('landing.hero.subtitle')}
            </p>
            <Link
              to="/tutors"
              className="mt-8 inline-block bg-white text-blue-600 px-8 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors"
            >
              {t('landing.hero.cta')}
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            {t('landing.features.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-block p-4 bg-blue-100 rounded-full">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">
                {t('landing.features.experts.title')}
              </h3>
              <p className="mt-2 text-gray-600">
                {t('landing.features.experts.description')}
              </p>
            </div>
            <div className="text-center">
              <div className="inline-block p-4 bg-green-100 rounded-full">
                <Calendar className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">
                {t('landing.features.flexible.title')}
              </h3>
              <p className="mt-2 text-gray-600">
                {t('landing.features.flexible.description')}
              </p>
            </div>
            <div className="text-center">
              <div className="inline-block p-4 bg-purple-100 rounded-full">
                <Monitor className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="mt-4 text-xl font-semibold">
                {t('landing.features.online.title')}
              </h3>
              <p className="mt-2 text-gray-600">
                {t('landing.features.online.description')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            {t('landing.testimonials.title')}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">
                      {i18n.language === 'ja' ? testimonial.nameja : testimonial.name}
                    </h3>
                    <div className="flex items-center text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">
                  {i18n.language === 'ja' ? testimonial.textja : testimonial.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}