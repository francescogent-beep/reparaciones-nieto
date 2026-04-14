import React from 'react';

const Legal = ({ title }: { title: string }) => (
  <div className="py-20 max-w-4xl mx-auto px-4">
    <h1 className="text-3xl font-bold mb-8">{title}</h1>
    <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
      <p>En Reparaciones Nieto nos tomamos muy en serio la transparencia y la protección de nuestros clientes.</p>
      
      <h2 className="text-xl font-bold text-gray-900">1. Información General</h2>
      <p>En cumplimiento de la Ley 34/2002, de 11 de julio, de servicios de la sociedad de la información y de comercio electrónico, se informa que el titular de este sitio web es Reparaciones Nieto, con domicilio en Calle del Dr. Bergez, 16, 03012 Alicante.</p>
      
      <h2 className="text-xl font-bold text-gray-900">2. Propiedad Intelectual</h2>
      <p>Todos los contenidos de este sitio web, incluyendo textos, imágenes y logotipos, son propiedad de Reparaciones Nieto o de sus respectivos licenciantes y están protegidos por las leyes de propiedad intelectual.</p>
      
      <h2 className="text-xl font-bold text-gray-900">3. Protección de Datos</h2>
      <p>De acuerdo con el Reglamento General de Protección de Datos (RGPD), le informamos que sus datos personales serán tratados con la única finalidad de prestarle el servicio solicitado y enviarle información comercial si así lo autoriza.</p>
      
      <h2 className="text-xl font-bold text-gray-900">4. Uso de Cookies</h2>
      <p>Este sitio web utiliza cookies técnicas y analíticas para mejorar la experiencia del usuario. Al navegar por nuestro sitio, usted acepta el uso de las mismas de acuerdo con nuestra política de cookies.</p>
    </div>
  </div>
);

export default function PrivacidadPage() {
  return <Legal title="Política de Privacidad" />;
}
