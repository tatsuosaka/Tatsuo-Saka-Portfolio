import React, { useState } from 'react';
import { Send, MessageCircle } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    // Replace this number with your actual WhatsApp number
    const phoneNumber = "5519991210915"; 
    
    const text = `Olá, meu nome é ${name}. ${message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-12 md:py-24 bg-black border-t border-white/5 relative overflow-hidden px-4 md:px-8">
       {/* Decorative glow */}
       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <div className="w-full">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center p-3 bg-brand/10 rounded-full mb-6">
              <MessageCircle className="text-brand" size={24} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Vamos criar algo incrível?</h2>
            <p className="text-xl text-gray-400">Entre em contato diretamente pelo WhatsApp para orçamentos e dúvidas.</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-[#111] p-8 rounded-3xl border border-white/10 shadow-2xl">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Seu Nome</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Como devo te chamar?"
                className="w-full bg-[#0a0a0a] text-white placeholder-gray-600 rounded-xl px-4 py-4 border border-white/10 focus:outline-none focus:border-brand/50 transition-colors"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Mensagem</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                placeholder="Conte-me um pouco sobre o seu projeto..."
                className="w-full bg-[#0a0a0a] text-white placeholder-gray-600 rounded-xl px-4 py-4 border border-white/10 focus:outline-none focus:border-brand/50 transition-colors resize-none"
                required
              />
            </div>

            <button 
              type="submit"
              className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Enviar para WhatsApp</span>
              <Send size={18} />
            </button>
            
            <p className="text-center text-xs text-gray-500 mt-4">
              Ao clicar, você será redirecionado para o WhatsApp.
            </p>
          </div>
        </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;