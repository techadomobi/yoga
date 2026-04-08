import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, Clock, CheckCircle } from 'lucide-react';
import { applyPageSeo } from '../utils/seo';

export default function Contact() {
  useEffect(() => {
    applyPageSeo({
      title: 'Contact',
      description:
        'Contact Mat and Mantra Yoga Studio for class inquiries, memberships, private sessions, and first-visit guidance.',
      path: '/contact',
    });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-24">
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-40 right-20 parallax-medium">
            <div className="w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" />
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fadeInDown">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Get in <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions? We'd love to hear from you. Reach out to us and let's start your wellness journey together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                icon: Phone,
                title: 'Call Us',
                content: '+1 (555) 123-4567',
                subtext: 'Mon-Fri, 9AM-6PM EST',
              },
              {
                icon: Mail,
                title: 'Email Us',
                content: 'hello@Mat and Mantra.com',
                subtext: 'We reply within 24 hours',
              },
              {
                icon: MapPin,
                title: 'Visit Us',
                content: '123 Wellness Street',
                subtext: 'Serenity City, SC 12345',
              },
            ].map((info, i) => (
              <div
                key={i}
                className="motion-card p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl hover:shadow-lg transition-all text-center group"
                style={{
                  animation: `scaleIn 0.6s ease-out forwards`,
                  animationDelay: `${i * 0.15}s`,
                  opacity: 0,
                }}
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-br from-emerald-100 to-teal-100 w-16 h-16 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <info.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-lg font-semibold text-emerald-600 mb-1">{info.content}</p>
                <p className="text-gray-600">{info.subtext}</p>
              </div>
            ))}
          </div>

          {/* Hours Section */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-200 rounded-2xl p-8 max-w-2xl mx-auto animate-slideInUp">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-emerald-600" />
              <h3 className="text-2xl font-bold text-gray-900">Studio Hours</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-gray-600 font-medium mb-1">Monday - Friday</p>
                <p className="text-xl font-semibold text-emerald-600">9:00 AM - 8:00 PM</p>
              </div>
              <div>
                <p className="text-gray-600 font-medium mb-1">Saturday - Sunday</p>
                <p className="text-xl font-semibold text-emerald-600">9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Send Us a Message
            </h2>
            <p className="text-gray-600 text-lg">Fill out the form below and we'll get back to you shortly.</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8 md:p-12 animate-slideInUp" style={{ animationDelay: '0.2s' }}>
            {submitted ? (
              <div className="text-center py-12 animate-scaleIn">
                <div className="flex justify-center mb-4">
                  <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600 text-lg mb-4">
                  We've received your message and will get back to you soon.
                </p>
                <p className="text-gray-500 text-sm">
                  Check your email for a confirmation message.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-900 font-semibold mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-gray-900 font-semibold mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-900 font-semibold mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-gray-900 font-semibold mb-3">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="Class Inquiry">Class Inquiry</option>
                      <option value="Membership">Membership Question</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Private Session">Private Session</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-900 font-semibold mb-3">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="mt-1 w-4 h-4 text-emerald-600 rounded focus:ring-2 focus:ring-emerald-500"
                    required
                  />
                  <label htmlFor="privacy" className="text-gray-600 text-sm">
                    I agree to the privacy policy and consent to be contacted about my inquiry.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg hover:from-emerald-700 hover:to-teal-700 transition-all transform hover:scale-105 font-bold text-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Getting Here Section */}
      <section className="py-20 bg-gradient-to-b from-emerald-50/60 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Getting to the Studio</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Choose the easiest route and travel option to make your visits smooth and stress-free.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'By Car',
                detail: 'Free parking is available behind the studio. Street parking is also available after 6:00 PM.',
              },
              {
                title: 'By Transit',
                detail: 'Take the Green Line to Central Station. We are a 6-minute walk from Exit B.',
              },
              {
                title: 'By Bike',
                detail: 'Bike racks are located near the front entrance, and shower access is available for members.',
              },
            ].map((option, i) => (
              <div
                key={option.title}
                className="motion-card p-8 bg-white rounded-2xl border border-gray-200 hover:shadow-lg transition-all"
                style={{
                  animation: `scaleIn 0.7s ease-out forwards`,
                  animationDelay: `${i * 0.12}s`,
                  opacity: 0,
                }}
              >
                <MapPin className="w-8 h-8 text-emerald-600 mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{option.title}</h3>
                <p className="text-gray-600 leading-relaxed">{option.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Visit Our Studio
            </h2>
            <p className="text-gray-600 text-lg">Find us in the heart of Serenity City</p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 h-96 animate-slideInUp" style={{ animationDelay: '0.2s' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3159.7394370773006!2d-122.27652!3d37.80787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064ae657fb9%3A0xd9f5cdaf4e3e1f1b!2s123%20Wellness%20Street!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-600 to-teal-600 mx-auto" />
          </div>

          <div className="space-y-4">
            {[
              {
                q: 'Do I need previous yoga experience?',
                a: 'Not at all! We have classes for all levels, from complete beginners to advanced practitioners. Just let your instructor know your experience level.',
              },
              {
                q: 'What should I bring to class?',
                a: 'We provide yoga mats and blocks. Feel free to bring your own if you prefer. Wear comfortable, loose-fitting clothing and bring water.',
              },
              {
                q: 'Can I try a class before committing?',
                a: 'Absolutely! Your first class is free. Visit us anytime during our studio hours and talk to our staff.',
              },
              {
                q: 'Do you offer private sessions?',
                a: 'Yes! We offer personalized private sessions. Contact us for details and pricing.',
              },
              {
                q: 'What are your membership options?',
                a: 'We offer flexible memberships: drop-in classes, 10-class packages, and unlimited monthly memberships. Contact us for current rates.',
              },
              {
                q: 'How early should I arrive?',
                a: 'Please arrive 10-15 minutes early to check in and set up your mat. Classes begin promptly at scheduled times.',
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="motion-card bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all"
                style={{
                  animation: `fadeInUp 0.8s ease-out forwards`,
                  animationDelay: `${i * 0.1}s`,
                  opacity: 0,
                }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fadeInUp">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            Reach out to us today and discover how Mat and Mantra can transform your life.
          </p>
          <Link to="/get-started" className="inline-block bg-white text-emerald-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            Schedule a Visit
          </Link>
        </div>
      </section>
    </div>
  );
}

