import {
  PiPlugFill,
  PiLightningFill,
  PiToolboxFill,
  PiClipboardTextFill,
} from "react-icons/pi";

const servicesData = [
  {
    name: "instalaciones",
    icon: <PiPlugFill/> ,
    title: "Instalaciones Eléctricas",
    description:
      "Realizamos instalaciones eléctricas seguras y eficientes para proyectos residenciales, comerciales e industriales. Cumplimos con los estándares técnicos para garantizar un suministro eléctrico confiable y duradero.",
    serviceList: [
      "Instalaciones Residenciales",
      "Instalaciones Comerciales",
      "Sistemas Trifásicos",
      "Tendido de Cables",
      "Tableros Eléctricos",
      "Canalizaciones y Tuberías EMT",
    ],
    thumbs: [
      {
        url: "/assets/img/services/thumb-1.jpg",
      },
      {
        url: "/assets/img/services/thumb-2.jpg",
      },
    ],
  },
  {
    name: "mantenimiento",
    icon: <PiToolboxFill/>,
    title: "Mantenimiento Eléctrico",
    description:
      "Ofrecemos mantenimiento preventivo y correctivo para sistemas eléctricos, evitando fallos y prolongando la vida útil de los equipos. Nuestro servicio asegura continuidad operativa y seguridad.",
    serviceList: [
      "Inspección de Circuitos",
      "Cambio de Breakers",
      "Medición de Consumo",
      "Corrección de Factor de Potencia",
      "Termografía Eléctrica",
      "Limpieza de Tableros",
    ],
    thumbs: [
      {
        url: "/assets/img/services/thumb-3.jpg",
      },
      {
        url: "/assets/img/services/thumb-4.jpg",
      },
    ],
  },
  {
    name: "sistemas",
    icon: <PiLightningFill/> ,
    title: "Sistemas Especiales",
    description:
      "Implementamos soluciones integrales para sistemas eléctricos avanzados, como iluminación inteligente, automatización y sistemas de respaldo, adaptados a las necesidades modernas.",
    serviceList: [
      "Iluminación LED Inteligente",
      "Automatización Residencial",
      "Sistemas Fotovoltaicos (paneles solares)",
      "UPS y Generadores",
      "Sistemas de Puesta a Tierra",
      "Pararrayos y Protección contra Sobretensiones",
    ],
    thumbs: [
      {
        url: "/assets/img/services/thumb-5.jpg",
      },
      {
        url: "/assets/img/services/thumb-6.jpg",
      },
    ],
  },
  {
    name: "proyectos",
    icon: <PiClipboardTextFill/> ,
    title: "Diseño y Proyectos Eléctricos",
    description:
      "Desarrollamos proyectos eléctricos desde la planificación hasta la ejecución, incluyendo planos, cálculos de carga, y documentación para licencias y supervisión técnica.",
    serviceList: [
      "Diseño de Planos Eléctricos",
      "Cálculo de Cargas",
      "Memorias Técnicas",
      "Tramitación de Licencias",
      "Supervisión de Obras",
      "Consultorías Técnicas",
    ],
    thumbs: [
      {
        url: "/assets/img/services/thumb-1.jpg",
      },
      {
        url: "/assets/img/services/thumb-4.jpg",
      },
    ],
  },
];

export default servicesData;




// import {
//   PiWallFill,
//   PiPaintRollerFill,
//   PiWrenchFill,
//   PiUserGearFill,
// } from "react-icons/pi";
// const serviceData = [
//   {
//     name: "construction",
//     icon: <PiWallFill />,
//     title: "Servicio de Construcción",
//     description:
//       "Construimos con precisión e innovación, aseguramos que toda nuestra estructura sea fuerte y construida con lo ultimo, Desde el inicio hasta los ultimos acabados , nuestra experiencia transforma ideas dentro de la realidad.",
//     serviceList: [
//       "Construcción Residencial",
//       "Diseño Estructural",
//       "Prepación del Sitio",
//       "Trabajo en Concreto",
//       "Estructurado y Techado",
//       "Acabado Interior",
//     ],
//     thumbs: [
//       {
//         url: "/assets/img/services/thumb-1.jpg",
//       },
//       {
//         url: "/assets/img/services/thumb-2.jpg",
//       },
//     ],
//   },
//   {
//     name: "renovación",
//     icon: <PiPaintRollerFill />,
//     title: "Servicio de Renovación",
//     description:
//       "Construimos con precisión e innovación, aseguramos que toda nuestra estructura sea fuerte y construida con lo ultimo, Desde el inicio hasta los ultimos acabados , nuestra experiencia transforma ideas dentro de la realidad.",
//     serviceList: [
//       "Remodelación de Cocina",
//       "Acabo de Sótano",
//       "Renovación de Piso",
//       "Mejoras de Energía",
//       "Carpintería",
//       "Pintura",
//     ],
//     thumbs: [
//       {
//         url: "/assets/img/services/thumb-3.jpg",
//       },
//       {
//         url: "/assets/img/services/thumb-4.jpg",
//       },
//     ],
//   },
//   {
//     name: "restauración",
//     icon: <PiWrenchFill />,
//     title: "Servicio de Restauración",
//     description:
//       "Construimos con precisión e innovación, aseguramos que toda nuestra estructura sea fuerte y construida con lo ultimo, Desde el inicio hasta los ultimos acabados , nuestra experiencia transforma ideas dentro de la realidad.",
//     serviceList: [
//       "Restos Históricos",
//       "Daños por Agua",
//       "Reparación contraincendios",
//       "Arreglo Estructural",
//       "Eliminación de Moho",
//       "Restauración de Piso",
//     ],
//     thumbs: [
//       {
//         url: "/assets/img/services/thumb-4.jpg",
//       },
//       {
//         url: "/assets/img/services/thumb-5.jpg",
//       },
//     ],
//   },
//   {
//     name: "Proformas",
//     icon: <PiUserGearFill />,
//     title: "Servicio de Proformas",
//     description:
//       "Construimos con precisión e innovación, aseguramos que toda nuestra estructura sea fuerte y construida con lo ultimo, Desde el inicio hasta los ultimos acabados , nuestra experiencia transforma ideas dentro de la realidad.",
//     serviceList: [
//       "Planes de Proyecto",
//       "Costos",
//       "Administración de Sitios",
//       "Permisos",
//       "Sostenibilidad",
//       "Seguridad",
//     ],
//     thumbs: [
//       {
//         url: "/assets/img/services/thumb-1.jpg",
//       },
//       {
//         url: "/assets/img/services/thumb-3.jpg",
//       },
//     ],
//   },
// ];
