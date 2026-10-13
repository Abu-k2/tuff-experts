
import React, { useState } from 'react';
import { PhoneIcon, MailIcon, LocationMarkerIcon, ClockIcon, CheckCircleIcon } from './Icons';
import { motion } from 'framer-motion';
import { fadeIn } from './AnimationUtils';

const PHONE_DISPLAY = '0728 614934';
const PHONE_TEL = 'tel:0728614934';
const PHONE2_DISPLAY = '0719 543587';
const PHONE2_TEL = 'tel:0719543587';
const WHATSAPP_LINK = 'https://wa.me/254728614934';
const EMAIL = 'tuffexperts@gmail.com';

const ContactInfoItem: React.FC<{ icon: React.ReactNode; label: string; value: string; href?: string }> = ({ icon, label, value, href }) => (
  <div className="flex items-start">
    <div className="flex-shrink-0 w-11 h-11 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
      {icon}
    </div>
    <div className="ml-4 min-w-0">
      <h4 className="font-semibold text-brand-dark">{label}</h4>
      {href ? (
        <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-gray-600 hover:text-brand-green transition-colors break-words">{value}</a>
      ) : (
        <p className="text-gray-600">{value}</p>
      )}
    </div>
  </div>
);

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '' });
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [channel, setChannel] = useState<'whatsapp' | 'email'>('whatsapp');
  const formRef = React.useRef<HTMLFormElement>(null);

  const buildMessageText = () => {
    return [
      'Hello Tuff Experts,',
      '',
      `Name: ${formState.name}`,
      `Phone: ${formState.phone || 'Not provided'}`,
      `Email: ${formState.email}`,
      '',
      'Project Details:',
      message,
    ].join('\n');
  };

  const resetForm = () => {
    setFormState({ name: '', email: '', phone: '' });
    setMessage('');
  };

  const sendViaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const url = `${WHATSAPP_LINK}?text=${encodeURIComponent(buildMessageText())}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setChannel('whatsapp');
    setIsSubmitted(true);
    resetForm();
    setTimeout(() => setIsSubmitted(false), 8000);
  };

  const sendViaEmail = () => {
    // Enforce required-field validation for the standalone button
    if (formRef.current && !formRef.current.reportValidity()) return;
    const subject = `Website Enquiry from ${formState.name}`;
    const url = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildMessageText())}`;
    window.location.href = url;
    setChannel('email');
    setIsSubmitted(true);
    resetForm();
    setTimeout(() => setIsSubmitted(false), 8000);
  };

  const inputClasses = "mt-1 block w-full px-4 py-2.5 bg-white border border-gray-300 rounded-md shadow-sm text-brand-dark placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green transition-colors";

  return (
    <form ref={formRef} onSubmit={sendViaWhatsApp} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">Full Name *</label>
          <input
            type="text"
            id="full-name"
            required
            placeholder="Your name"
            value={formState.name}
            onChange={(e) => setFormState({...formState, name: e.target.value})}
            className={inputClasses}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            type="tel"
            id="phone"
            placeholder="07XX XXX XXX"
            value={formState.phone}
            onChange={(e) => setFormState({...formState, phone: e.target.value})}
            className={inputClasses}
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address *</label>
        <input
          type="email"
          id="email"
          required
          placeholder="you@example.com"
          value={formState.email}
          onChange={(e) => setFormState({...formState, email: e.target.value})}
          className={inputClasses}
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Project Details *</label>
        <textarea
          id="message"
          rows={4}
          required
          placeholder="Tell us about your project — location, area size, and material of interest..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          maxLength={500}
          className={inputClasses}
        ></textarea>
        <p className="text-right text-sm text-gray-500 mt-1">{message.length}/500 characters</p>
      </div>
      {isSubmitted && (
        <motion.div
          className="flex items-center gap-2 bg-green-50 border border-brand-green/30 text-brand-green rounded-md px-4 py-3 text-sm font-medium"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          role="status"
        >
          <CheckCircleIcon className="h-5 w-5 flex-shrink-0" />
          {channel === 'whatsapp'
            ? 'Opening WhatsApp — tap send to deliver your enquiry. We reply within minutes during business hours.'
            : 'Opening your email app — hit send to deliver your enquiry to tuffexperts@gmail.com.'}
        </motion.div>
      )}
      <button
        type="submit"
        className="w-full bg-brand-green hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
      >
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Send via WhatsApp
      </button>
      <button
        type="button"
        onClick={sendViaEmail}
        className="w-full bg-white hover:bg-gray-50 text-brand-green border-2 border-brand-green font-bold py-2.5 px-6 rounded-md transition duration-300 flex items-center justify-center gap-2"
      >
        <MailIcon className="h-5 w-5" />
        Or Send via Email
      </button>
      <p className="text-xs text-gray-500 text-center">
        Prefer to talk? Call us directly at{' '}
        <a href={PHONE_TEL} className="text-brand-green font-semibold hover:underline">{PHONE_DISPLAY}</a>
      </p>
    </form>
  );
};


const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold text-brand-dark mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-brand-green mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to transform your space? Reach out to the Tuff Experts team for a free consultation and quote on wall to wall carpet flooring, tuff fields, tiles, wooden flooring and wall finishes across Nairobi.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            className="bg-brand-light p-8 rounded-lg shadow-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-brand-dark mb-8">Contact Information</h3>
            <div className="space-y-7">
              <ContactInfoItem icon={<PhoneIcon className="h-6 w-6" />} label="Call Us" value={PHONE_DISPLAY} href={PHONE_TEL} />
              <ContactInfoItem icon={<PhoneIcon className="h-6 w-6" />} label="Call Us (2nd Line)" value={PHONE2_DISPLAY} href={PHONE2_TEL} />
              <ContactInfoItem icon={<MailIcon className="h-6 w-6" />} label="Email" value={EMAIL} href={`mailto:${EMAIL}`} />
              <ContactInfoItem icon={<LocationMarkerIcon className="h-6 w-6" />} label="Service Area" value="Nairobi, Kenya & Surrounding Counties" />
              <div className="flex items-start">
                <div className="flex-shrink-0 w-11 h-11 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
                  <ClockIcon className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-brand-dark">Business Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
            <div className="mt-10 pt-8 border-t border-gray-200">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-md transition duration-300 shadow-md hover:shadow-lg"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Chat with us on WhatsApp
              </a>
            </div>
          </motion.div>
          <motion.div
            className="bg-brand-light p-8 rounded-lg shadow-sm"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-brand-dark mb-2">Send us a Message</h3>
            <p className="text-gray-600 text-sm mb-6">Fill in the form below and we will respond within 24 hours.</p>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
