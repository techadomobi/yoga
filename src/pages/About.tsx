import { Award, Heart, Leaf, Sparkles, BookOpen, Globe } from 'lucide-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { applyPageSeo } from '../utils/seo';

export default function About() {
  useEffect(() => {
    applyPageSeo({
      title: 'About',
      description:
        'Meet the Mat and Mantra team, explore our teaching philosophy, and learn the story behind our yoga community.',
      path: '/about',
    });
  }, []);

  const instructors = [
    {
      name: 'Sarah Williams',
      role: 'Hatha Yoga Specialist',
      bio: 'With 15 years of experience, Sarah brings gentleness and clarity to every class. She specializes in alignment and breath work.',
      image: 'https://images.pexels.com/photos/4056720/pexels-photo-4056720.jpeg?auto=compress&cs=tinysrgb&w=1200',
      specialties: ['Hatha', 'Alignment', 'Breathing'],
    },
    {
      name: 'Michael Chen',
      role: 'Vinyasa Flow Master',
      bio: 'Michael is a dynamic instructor who loves creating flowing sequences. He brings energy and joy to every practice session.',
      image: 'https://images.pexels.com/photos/8436481/pexels-photo-8436481.jpeg?auto=compress&cs=tinysrgb&w=1200',
      specialties: ['Vinyasa', 'Flow', 'Strength'],
    },
    {
      name: 'Jessica Thompson',
      role: 'Power Yoga Expert',
      bio: 'Jessica is an athlete and power yoga champion. She pushes students to reach their full potential with compassion and humor.',
      image: 'https://images.pexels.com/photos/4327021/pexels-photo-4327021.jpeg?auto=compress&cs=tinysrgb&w=1200',
      specialties: ['Power', 'Strength', 'Performance'],
    },
    {
      name: 'Emma Davis',
      role: 'Yin Yoga & Meditation',
      bio: 'Emma creates a sanctuary of peace. Her mindfulness practice and deep wisdom help students find inner stillness.',
      image: 'https://images.pexels.com/photos/8436721/pexels-photo-8436721.jpeg?auto=compress&cs=tinysrgb&w=1200',
      specialties: ['Yin', 'Meditation', 'Mindfulness'],
    },
    {
      name: 'David Kumar',
      role: 'Kundalini & Spiritual Guide',
      bio: 'David brings spiritual depth to yoga. His kundalini practice awakens inner energy and consciousness in students.',
      image: 'https://images.pexels.com/photos/4327008/pexels-photo-4327008.jpeg?auto=compress&cs=tinysrgb&w=1200',
      specialties: ['Kundalini', 'Spiritual', 'Energy'],
    },
    {
      name: 'Lisa Parker',
      role: 'Prenatal Yoga Specialist',
      bio: 'Lisa is a certified prenatal instructor dedicated to supporting mothers. She creates safe, nurturing classes for expectant mothers.',
      image: 'https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg?auto=compress&cs=tinysrgb&w=1200',
      specialties: ['Prenatal', 'Women\'s Health', 'Care'],
    },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We believe in meeting every student where they are on their journey with understanding and kindness.',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'We are committed to eco-friendly practices and protecting our planet for future generations.',
    },
    {
      icon: Sparkles,
      title: 'Transformation',
      description: 'Our mission is to help students transform their lives through the power of yoga and mindfulness.',
    },
    {
      icon: Globe,
      title: 'Community',
      description: 'We foster a welcoming community where everyone feels accepted and supported in their practice.',
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-24">
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-40 left-20 parallax-medium">
            <div className="w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
          </div>
          <div className="absolute bottom-40 right-20 parallax-reverse">
            <div className="w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }} />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fadeInDown max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Mat and Mantra</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A sanctuary for transformation, healing, and self-discovery through the ancient art of yoga.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {[
              'https://images.pexels.com/photos/4056724/pexels-photo-4056724.jpeg?auto=compress&cs=tinysrgb&w=1200',
              'https://images.pexels.com/photos/8436621/pexels-photo-8436621.jpeg?auto=compress&cs=tinysrgb&w=1200',
              'https://images.pexels.com/photos/4056524/pexels-photo-4056524.jpeg?auto=compress&cs=tinysrgb&w=1200',
            ].map((image, index) => (
              <div
                key={image}
                className="relative h-48 overflow-hidden rounded-2xl border border-white/60 shadow-xl motion-card"
                style={{
                  animation: `fadeInUp 0.8s ease-out forwards`,
                  animationDelay: `${index * 0.12}s`,
                  opacity: 0,
                }}
              >
                <img src={image} alt="Yoga studio ambience" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-slideInLeft">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Story</span>
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Founded in 2018, Mat and Mantra began with a simple vision: to create a welcoming space where anyone can discover the transformative power of yoga. Our founder, Sarah Williams, was inspired by her own healing journey and wanted to share that gift with others.
                </p>
                <p>
                  What started as a small studio with just two instructors has grown into a thriving community of over 500 regular practitioners. But our heart remains the sameâ€”creating a sanctuary where people can connect with themselves and each other.
                </p>
                <p>
                  Today, Mat and Mantra is more than just a yoga studio. We are a movement dedicated to bringing peace, wellness, and mindfulness into the lives of our students and our community.
                </p>
              </div>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl animate-slideInRight parallax-soft motion-card">
              <img
                src="https://images.pexels.com/photos/3822633/pexels-photo-3822633.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Mat and Mantra studio interior"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 text-lg">What guides everything we do</p>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <div
                key={i}
                className="motion-card p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-lg transition-all"
                style={{
                  animation: `scaleIn 0.6s ease-out forwards`,
                  animationDelay: `${i * 0.15}s`,
                  opacity: 0,
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-emerald-100 to-teal-100">
                      <value.icon className="w-6 h-6 text-emerald-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Inspired by the variety of a full-service yoga studio, we design classes and experiences for every stage of practice.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Studio Classes',
                text: 'Daily group sessions focused on alignment, strength, and breath.',
                image: 'https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg?auto=compress&cs=tinysrgb&w=1200',
              },
              {
                title: 'Private Sessions',
                text: 'One-to-one guidance customized to your goals and pace.',
                image: 'https://images.pexels.com/photos/4056728/pexels-photo-4056728.jpeg?auto=compress&cs=tinysrgb&w=1200',
              },
              {
                title: 'Kids & Teens',
                text: 'Joyful, grounding classes that build focus and confidence.',
                image: 'https://images.pexels.com/photos/3822890/pexels-photo-3822890.jpeg?auto=compress&cs=tinysrgb&w=1200',
              },
              {
                title: 'Corporate Wellness',
                text: 'Mindful movement sessions to reset teams and reduce stress.',
                image: 'https://images.pexels.com/photos/8436834/pexels-photo-8436834.jpeg?auto=compress&cs=tinysrgb&w=1200',
              },
            ].map((program, i) => (
              <div
                key={program.title}
                className="motion-card overflow-hidden rounded-2xl border border-gray-200 bg-white"
                style={{
                  animation: `fadeInUp 0.8s ease-out forwards`,
                  animationDelay: `${i * 0.12}s`,
                  opacity: 0,
                }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={program.image} alt={program.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{program.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-b from-emerald-50/60 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Studio Moments</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              A glimpse into the calm, movement, and community that define the Mat and Mantra experience.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'https://images.pexels.com/photos/4056727/pexels-photo-4056727.jpeg?auto=compress&cs=tinysrgb&w=1200',
              'https://images.pexels.com/photos/8436587/pexels-photo-8436587.jpeg?auto=compress&cs=tinysrgb&w=1200',
              'https://images.pexels.com/photos/3822648/pexels-photo-3822648.jpeg?auto=compress&cs=tinysrgb&w=1200',
              'https://images.pexels.com/photos/4056532/pexels-photo-4056532.jpeg?auto=compress&cs=tinysrgb&w=1200',
            ].map((image, i) => (
              <div
                key={image}
                className="motion-card relative h-72 overflow-hidden rounded-2xl border border-gray-200 shadow-md"
                style={{
                  animation: `scaleIn 0.7s ease-out forwards`,
                  animationDelay: `${i * 0.12}s`,
                  opacity: 0,
                }}
              >
                <img src={image} alt="Yoga studio gallery" className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Active Students' },
              { number: '6', label: 'Expert Instructors' },
              { number: '12', label: 'Classes Per Week' },
              { number: '6+', label: 'Years of Excellence' },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-white"
                style={{
                  animation: `fadeInUp 0.8s ease-out forwards`,
                  animationDelay: `${i * 0.2}s`,
                  opacity: 0,
                }}
              >
                <div className="text-5xl font-bold mb-2">{stat.number}</div>
                <p className="text-white/80 text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Instructors</span>
            </h2>
            <p className="text-gray-600 text-lg">Dedicated teachers passionate about your wellness</p>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {instructors.map((instructor, i) => (
              <div
                key={i}
                className="group motion-card overflow-hidden rounded-2xl bg-white border border-gray-200 hover:shadow-2xl transition-all"
                style={{
                  animation: `slideInRight 0.8s ease-out forwards`,
                  animationDelay: `${i * 0.1}s`,
                  opacity: 0,
                }}
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{instructor.name}</h3>
                  <p className="text-emerald-600 font-semibold mb-4">{instructor.role}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {instructor.bio}
                  </p>

                  {/* Specialties */}
                  <div className="flex flex-wrap gap-2">
                    {instructor.specialties.map((specialty, j) => (
                      <span
                        key={j}
                        className="text-xs bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Students Love Us
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Supportive Community',
                description: 'Our students feel welcomed, valued, and part of a caring family that supports each other\'s growth.',
              },
              {
                title: 'Expert Instruction',
                description: 'All our instructors are highly trained, certified, and dedicated to your personal practice journey.',
              },
              {
                title: 'Transformative Results',
                description: 'Students report increased flexibility, strength, peace of mind, and overall wellness improvements.',
              },
              {
                title: 'Inclusive Approach',
                description: 'Whether you\'re just starting or have decades of practice, we meet you where you are.',
              },
              {
                title: 'Beautiful Space',
                description: 'Our studio is designed to inspire peace and focus, with every detail supporting your practice.',
              },
              {
                title: 'Flexibility',
                description: 'With multiple class times and styles, finding a class that fits your schedule is easy.',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="motion-card p-6 bg-white border border-gray-200 rounded-2xl hover:shadow-lg transition-all"
                style={{
                  animation: `fadeInUp 0.8s ease-out forwards`,
                  animationDelay: `${i * 0.1}s`,
                  opacity: 0,
                }}
              >
                <Award className="w-8 h-8 text-emerald-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              From a small local studio to a growing wellness community, here are the moments that shaped Mat and Mantra.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mt-4" />
          </div>

          <div className="space-y-6">
            {[
              { year: '2018', title: 'Mat and Mantra Founded', detail: 'We opened our first 20-mat studio with two instructors and a weekly class schedule.' },
              { year: '2020', title: 'Digital Expansion', detail: 'Introduced live-stream and on-demand sessions to support students at home.' },
              { year: '2022', title: 'Teacher Development', detail: 'Launched internal mentorship programs and advanced instructor training pathways.' },
              { year: '2024', title: 'Community Programs', detail: 'Started donation-based classes, teen wellness sessions, and neighborhood events.' },
              { year: '2026', title: 'Integrated Wellness', detail: 'Expanded into holistic coaching, guided breathwork, and immersive retreats.' },
            ].map((item, i) => (
              <div
                key={item.year}
                className="motion-card grid grid-cols-1 md:grid-cols-[120px_1fr] gap-5 p-6 rounded-2xl border border-gray-200 bg-gradient-to-r from-white to-gray-50"
                style={{
                  animation: `fadeInUp 0.8s ease-out forwards`,
                  animationDelay: `${i * 0.1}s`,
                  opacity: 0,
                }}
              >
                <p className="text-emerald-600 font-bold text-2xl">{item.year}</p>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gradient-to-b from-emerald-50/70 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Teaching Philosophy</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our approach blends modern anatomy, mindful movement, and timeless yogic principles.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Accessible by Design',
                text: 'We offer modifications and progressions so every student can participate confidently regardless of experience.',
              },
              {
                title: 'Breath-Led Practice',
                text: 'Breath is the anchor of every class, helping students move with intention and regulate stress in real time.',
              },
              {
                title: 'Lifelong Learning',
                text: 'Our instructors regularly study anatomy, trauma-informed teaching, and mindfulness research to serve students better.',
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="motion-card p-8 rounded-2xl bg-white border border-gray-200 hover:shadow-lg transition-all"
                style={{
                  animation: `scaleIn 0.7s ease-out forwards`,
                  animationDelay: `${i * 0.15}s`,
                  opacity: 0,
                }}
              >
                <BookOpen className="w-8 h-8 text-emerald-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fadeInUp">
            Join Our Community Today
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Experience the Mat and Mantra difference and discover your path to wellness and inner peace.
          </p>
          <Link to="/get-started" className="inline-block bg-white text-emerald-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  );
}

