export const business = {
  name: "Reparaciones Nieto",
  phone: "623 15 90 10",
  phoneFormatted: "+34 623 15 90 10",
  whatsapp: "34623159010",
  address: "Calle del Dr. Bergez, 16, 03012 Alicante",
  email: "reparacionesnieto@gmail.com", // Placeholder
  hours: "Abierto 24 horas",
  experience: "15 años de experiencia",
  areas: ["Alicante", "Elche", "Benidorm", "El Campello", "San Juan", "Mutxamel", "San Vicente del Raspeig", "Santomera", "La Manga"],
  areaImages: {
    "alicante": "https://i.imgur.com/khIaZRy.png",
    "elche": "https://i.imgur.com/JDExjxb.png",
    "benidorm": "https://i.imgur.com/ZEqLipq.png",
    "el-campello": "https://i.imgur.com/WVgGaIm.png",
    "san-juan": "https://i.imgur.com/4r6oGGE.jpeg",
    "mutxamel": "https://i.imgur.com/khIaZRy.png",
    "san-vicente-del-raspeig": "https://i.imgur.com/JDExjxb.png",
    "santomera": "https://i.imgur.com/ZEqLipq.png",
  } as Record<string, string>,
  services: [
    {
      id: "persianas",
      title: "Reparación de Persianas",
      description: "Servicio profesional de reparación e instalación de persianas de todo tipo.",
      slug: "persianas",
      icon: "Settings",
      image: "https://i.imgur.com/udiEXk7.png"
    },
    {
      id: "persianas-hogar",
      title: "Persianas de Hogar",
      description: "Instalación y reparación de persianas domésticas, térmicas y de seguridad.",
      slug: "persianas-hogar",
      icon: "Home",
      image: "https://i.imgur.com/dQccUae.png"
    },
    {
      id: "persianas-local",
      title: "Persianas de Local",
      description: "Soluciones para comercios y locales: persianas enrollables y de seguridad.",
      slug: "persianas-local",
      icon: "Store",
      image: "https://i.imgur.com/c2lWsa5.jpeg"
    },
    {
      id: "cierres-metalicos",
      title: "Cierres Metálicos",
      description: "Especialistas en cierres metálicos para negocios y naves industriales.",
      slug: "cierres-metalicos",
      icon: "Lock",
      image: "https://i.imgur.com/ENNkyHz.png"
    },
    {
      id: "fontaneria",
      title: "Fontanería",
      description: "Fontanero urgente en Alicante para averías, fugas e instalaciones.",
      slug: "fontaneria",
      icon: "Droplets",
      image: "https://i.imgur.com/PU6QaKY.png"
    }
  ]
};
