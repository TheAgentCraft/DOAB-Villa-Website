
import React, { useState } from 'react';

interface ContactFormProps {
  type: 'rooms' | 'wedding' | 'banquet';
}

const ContactForms: React.FC<ContactFormProps> = ({ type }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const getTitle = () => {
    switch(type) {
      case 'rooms': return 'Book Your Royal Stay';
      case 'wedding': return 'Enquire for Your Dream Wedding';
      case 'banquet': return 'Plan Your Corporate / Social Event';
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3 bg-deep-maroon p-10 text-white flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-4 italic">{getTitle()}</h3>
            <p className="text-white/70 mb-8 font-light">Fill out the form and our luxury concierge will get back to you within 2 hours.</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-royal-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span className="font-bold">+91-9761866666</span>
            </div>
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-royal-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span>24/7 Availability</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="md:w-2/3 p-10 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs uppercase font-bold text-gray-500 mb-2 tracking-widest">Full Name</label>
              <input 
                type="text" required
                className="w-full bg-ivory border-0 border-b-2 border-gray-200 focus:border-royal-gold focus:ring-0 transition-all px-0 py-2 placeholder-gray-300"
                placeholder="Ex. Rahul Gupta"
              />
            </div>
            <div>
              <label className="block text-xs uppercase font-bold text-gray-500 mb-2 tracking-widest">Phone Number</label>
              <input 
                type="tel" required
                className="w-full bg-ivory border-0 border-b-2 border-gray-200 focus:border-royal-gold focus:ring-0 transition-all px-0 py-2 placeholder-gray-300"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
            <div>
              <label className="block text-xs uppercase font-bold text-gray-500 mb-2 tracking-widest">
                {type === 'rooms' ? 'Check-in Date' : 'Event Date'}
              </label>
              <input 
                type="date" required
                className="w-full bg-ivory border-0 border-b-2 border-gray-200 focus:border-royal-gold focus:ring-0 transition-all px-0 py-2"
              />
            </div>
            <div>
              <label className="block text-xs uppercase font-bold text-gray-500 mb-2 tracking-widest">
                {type === 'rooms' ? 'Number of Rooms' : 'Expected Guests'}
              </label>
              <input 
                type="number" required
                className="w-full bg-ivory border-0 border-b-2 border-gray-200 focus:border-royal-gold focus:ring-0 transition-all px-0 py-2 placeholder-gray-300"
                placeholder={type === 'rooms' ? "1" : "200"}
              />
            </div>
          </div>
          
          <div>
            <label className="block text-xs uppercase font-bold text-gray-500 mb-2 tracking-widest">Specific Requirements</label>
            <textarea 
              rows={4}
              className="w-full bg-ivory border-0 border-b-2 border-gray-200 focus:border-royal-gold focus:ring-0 transition-all px-0 py-2 placeholder-gray-300"
              placeholder="Tell us about your catering needs, room preferences, or event themes..."
            ></textarea>
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 rounded font-bold uppercase tracking-widest text-lg transition-all ${isSuccess ? 'bg-green-600 text-white' : 'bg-deep-maroon text-white hover:bg-royal-gold hover:text-deep-maroon'}`}
          >
            {isSubmitting ? 'Sending Request...' : isSuccess ? 'Request Sent Successfully!' : 'Confirm Inquiry'}
          </button>
          
          {isSuccess && (
            <p className="text-center text-green-600 font-medium animate-pulse">
              Thank you! Our team will contact you shortly.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForms;
