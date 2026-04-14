import React from 'react';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Página no encontrada</h1>
      <p className="text-lg text-gray-600 mb-8">Lo sentimos, la página que buscas no existe.</p>
      <a 
        href="/"
        className="bg-blue-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors"
      >
        Volver al inicio
      </a>
    </div>
  );
}
