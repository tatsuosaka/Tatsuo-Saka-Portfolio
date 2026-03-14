import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Loader2 } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const Assistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi! I'm Tatsu's AI assistant. Ask me about his editing style, availability, or favorite tools." }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      // Format history for the service
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const responseText = await sendMessageToGemini(userMessage, history);
      
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting right now. Please email Tatsu directly.", isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="contact" className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
       {/* Decorative glow */}
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-brand/10 rounded-full mb-6">
            <Sparkles className="text-brand" size={24} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Have a question?</h2>
          <p className="text-xl text-gray-400">Chat with my AI assistant or email me directly at <a href="mailto:contact@tatsuosaka.com" className="text-brand hover:underline">contact@tatsuosaka.com</a></p>
        </div>

        {/* Chat Interface */}
        <div className="bg-[#111] rounded-3xl border border-white/10 overflow-hidden shadow-2xl max-w-2xl mx-auto">
          <div className="h-96 overflow-y-auto p-6 space-y-4 bg-[#0a0a0a]">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[80%] p-4 rounded-2xl text-sm md:text-base leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-brand text-white rounded-br-none' 
                      : 'bg-[#222] text-gray-200 rounded-bl-none border border-white/5'
                  } ${msg.isError ? 'border-brand/50 text-brand' : ''}`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                 <div className="bg-[#222] p-4 rounded-2xl rounded-bl-none border border-white/5 flex items-center space-x-2">
                    <Loader2 size={16} className="animate-spin text-brand" />
                    <span className="text-gray-400 text-sm">Thinking...</span>
                 </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-[#111] border-t border-white/10">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about my rates, software, or availability..."
                className="w-full bg-[#0a0a0a] text-white placeholder-gray-500 rounded-xl pl-4 pr-12 py-4 border border-white/10 focus:outline-none focus:border-brand/50 transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-brand hover:bg-brand/80 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Assistant;