'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('./Header').then(mod => mod.Header), { ssr: false });
const Footer = dynamic(() => import('./Footer').then(mod => mod.Footer), { ssr: false });
const StickyCTA = dynamic(() => import('./StickyCTA').then(mod => mod.StickyCTA), { ssr: false });
const Location = dynamic(() => import('../sections/Location').then(mod => mod.Location), { ssr: false });

export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Location />
      <Footer />
      <StickyCTA />
    </>
  );
};
