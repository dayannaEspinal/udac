export const getData = (page) => {
  let contextData = {};

  switch (page) {
    default:
      contextData = { ...contextData };
  }

  return { ...contextData, ...getAllPageContext(page) };
};

function getAllPageContext(page) {
  const enAreas = page.includes("areasdeaccion.html");

  return {
    pageTitle: "UDAC",

    navbar: {
  brand: "UDAC",
  menu: [
    { label: "Inicio", href: "index.html" },
    { label: "Areas de acción", href: "areasdeaccion.html" },
    { label: "Objetivos", href: "objetivos.html" },
    { label: "Nosotros", href: "nosotros.html" },
    { label: "Eventos", href: "eventos.html" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contactanos", href: "#contactanos" },
  ]
},
    heroTitle: "El bosque sustenta la vida, siembra esperanza y garantiza un futuro sostenible para todos.",
    heroText: "Es donde la naturaleza y la humanidad se encuentran.",
    heroImage: "/img/bosque2.jpg",

    cards: [
      {
        title: "Protección del Medio Ambiente",
        text: "Promovemos la conservación de los recursos naturales mediante acciones que protegen el entorno y garantizan un equilibrio sostenible entre la naturaleza y la comunidad.",
        image: "/img/niña.jpg",
        alt: "Protección del Medio Ambiente"
      },
      {
        title: "Conservación de la Biodiversidad",
        text: "Trabajamos en la protección de la flora y la fauna, preservando los ecosistemas y fomentando el respeto por la vida silvestre.",
        image: "/img/colibri.jpg",
        alt: "Conservación de la Biodiversidad"
      },
      {
        title: "Desarrollo Comunitario Sostenible",
        text: "Impulsamos iniciativas que fortalecen a las comunidades mediante educación ambiental, participación ciudadana y prácticas sostenibles.",
        image: "/img/cultivocafe2.jpg",
        alt: "Desarrollo Comunitario Sostenible"
      }
    ],

    objetivos: [
      {
        title: "Protección de recursos naturales",
        text: "Promover acciones que protejan los ecosistemas y los recursos naturales de las comunidades.",
        icon: "/img/icon-proteccion.jpg"
      },
      {
        title: "Conservación de la biodiversidad",
        text: "Impulsar iniciativas orientadas a la preservación de flora, fauna y hábitats naturales.",
        icon: "/img/icon-biodiversidad.jpg"
      },
      {
        title: "Educación ambiental",
        text: "Fomentar el conocimiento y la conciencia ecológica en niños, jóvenes y adultos.",
        icon: "/img/icon-educacion.jpg"
      },
      {
        title: "Reforestación comunitaria",
        text: "Organizar jornadas de reforestación para restaurar áreas degradadas y fortalecer el entorno natural.",
        icon: "/img/icon-reforestacion.png"
      },
      {
        title: "Participación ciudadana",
        text: "Involucrar a la comunidad en actividades de protección ambiental y desarrollo sostenible.",
        icon: "/img/icon-comunitaria.jpeg"
      },
      {
        title: "Prácticas sostenibles",
        text: "Difundir hábitos responsables y sostenibles que contribuyan al bienestar ambiental y social.",
        icon: "/img/icon-sostenibilidad.jpg"
      }
    ],

    panelTitle: "Los bosques de Honduras bajo amenaza",
    panelText: "Más del 60 % del territorio hondureño está cubierto por bosques biodiversos que albergan paisajes espectaculares, así como también, flora y fauna diversa. Sin embargo, estos ecosistemas están siendo rápidamente degradados por invasiones ilegales de tierras y áreas protegidas, tala no autorizada, expansión de la agricultura y ganadería, y proyectos de infraestructura.",
    panelText2: "Estas amenazas no solo destruyen los bosques, sino que también afectan gravemente a las comunidades locales, ya que aproximadamente el 40 % de la población depende de los recursos forestales para su subsistencia.",
    panelImage: "/img/incendiodanli.jpg",
    panelAlt: "Incendio forestal",

    // 🔥 AREAS DE ACCIÓN (PARA HERO PANEL)
    areasPanel: [
      {
        layoutClass: "normal",
        title: "Reforestación comunitaria",
        description: "Impulsamos jornadas de reforestación para recuperar áreas degradadas, fortalecer los ecosistemas y promover la participación activa de la comunidad en la protección del entorno natural.",
        image: "/img/reforestacion2.jpg",
        alt: "Reforestación comunitaria"
      },
      {
        layoutClass: "reverse",
        title: "Protección de recursos naturales",
        description: "Promovemos acciones enfocadas en el cuidado del agua, el suelo y los bosques, fomentando prácticas responsables que aseguren la sostenibilidad ambiental.",
        image: "/img/recoleccionbasura.jpg",
        alt: "Protección de recursos naturales"
      },
      {
        layoutClass: "normal",
        title: "Conservación de la biodiversidad",
        description: "Trabajamos en la preservación de la flora y fauna local, protegiendo los hábitats naturales y concientizando a la población sobre la importancia del equilibrio ecológico.",
        image: "/img/areaprotegida.jpg",
        alt: "Conservación de la biodiversidad"
      },
      {
        layoutClass: "reverse",
        title: "Educación ambiental",
        description: "Desarrollamos actividades educativas dirigidas a niños, jóvenes y adultos para fortalecer la conciencia ecológica y fomentar hábitos sostenibles.",
        image: "/img/educacionambiental.jpg",
        alt: "Educación ambiental"
      }
    ],

      impactoNumeros: {
  subtitle: "Cada acción refleja el compromiso de UDAC con la protección ambiental y el desarrollo comunitario.",
  stats: [
    {
      number: "+15,000",
      label: "Árboles plantados"
    },
    {
      number: "12",
      label: "Fuentes de agua protegidas"
    },
    {
      number: "+600",
      label: "Familias beneficiadas"
    },
    {
      number: "18",
      label: "Comunidades atendidas"
    }
  ]
},
    objetivosSection: {
    title: "Acciones conectadas por un mismo propósito",
    
    general: {
      text: "Trabajamos por una Honduras más verde a través de objetivos que integran conservación, educación, participación y sostenibilidad.",
      icon: "/images/icons/objetivo-general.png"
    },

    items: [
      {
        position: 1,
        title: "Recursos Naturales",
        text: "Proteger bosques, ríos y fuentes de agua fundamentales para la vida y el equilibrio ambiental.",
        icon: "/img/icon-proteccion.jpg"
      },
      {
        position: 2,
        title: "Biodiversidad",
        text: "Conservar la flora y fauna de Honduras, preservando sus hábitats y riqueza ecológica.",
        icon: "/img/icon-biodiversidad.jpg"
      },
      {
        position: 3,
        title: "Educación Ambiental",
        text: "Fomentar conciencia ecológica mediante procesos formativos dirigidos a la comunidad.",
        icon: "/img/icon-educacion.jpg"
      },
      {
        position: 4,
        title: "Reforestación",
        text: "Impulsar jornadas de siembra y recuperación de áreas afectadas para restaurar ecosistemas.",
        icon: "/img/icon-reforestacion.png"
      },
      {
        position: 5,
        title: "Participación Ciudadana",
        text: "Motivar a las comunidades a involucrarse en acciones ambientales con compromiso y responsabilidad.",
        icon: "/img/icon-participacion.jpg"
      },
      {
        position: 6,
        title: "Prácticas Sostenibles",
        text: "Promover hábitos responsables como reciclaje, consumo consciente y uso eficiente de recursos.",
        icon: "/img/icon-sostenibilidad.jpg"
      }
    ]
  },
  
    contact: {
      sectionTitle: "Contáctanos",
      sectionSubtitle: "¿Tienes alguna pregunta? Estamos aquí para ayudarte",
      contactInfo: {
        title: "Información de Contacto",
        phones: ["+504 2234-5678", "+504 9840-7071"],
        emails: ["info@udac.hn"],
        address: ["Col. La Majada, Danli", "El Paraiso, Honduras"],
        hours: ["Lunes a sabado", "24 horas"]
      },
      form: {
        nombre: { label: "Nombre Completo *", placeholder: "Ingresa tu nombre", required: true },
        email: { label: "Email *", placeholder: "tu@email.com", required: true },
        telefono: { label: "Teléfono *", placeholder: "+504 0000-0000", required: true },
        asunto: {
          label: "Asunto",
          options: [
            { value: "", text: "Selecciona un asunto" },
            { value: "informacion", text: "Información General" },
            { value: "eventos", text: "Eventos" },
            { value: "quejas o sugerencias", text: "Quejas o Sugerencias" },
            { value: "otro", text: "Otro" }
          ]
        },
        mensaje: { label: "Mensaje *", placeholder: "Escribe tu mensaje aquí...", required: true },
        btnSubmit: "Enviar Mensaje"
      }
    },

    footer: {
      brand: "Unidad de Desarrollo Ambiental y Comunitario (UDAC)",
      description: "La responsabilidad de hoy es la supervivencia del mañana.",
      contact: {
        title: "Contáctanos",
        items: [
          { icon: "📱", text: "+504 98407071" },
          { icon: "✉️", text: "info@udac.hn" },
          { icon: "📍", text: "Col. La Majada, Danli, El Paraiso" }
        ]
      },

      social: {
        title: "Síguenos",
        links: [
          { href: "https://www.facebook.com/udaclamajada2danli/?locale=es_LA", class: "facebook", text: "Facebook" }
        ]
      },

      copyright: "© 2026 UDAC. Todos los derechos reservados."
    }
  };
}