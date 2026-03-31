import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, Send, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { mockData } from '../mock';

export const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${mockData.company.whatsapp}?text=Hi, I'd like to know more about BlissCare services`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${mockData.company.phone}`;
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-emerald-500 via-teal-600 to-emerald-600 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-white rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-white rounded-full opacity-10 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Give Your Parents The Care They Deserve
            </h2>
            <p className="text-xl text-emerald-50">
              Start with a free consultation. No commitment required.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Request Free Consultation
              </h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-12 h-12 text-emerald-600" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h4>
                  <p className="text-gray-600">
                    We'll contact you within 24 hours to discuss your parents' care needs.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:ring-0 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:ring-0 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:ring-0 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Tell us about your parents' needs
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Share any specific requirements or concerns..."
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:ring-0 resize-none transition-colors"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-6 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Submit Request
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Options */}
            <div className="space-y-6">
              {/* Instant Contact */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Or Contact Us Directly
                </h3>

                <div className="space-y-4">
                  <Button
                    onClick={handleCall}
                    className="w-full bg-white text-emerald-600 hover:bg-emerald-50 py-6 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-3"
                  >
                    <Phone className="w-5 h-5" />
                    {mockData.company.phone}
                  </Button>

                  <Button
                    onClick={handleWhatsApp}
                    className="w-full bg-green-500 hover:bg-green-600 text-white py-6 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-3"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Us
                  </Button>

                  <a
                    href={`mailto:${mockData.company.email}`}
                    className="w-full bg-white/20 hover:bg-white/30 text-white py-6 text-lg rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-3 border-2 border-white/30"
                  >
                    <Mail className="w-5 h-5" />
                    {mockData.company.email}
                  </a>
                </div>
              </div>

              {/* Office Info */}
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border-2 border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">Our Office</h3>
                <p className="text-emerald-50 leading-relaxed">
                  {mockData.company.address}
                </p>
                <div className="mt-4">
                  <p className="text-emerald-50 font-medium">
                    Available: 24/7 for emergencies
                  </p>
                  <p className="text-emerald-100 text-sm">
                    Office Hours: Mon-Sat, 9 AM - 7 PM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
