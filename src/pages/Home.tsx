import { Heart, Zap, Brain, Users, ArrowRight, Star } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { applyPageSeo } from '../utils/seo';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    applyPageSeo({
      title: 'Home',
      description:
        'Discover mindful yoga classes, supportive instructors, and a welcoming wellness community at ZenFlow.',
      path: '/',
    });
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-start justify-center overflow-hidden pt-14 pb-12">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50 z-0" />

        {/* Animated background elements */}
        <div
          className="absolute top-20 right-20 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float z-0"
          style={{ transform: `translateY(${scrollY * 0.06}px)` }}
        />
        <div
          className="absolute bottom-20 left-20 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float z-0"
          style={{ animationDelay: '2s', transform: `translateY(${scrollY * -0.05}px)` }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeInDown mb-8">
            <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-6">
              Welcome to Your Journey
            </span>
          </div>

          <h1 className="animate-fadeInUp text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Find Your Inner <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Peace</span>
          </h1>

          <p className="animate-fadeInUp text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10" style={{ animationDelay: '0.2s' }}>
            Experience transformative yoga classes designed to balance your mind, strengthen your body, and elevate your spirit.
          </p>

          <div className="animate-fadeInUp flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: '0.4s' }}>
            <Link to="/get-started" className="bg-emerald-600 text-white px-8 py-4 rounded-full hover:bg-emerald-700 transition-all transform hover:scale-105 font-semibold text-lg flex items-center justify-center gap-2">
              Start Your Practice <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/about" className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-full hover:bg-emerald-50 transition-all font-semibold text-lg">
              Learn More
            </Link>
          </div>
        </div>

        {/* Floating scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
          <div className="flex flex-col items-center gap-2">
            <span className="text-gray-600 text-sm font-medium">Scroll to explore</span>
            <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose ZenFlow?
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: 'Physical Health', desc: 'Strengthen your body and improve flexibility' },
              { icon: Brain, title: 'Mental Clarity', desc: 'Calm your mind and reduce stress' },
              { icon: Zap, title: 'Boost Energy', desc: 'Increase vitality and inner strength' },
              { icon: Users, title: 'Community', desc: 'Connect with like-minded practitioners' },
            ].map((benefit, i) => (
              <div
                key={i}
                className="group p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl hover:shadow-xl transition-all transform hover:scale-105 hover:-translate-y-2"
                style={{
                  animation: `fadeInUp 0.8s ease-out forwards`,
                  animationDelay: `${i * 0.15}s`,
                  opacity: 0,
                }}
              >
                <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Classes Section */}
      <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Featured Classes
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Choose from a variety of classes tailored to all levels
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Hatha Yoga', level: 'Beginner', duration: '60 mins', color: 'from-emerald-500 to-teal-500' },
              { name: 'Vinyasa Flow', level: 'Intermediate', duration: '75 mins', color: 'from-teal-500 to-cyan-500' },
              { name: 'Power Yoga', level: 'Advanced', duration: '90 mins', color: 'from-emerald-600 to-emerald-500' },
            ].map((cls, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl h-80 cursor-pointer"
                style={{
                  animation: `scaleIn 0.6s ease-out forwards`,
                  animationDelay: `${i * 0.2}s`,
                  opacity: 0,
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cls.color}`} />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all" />

                <div className="relative h-full flex flex-col justify-end p-8 text-white transform group-hover:translate-y-0 transition-transform">
                  <h3 className="text-3xl font-bold mb-2">{cls.name}</h3>
                  <p className="text-white/90 mb-4">
                    Level: <span className="font-semibold">{cls.level}</span>
                  </p>
                  <p className="text-white/90 mb-6">Duration: {cls.duration}</p>

                  <button className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors transform group-hover:scale-105">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Students Say
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Yoga Enthusiast',
                content: 'ZenFlow has completely transformed my life. The instructors are amazing and the community is so welcoming!',
                rating: 5,
              },
              {
                name: 'Michael Chen',
                role: 'Corporate Professional',
                content: 'I was skeptical at first, but after just two weeks, I feel more relaxed and focused at work.',
                rating: 5,
              },
              {
                name: 'Emily Rodriguez',
                role: 'Fitness Coach',
                content: 'The variety of classes keeps me coming back. Every session is unique and rejuvenating.',
                rating: 5,
              },
            ].map((testimonial, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all"
                style={{
                  animation: `slideInRight 0.8s ease-out forwards`,
                  animationDelay: `${i * 0.2}s`,
                  opacity: 0,
                }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Path Section */}
      <section className="py-20 bg-gradient-to-b from-white to-emerald-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Your 12-Week Journey</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              A clear and supportive path that helps you build consistency, confidence, and calm over time.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mt-4" />
          </div>

          <div className="space-y-6">
            {[
              {
                title: 'Weeks 1-3: Build Your Base',
                details:
                  'Start with grounding postures, breathing fundamentals, and gentle mobility work to establish safe patterns and confidence.',
              },
              {
                title: 'Weeks 4-6: Strength + Stamina',
                details:
                  'Add dynamic flows and longer holds to improve endurance while maintaining mindful breath control in every sequence.',
              },
              {
                title: 'Weeks 7-9: Focus + Balance',
                details:
                  'Develop better concentration and stability with balancing postures, transitions, and guided meditation drills.',
              },
              {
                title: 'Weeks 10-12: Integration',
                details:
                  'Combine movement, breath, and mindset tools into a personal routine you can sustain at home and in the studio.',
              },
            ].map((step, i) => (
              <div
                key={step.title}
                className="rounded-2xl border border-emerald-100 bg-white p-6 md:p-8 shadow-sm"
                style={{
                  animation: `fadeInUp 0.8s ease-out forwards`,
                  animationDelay: `${i * 0.12}s`,
                  opacity: 0,
                }}
              >
                <p className="text-sm font-semibold text-emerald-600 mb-2">Phase {i + 1}</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Retreats and Special Events</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Expand your practice through immersive experiences designed for deeper restoration and growth.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sunrise Rooftop Flow',
                date: 'Every first Saturday',
                text: 'Start your weekend with guided movement and breathwork as the city wakes up beneath the morning light.',
              },
              {
                name: 'Sound Bath Recovery',
                date: 'Twice monthly',
                text: 'A restorative evening combining yin postures and live sound bowls to release stress and improve sleep quality.',
              },
              {
                name: 'Weekend Coastal Retreat',
                date: 'Quarterly',
                text: 'Two days of yoga, journaling, and mindful walks by the ocean to reset your body and re-center your mind.',
              },
            ].map((event, i) => (
              <div
                key={event.name}
                className="rounded-2xl border border-gray-200 bg-gradient-to-b from-gray-50 to-white p-7 hover:shadow-lg transition-all"
                style={{
                  animation: `scaleIn 0.7s ease-out forwards`,
                  animationDelay: `${i * 0.15}s`,
                  opacity: 0,
                }}
              >
                <p className="text-emerald-600 font-semibold mb-3">{event.date}</p>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{event.name}</h3>
                <p className="text-gray-600 leading-relaxed">{event.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fadeInUp">
            Ready to Transform Your Life?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Join hundreds of students who have discovered their inner peace with ZenFlow.
          </p>
          <Link to="/get-started" className="inline-block bg-white text-emerald-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}
