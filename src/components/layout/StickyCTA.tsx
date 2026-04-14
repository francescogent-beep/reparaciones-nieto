import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { business } from '@/src/lib/business';

export const StickyCTA = () => {
  return (
    <div className="md:hidden fixed bottom-8 left-0 right-0 z-50 px-6 flex space-x-4 pointer-events-none">
      <a 
        href={`tel:${business.phone.replace(/\s/g, '')}`} 
        className="flex-1 pointer-events-auto bg-orange-600/90 backdrop-blur-md text-white py-4 rounded-2xl flex items-center justify-center space-x-2 font-semibold shadow-[0_8px_30px_rgb(0,0,0,0.12)] active:scale-95 transition-all duration-200 border border-white/10"
      >
        <Phone className="w-4 h-4" />
        <span className="text-[15px] tracking-tight">Urgencias</span>
      </a>
      <a 
        href={`https://wa.me/${business.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 pointer-events-auto bg-green-500/90 backdrop-blur-md text-white py-4 rounded-2xl flex items-center justify-center space-x-2 font-semibold shadow-[0_8px_30px_rgb(0,0,0,0.12)] active:scale-95 transition-all duration-200 border border-white/10"
      >
        <MessageCircle className="w-4 h-4" />
        <span className="text-[15px] tracking-tight">Escríbenos</span>
      </a>
    </div>
  );
};
