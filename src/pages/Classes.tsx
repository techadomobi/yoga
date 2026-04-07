import { Clock, Users, Zap, BarChart3, Calendar, MapPin, Search, X } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { applyPageSeo } from '../utils/seo';

export default function Classes() {
  const [activeLevel, setActiveLevel] = useState('All Levels');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    applyPageSeo({
      title: 'Classes',
      description:
        'Browse beginner to advanced yoga classes, weekly schedules, and flexible memberships at ZenFlow.',
      path: '/classes',
    });
  }, []);

  const classes = [
    {
      id: 1,
      name: 'Hatha Yoga',
      description: 'A gentle, slower-paced yoga that focuses on proper alignment and breathing. Perfect for beginners.',
      level: 'Beginner',
      duration: '60 mins',
      schedule: 'Mon, Wed, Fri - 9:00 AM',
      instructor: 'Sarah Williams',
      capacity: 20,
      price: '$15',
      benefits: ['Improved flexibility', 'Better posture', 'Stress relief', 'Core strengthening'],
      image: 'https://images.pexels.com/photos/3820519/pexels-photo-3820519.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 2,
      name: 'Vinyasa Flow',
      description: 'A dynamic, flowing yoga that links breath to movement. Great for building strength and endurance.',
      level: 'Intermediate',
      duration: '75 mins',
      schedule: 'Tue, Thu, Sat - 10:00 AM',
      instructor: 'Michael Chen',
      capacity: 25,
      price: '$18',
      benefits: ['Cardiovascular fitness', 'Muscle tone', 'Mental focus', 'Energy boost'],
      image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 3,
      name: 'Power Yoga',
      description: 'An intense, strength-building yoga practice. Ideal for athletes and experienced practitioners.',
      level: 'Advanced',
      duration: '90 mins',
      schedule: 'Mon, Wed, Fri - 6:00 PM',
      instructor: 'Jessica Thompson',
      capacity: 15,
      price: '$20',
      benefits: ['Maximum strength', 'Peak flexibility', 'Mental resilience', 'Athletic performance'],
      image: 'https://images.pexels.com/photos/3807514/pexels-photo-3807514.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 4,
      name: 'Yin Yoga',
      description: 'A slow, meditative practice holding poses for longer periods. Perfect for relaxation and deep stretching.',
      level: 'Beginner to Intermediate',
      duration: '60 mins',
      schedule: 'Tue, Thu - 7:00 PM',
      instructor: 'Emma Davis',
      capacity: 18,
      price: '$15',
      benefits: ['Deep relaxation', 'Joint health', 'Emotional release', 'Mindfulness'],
      image: 'https://images.pexels.com/photos/3808047/pexels-photo-3808047.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 5,
      name: 'Kundalini Yoga',
      description: 'A spiritual practice combining movement, breath, and meditation. Awakens inner energy.',
      level: 'Intermediate to Advanced',
      duration: '90 mins',
      schedule: 'Sat - 11:00 AM',
      instructor: 'David Kumar',
      capacity: 20,
      price: '$20',
      benefits: ['Spiritual awakening', 'Energy activation', 'Chakra balancing', 'Self-awareness'],
      image: 'https://images.pexels.com/photos/3808051/pexels-photo-3808051.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 6,
      name: 'Prenatal Yoga',
      description: 'Specially designed for expectant mothers. Safe, gentle movements throughout pregnancy.',
      level: 'All Levels',
      duration: '60 mins',
      schedule: 'Wed, Fri - 2:00 PM',
      instructor: 'Lisa Parker',
      capacity: 12,
      price: '$18',
      benefits: ['Easier delivery', 'Pain relief', 'Bonding with baby', 'Stress reduction'],
      image: 'https://images.pexels.com/photos/3808013/pexels-photo-3808013.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredClasses = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return classes.filter((cls) => {
      const matchesLevel =
        activeLevel === 'All Levels' || cls.level.toLowerCase().includes(activeLevel.toLowerCase());

      const searchableText = [
        cls.name,
        cls.description,
        cls.level,
        cls.schedule,
        cls.instructor,
        ...cls.benefits,
      ]
        .join(' ')
        .toLowerCase();

      const matchesSearch = !search || searchableText.includes(search);

      return matchesLevel && matchesSearch;
    });
  }, [activeLevel, searchTerm, classes]);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fadeInDown mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Classes</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from our diverse range of yoga classes tailored to every level and preference.
            </p>
          </div>

          {/* Search + Filter Block */}
          <div className="max-w-4xl mx-auto mb-12 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div className="relative mb-5">
              <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by class name, level, instructor, or benefit"
                className="w-full rounded-full border-2 border-emerald-200 bg-white pl-12 pr-12 py-3 text-gray-700 focus:outline-none focus:border-emerald-500"
              />
              {searchTerm && (
                <button
                  type="button"
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-emerald-600 transition-colors"
                  aria-label="Clear search"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              {levels.map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => setActiveLevel(level)}
                  className={`px-6 py-3 rounded-full border-2 transition-all font-medium ${
                    activeLevel === level
                      ? 'bg-emerald-600 border-emerald-600 text-white'
                      : 'border-emerald-200 text-gray-700 hover:bg-emerald-100 hover:border-emerald-600'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Classes Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600 mb-8">
            Showing <span className="font-semibold text-gray-900">{filteredClasses.length}</span> of{' '}
            <span className="font-semibold text-gray-900">{classes.length}</span> classes
          </p>

          {filteredClasses.length === 0 ? (
            <div className="max-w-2xl mx-auto text-center rounded-2xl border border-gray-200 bg-gradient-to-b from-gray-50 to-white p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">No classes found</h3>
              <p className="text-gray-600 mb-6">
                Try another keyword or switch level filters to discover more options.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchTerm('');
                  setActiveLevel('All Levels');
                }}
                className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredClasses.map((cls, i) => (
              <div
                key={cls.id}
                className="group motion-card overflow-hidden rounded-2xl border border-gray-200 hover:shadow-2xl transition-all transform hover:-translate-y-2"
                style={{
                  animation: `slideInRight 0.8s ease-out forwards`,
                  animationDelay: `${i * 0.1}s`,
                  opacity: 0,
                }}
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden bg-gray-200">
                  <img
                    src={cls.image}
                    alt={cls.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {cls.level}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{cls.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                    {cls.description}
                  </p>

                  {/* Quick Info */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-gray-700">
                      <Clock className="w-4 h-4 text-emerald-600" />
                      <span className="text-sm">{cls.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Calendar className="w-4 h-4 text-emerald-600" />
                      <span className="text-sm">{cls.schedule}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Users className="w-4 h-4 text-emerald-600" />
                      <span className="text-sm">Max {cls.capacity} students</span>
                    </div>
                  </div>

                  {/* Instructor */}
                  <div className="border-t border-gray-200 pt-4 mb-4">
                    <p className="text-sm text-gray-600 mb-1">Instructor</p>
                    <p className="font-semibold text-gray-900">{cls.instructor}</p>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Key Benefits:</p>
                    <div className="flex flex-wrap gap-2">
                      {cls.benefits.map((benefit, j) => (
                        <span
                          key={j}
                          className="text-xs bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-emerald-600">{cls.price}/class</span>
                    <button className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors font-semibold">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Weekly Schedule
            </h2>
            <p className="text-gray-600 text-lg">Find a class that fits your schedule</p>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mt-4" />
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Time</th>
                    <th className="px-6 py-4 text-left font-semibold">Monday</th>
                    <th className="px-6 py-4 text-left font-semibold">Tuesday</th>
                    <th className="px-6 py-4 text-left font-semibold">Wednesday</th>
                    <th className="px-6 py-4 text-left font-semibold">Thursday</th>
                    <th className="px-6 py-4 text-left font-semibold">Friday</th>
                    <th className="px-6 py-4 text-left font-semibold">Saturday</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { time: '9:00 AM', mon: 'Hatha', tue: 'Yin', wed: 'Hatha', thu: 'Yin', fri: 'Hatha', sat: '-' },
                    { time: '10:00 AM', mon: '-', tue: 'Vinyasa', wed: '-', thu: 'Vinyasa', fri: '-', sat: 'Kundalini' },
                    { time: '2:00 PM', mon: '-', tue: '-', wed: 'Prenatal', thu: '-', fri: 'Prenatal', sat: '-' },
                    { time: '6:00 PM', mon: 'Power', tue: '-', wed: 'Power', thu: '-', fri: 'Power', sat: '-' },
                    { time: '7:00 PM', mon: '-', tue: 'Yin', wed: '-', thu: 'Yin', fri: '-', sat: '-' },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-gray-900">{row.time}</td>
                      {['mon', 'tue', 'wed', 'thu', 'fri', 'sat'].map((day) => (
                        <td key={day} className="px-6 py-4 text-gray-700">
                          {row[day as keyof typeof row] !== '-' ? (
                            <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-lg text-sm font-medium">
                              {row[day as keyof typeof row]}
                            </span>
                          ) : (
                            '-'
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Class Comparison Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Find Your Best Fit</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Compare class styles quickly and choose the pace, intensity, and focus that match your current goals.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: 'Energy Focused',
                summary: 'Best for students who want a more athletic and sweat-oriented practice.',
                items: ['Vinyasa Flow', 'Power Yoga', '60-90 min sessions'],
              },
              {
                icon: BarChart3,
                title: 'Progress Focused',
                summary: 'Best for students who want measurable improvements in mobility and posture.',
                items: ['Hatha Yoga', 'Yin Yoga', 'Structured fundamentals'],
              },
              {
                icon: MapPin,
                title: 'Lifestyle Focused',
                summary: 'Best for students balancing wellness, work-life demands, and stress management.',
                items: ['Prenatal Yoga', 'Kundalini', 'Mindful recovery'],
              },
            ].map((pillar, i) => (
              <div
                key={pillar.title}
                className="motion-card p-8 rounded-2xl border border-gray-200 bg-gradient-to-b from-gray-50 to-white hover:shadow-lg transition-all"
                style={{
                  animation: `fadeInUp 0.8s ease-out forwards`,
                  animationDelay: `${i * 0.15}s`,
                  opacity: 0,
                }}
              >
                <pillar.icon className="w-9 h-9 text-emerald-600 mb-5" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
                <p className="text-gray-600 mb-5 leading-relaxed">{pillar.summary}</p>
                <ul className="space-y-2">
                  {pillar.items.map((item) => (
                    <li key={item} className="text-gray-700 font-medium">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Plans Section */}
      <section className="py-20 bg-gradient-to-b from-emerald-50/70 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Membership Options</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Flexible plans designed for beginners exploring yoga and regular practitioners building a weekly routine.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Starter Pack',
                price: '$59',
                cadence: '4 classes / month',
                points: ['Great for beginners', '1 guest pass included', 'Valid for 45 days'],
              },
              {
                name: 'Flow Membership',
                price: '$119',
                cadence: '10 classes / month',
                points: ['Most popular plan', 'Priority booking', 'Access to workshops'],
              },
              {
                name: 'Unlimited',
                price: '$179',
                cadence: 'Unlimited classes',
                points: ['Best value for regulars', 'Includes retreat discounts', 'Community perks'],
              },
            ].map((plan, i) => (
              <div
                key={plan.name}
                className="motion-card p-8 rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition-all"
                style={{
                  animation: `scaleIn 0.7s ease-out forwards`,
                  animationDelay: `${i * 0.15}s`,
                  opacity: 0,
                }}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-4xl font-bold text-emerald-600 mb-2">{plan.price}</p>
                <p className="text-gray-600 mb-5">{plan.cadence}</p>
                <ul className="space-y-2 mb-6">
                  {plan.points.map((point) => (
                    <li key={point} className="text-gray-700">
                      {point}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition-colors font-semibold">
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fadeInUp">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Join our community and find the perfect class for you.
          </p>
          <button className="bg-white text-emerald-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            Browse All Classes
          </button>
        </div>
      </section>
    </div>
  );
}
