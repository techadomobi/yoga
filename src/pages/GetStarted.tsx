import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Calendar, Users, Sparkles, Dumbbell, HeartHandshake, Timer } from 'lucide-react';
import { applyPageSeo } from '../utils/seo';

export default function GetStarted() {
  useEffect(() => {
    applyPageSeo({
      title: 'Get Started',
      description:
        'Start your ZenFlow journey with simple steps, beginner recommendations, and class booking guidance.',
      path: '/get-started',
    });
  }, []);

  return (
    <div className="bg-white">
      <section className="relative py-24 bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-5">
            Get <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Started</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            This page is your onboarding roadmap. Pick your practice style, start with a simple weekly plan, and book your first class.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/classes" className="inline-flex items-center gap-2 bg-emerald-600 text-white px-7 py-3 rounded-full hover:bg-emerald-700 transition-colors font-semibold">
              Choose Your First Class
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 border-2 border-emerald-600 text-emerald-600 px-7 py-3 rounded-full hover:bg-emerald-50 transition-colors font-semibold">
              Need Help Choosing?
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Simple 3-Step Start</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Follow this path to build confidence quickly and avoid overthinking your first month.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Calendar,
                title: '1. Choose a Class',
                text: 'Explore beginner-friendly sessions and pick a time that works for your weekly routine.',
                actionText: 'View Classes',
                to: '/classes',
              },
              {
                icon: Users,
                title: '2. Meet Your Instructor',
                text: 'Arrive 10-15 minutes early and share your goals so your instructor can suggest modifications.',
                actionText: 'About Instructors',
                to: '/about',
              },
              {
                icon: CheckCircle2,
                title: '3. Stay Consistent',
                text: 'Build momentum with a realistic plan, and contact us for support with your schedule.',
                actionText: 'Contact Studio',
                to: '/contact',
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="p-8 rounded-2xl border border-gray-200 bg-gradient-to-b from-gray-50 to-white hover:shadow-xl transition-all"
                style={{
                  animation: `fadeInUp 0.8s ease-out forwards`,
                  animationDelay: `${i * 0.1}s`,
                  opacity: 0,
                }}
              >
                <item.icon className="w-10 h-10 text-emerald-600 mb-4" />
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{item.text}</p>
                <Link
                  to={item.to}
                  className="inline-flex items-center gap-2 text-emerald-700 font-semibold hover:text-emerald-800"
                >
                  {item.actionText}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Pick Your Starting Path</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Start where you are today. You can switch paths anytime as your body and goals evolve.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Sparkles,
                title: 'Calm and Gentle',
                details: 'Best if you are new, stressed, or returning after a break.',
                picks: ['Hatha Yoga', 'Yin Yoga'],
              },
              {
                icon: Dumbbell,
                title: 'Strength and Flow',
                details: 'Best if you want more challenge and movement.',
                picks: ['Vinyasa Flow', 'Power Yoga'],
              },
              {
                icon: HeartHandshake,
                title: 'Supportive and Special',
                details: 'Best for life-stage specific support and mindful guidance.',
                picks: ['Prenatal Yoga', 'Kundalini Yoga'],
              },
            ].map((path, i) => (
              <div
                key={path.title}
                className="rounded-2xl border border-gray-200 bg-white p-8 hover:shadow-xl transition-all"
                style={{
                  animation: `scaleIn 0.7s ease-out forwards`,
                  animationDelay: `${i * 0.12}s`,
                  opacity: 0,
                }}
              >
                <path.icon className="w-9 h-9 text-emerald-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{path.title}</h3>
                <p className="text-gray-600 mb-4">{path.details}</p>
                <ul className="space-y-2 mb-6">
                  {path.picks.map((pick) => (
                    <li key={pick} className="text-gray-700 font-medium">{pick}</li>
                  ))}
                </ul>
                <Link to="/classes" className="inline-flex items-center gap-2 text-emerald-700 font-semibold hover:text-emerald-800">
                  See Matching Classes
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Your First Week Plan</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Keep it light and consistent for week one. This gives your body time to adapt and helps build momentum.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mt-4" />
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gradient-to-b from-gray-50 to-white p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  day: 'Day 1',
                  title: 'Gentle Class',
                  note: 'Attend a beginner-friendly class and focus on breath awareness.',
                },
                {
                  day: 'Day 3',
                  title: 'Mobility Session',
                  note: 'Do a 20-minute recovery flow at home to reduce stiffness.',
                },
                {
                  day: 'Day 5',
                  title: 'Second Studio Class',
                  note: 'Repeat your favorite class and notice how your body responds.',
                },
              ].map((plan) => (
                <div key={plan.day} className="rounded-xl border border-gray-200 bg-white p-6">
                  <p className="text-sm font-semibold text-emerald-600 mb-2">{plan.day}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.title}</h3>
                  <p className="text-gray-600">{plan.note}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 text-gray-700">
              <Timer className="w-5 h-5 text-emerald-600" />
              <p>Total weekly commitment: 2 classes + 20 minutes at home</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CheckCircle2 className="w-12 h-12 text-white mx-auto mb-5" />
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">You Are Ready to Begin</h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Book your first class now and let our instructors guide your next steps with a personalized recommendation.
          </p>
          <Link to="/classes" className="inline-flex items-center gap-2 bg-white text-emerald-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors">
            Book Your First Class
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
