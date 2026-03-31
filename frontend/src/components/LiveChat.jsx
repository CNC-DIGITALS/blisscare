import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { mockData } from '../mock';

export const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: `Hi! I'm here to help you learn about BlissCare. How can I assist you today?`
    }
  ]);

  const quickReplies = [
    'Tell me about pricing',
    'How does it work?',
    'What services do you offer?',
    'Talk to a human'
  ];

  const handleSend = (text) => {
    const userMessage = text || message;
    if (!userMessage.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { type: 'user', text: userMessage }]);
    setMessage('');

    // Simulate bot response
    setTimeout(() => {
      let botResponse = '';
      const lowerText = userMessage.toLowerCase();

      if (lowerText.includes('pricing') || lowerText.includes('cost') || lowerText.includes('price')) {
        botResponse = `Our plans start from ₹4,999/month. We have three main packages: Essential Care (₹4,999), Complete Care (₹9,999 - Most Popular), and Premium Care (₹18,999). Would you like to know more about a specific plan?`;
      } else if (lowerText.includes('how') || lowerText.includes('work')) {
        botResponse = `It's simple! 1) Contact us via phone/WhatsApp or form. 2) We assign a verified care manager. 3) You get daily updates and reports. Would you like to schedule a free consultation?`;
      } else if (lowerText.includes('service') || lowerText.includes('what')) {
        botResponse = `We offer Daily Assistance (groceries, bills, errands), Medical Care (doctor visits, medication), and Emotional Support (companionship, regular visits). All with 24/7 emergency support!`;
      } else if (lowerText.includes('human') || lowerText.includes('talk') || lowerText.includes('speak')) {
        botResponse = `I'd be happy to connect you! Please call us at ${mockData.company.phone} or WhatsApp at ${mockData.company.whatsapp}. Our team is available 24/7!`;
      } else {
        botResponse = `Thanks for your message! For detailed information, please call us at ${mockData.company.phone} or fill out the contact form. Our team will respond within 2 hours!`;
      }

      setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
    }, 1000);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-200 flex items-center justify-center z-50 animate-bounce"
        >
          <MessageCircle className="w-8 h-8" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 max-w-[calc(100vw-2rem)] h-[600px] max-h-[calc(100vh-2rem)] bg-white rounded-3xl shadow-2xl z-50 flex flex-col overflow-hidden animate-in slide-in-from-bottom-8 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">BlissCare Support</h3>
                <p className="text-emerald-100 text-sm">Usually replies instantly</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    msg.type === 'user'
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white'
                      : 'bg-white border border-gray-200 text-gray-800'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          {messages.length <= 2 && (
            <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, index) => (
                  <button
                    key={index}
                    onClick={() => handleSend(reply)}
                    className="px-3 py-2 bg-white border border-emerald-200 text-emerald-700 rounded-full text-sm hover:bg-emerald-50 transition-colors duration-200"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex gap-2">
              <Input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-0"
              />
              <Button
                onClick={() => handleSend()}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-4 rounded-xl"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
