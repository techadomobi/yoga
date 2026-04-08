import { Heart, Zap, Brain, Users, ArrowRight, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { applyPageSeo } from '../utils/seo';

export default function Home() {
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);
  const [activeHighlightSlide, setActiveHighlightSlide] = useState(0);

  const heroSlides = [
    {
      title: 'Find Your Inner Peace',
      subtitle: 'Mindful classes that bring balance to your day and strength to your practice.',
      image: 'https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg?auto=compress&cs=tinysrgb&w=1800',
      cta: 'Start Your Practice',
      secondary: 'Learn More',
    },
    {
      title: 'Breathe Deep, Move Better',
      subtitle: 'Improve posture, mobility, and focus through guided movement and breathwork.',
      image: 'https://images.pexels.com/photos/3823076/pexels-photo-3823076.jpeg?auto=compress&cs=tinysrgb&w=1800',
      cta: 'View Classes',
      secondary: 'Meet Instructors',
    },
    {
      title: 'Restore. Recenter. Renew.',
      subtitle: 'End your day with restorative sessions that calm the nervous system and reduce stress.',
      image: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=1800',
      cta: 'Join Today',
      secondary: 'Contact Us',
    },
  ];

  const highlights = [
    {
      title: 'Morning Flow Rituals',
      subtitle: 'Wake your body with breath-led movement and gentle activation.',
      image: 'https://images.pexels.com/photos/4056534/pexels-photo-4056534.jpeg?auto=compress&cs=tinysrgb&w=1400',
      points: ['Small group classes', 'Breath + mobility focus', 'Perfect for beginners'],
    },
    {
      title: 'Strength and Balance',
      subtitle: 'Build endurance and confidence with dynamic yoga sequences.',
      image: 'https://images.pexels.com/photos/8436588/pexels-photo-8436588.jpeg?auto=compress&cs=tinysrgb&w=1400',
      points: ['Progressive levels', 'Core and posture training', 'Instructor guidance'],
    },
    {
      title: 'Deep Recovery Evenings',
      subtitle: 'Release stress through restorative yoga and mindfulness practice.',
      image: 'https://images.pexels.com/photos/3822207/pexels-photo-3822207.jpeg?auto=compress&cs=tinysrgb&w=1400',
      points: ['Yin and restorative sessions', 'Sleep-friendly evening slots', 'Calming studio ambiance'],
    },
  ];

  useEffect(() => {
    applyPageSeo({
      title: 'Home',
      description:
        'Discover mindful yoga classes, supportive instructors, and a welcoming wellness community at Mat and Mantra.',
      path: '/',
    });
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5600);

    return () => window.clearInterval(timer);
  }, [heroSlides.length]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveHighlightSlide((prev) => (prev + 1) % highlights.length);
    }, 4800);

    return () => window.clearInterval(timer);
  }, [highlights.length]);

  const showPreviousHeroSlide = () => {
    setActiveHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const showNextHeroSlide = () => {
    setActiveHeroSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[calc(92vh-5rem)] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.title}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeHeroSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/75 via-emerald-900/65 to-teal-800/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/45 via-transparent to-transparent" />
          </div>
        ))}

        <div className="relative z-10 min-h-[calc(92vh-5rem)] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl text-white">
            <div className="flex items-center gap-2 mb-6 animate-fadeInDown">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-7 h-7 fill-yellow-300 text-yellow-300" />
              ))}
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.02] mb-5 animate-fadeInUp">
              {heroSlides[activeHeroSlide].title}
            </h1>
            <p className="text-xl md:text-3xl text-white/95 mb-10 animate-fadeInUp" style={{ animationDelay: '0.12s' }}>
              {heroSlides[activeHeroSlide].subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
              <Link
                to="/get-started"
                className="bg-emerald-500 text-white px-8 py-4 rounded-full hover:bg-emerald-600 transition-all font-bold text-lg sm:text-xl flex items-center justify-center shadow-lg shadow-emerald-900/25"
              >
                {heroSlides[activeHeroSlide].cta}
              </Link>
              <Link
                to="/about"
                className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition-all font-bold text-lg sm:text-xl text-center"
              >
                {heroSlides[activeHeroSlide].secondary}
              </Link>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={showPreviousHeroSlide}
          aria-label="Previous hero slide"
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/90 hover:bg-white text-emerald-700 shadow-lg flex items-center justify-center transition-all"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button
          type="button"
          onClick={showNextHeroSlide}
          aria-label="Next hero slide"
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-full bg-white/90 hover:bg-white text-emerald-700 shadow-lg flex items-center justify-center transition-all"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => setActiveHeroSlide(index)}
              aria-label={`Show ${slide.title}`}
              className={`h-3 rounded-full transition-all ${
                index === activeHeroSlide ? 'w-10 bg-white' : 'w-3 bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Signature Slider Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Yoga Highlights</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              An auto-updating preview of the experiences our students love most.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mt-4" />
          </div>

          <div className="relative rounded-3xl overflow-hidden h-[460px] border border-gray-200 shadow-2xl">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === activeHighlightSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover animate-kenBurns"
                />
                <div className="absolute inset-0 bg-black/45" />

                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end text-white">
                  <p className="uppercase text-xs tracking-[0.22em] text-emerald-200 mb-3">Mat and Mantra Signature</p>
                  <h3 className="text-3xl md:text-5xl font-bold mb-3">{item.title}</h3>
                  <p className="text-white/90 text-lg md:text-xl max-w-3xl mb-6">{item.subtitle}</p>
                  <div className="flex flex-wrap gap-3">
                    {item.points.map((point) => (
                      <span key={point} className="px-4 py-2 bg-white/20 border border-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            <div className="absolute bottom-5 right-5 flex gap-2">
              {highlights.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setActiveHighlightSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeHighlightSlide ? 'w-8 bg-white' : 'w-2.5 bg-white/45'
                  }`}
                  aria-label={`View ${slide.title}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Mat and Mantra?
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
                className="group motion-card p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl hover:shadow-xl transition-all transform hover:scale-105 hover:-translate-y-2"
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
              {
                name: 'Hatha Yoga',
                level: 'Beginner',
                duration: '60 mins',
                image: 'https://images.pexels.com/photos/317155/pexels-photo-317155.jpeg?auto=compress&cs=tinysrgb&w=1200',
              },
              {
                name: 'Vinyasa Flow',
                level: 'Intermediate',
                duration: '75 mins',
                image: 'https://images.pexels.com/photos/1812964/pexels-photo-1812964.jpeg?auto=compress&cs=tinysrgb&w=1200',
              },
              {
                name: 'Power Yoga',
                level: 'Advanced',
                duration: '90 mins',
                image: 'https://images.pexels.com/photos/4662438/pexels-photo-4662438.jpeg?auto=compress&cs=tinysrgb&w=1200',
              },
            ].map((cls, i) => (
              <div
                key={i}
                className="group motion-card relative overflow-hidden rounded-2xl h-80 cursor-pointer border border-gray-200 shadow-lg"
                style={{
                  animation: `scaleIn 0.6s ease-out forwards`,
                  animationDelay: `${i * 0.2}s`,
                  opacity: 0,
                }}
              >
                <img
                  src={cls.image}
                  alt={cls.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10 group-hover:from-black/80 transition-all" />

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

      {/* Studio Gallery Section */}
      <section className="py-20 bg-gradient-to-b from-emerald-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Inside Our Yoga Space</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Calm lighting, natural textures, and intentional design that helps you settle into every session.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'https://images.pexels.com/photos/1812964/pexels-photo-1812964.jpeg?auto=compress&cs=tinysrgb&w=1200',
              'https://images.pexels.com/photos/3757952/pexels-photo-3757952.jpeg?auto=compress&cs=tinysrgb&w=1200',
              'https://images.pexels.com/photos/3822864/pexels-photo-3822864.jpeg?auto=compress&cs=tinysrgb&w=1200',
              'https://images.pexels.com/photos/999309/pexels-photo-999309.jpeg?auto=compress&cs=tinysrgb&w=1200',
            ].map((image, i) => (
              <div
                key={image}
                className="relative h-72 overflow-hidden rounded-2xl border border-gray-200 shadow-md"
                style={{
                  animation: `fadeInUp 0.8s ease-out forwards`,
                  animationDelay: `${i * 0.15}s`,
                  opacity: 0,
                }}
              >
                <img
                  src={image}
                  alt="Yoga practice"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
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
                content: 'Mat and Mantra has completely transformed my life. The instructors are amazing and the community is so welcoming!',
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
                className="motion-card bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all"
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
                className="motion-card rounded-2xl border border-gray-200 bg-gradient-to-b from-gray-50 to-white p-7 hover:shadow-lg transition-all"
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
            Join hundreds of students who have discovered their inner peace with Mat and Mantra.
          </p>
          <Link to="/get-started" className="inline-block bg-white text-emerald-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}

