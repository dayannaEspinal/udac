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
        { label: "Inicio", href: enAreas ? "index.html" : "#inicio" },
        { label: "Areas de acción", href: "areasdeaccion.html" },
        { label: "Objetivos", href: "#objetivos" },
        { label: "Nosotros", href: "#nosotros" },
        { label: "Eventos", href: "#eventos" },
        { label: "Proyectos", href: "#proyectos" },
        { label: "Contactanos", href: "#contactanos" },
      ]
    },

    heroTitle: "El bosque sustenta la vida, siembra esperanza y garantiza un futuro sostenible para todos.",
    heroText: "Es donde la naturaleza y la humanidad se encuentran.",
    heroImage: "public/img/bosque2.jpg",

    cards: [
      {
        title: "Protección del Medio Ambiente",
        text: "Promovemos la conservación de los recursos naturales mediante acciones que protegen el entorno y garantizan un equilibrio sostenible entre la naturaleza y la comunidad.",
        image: "public/img/niña.jpg",
        alt: "Protección del Medio Ambiente"
      },
      {
        title: "Conservación de la Biodiversidad",
        text: "Trabajamos en la protección de la flora y la fauna, preservando los ecosistemas y fomentando el respeto por la vida silvestre.",
        image: "public/img/colibri.jpg",
        alt: "Conservación de la Biodiversidad"
      },
      {
        title: "Desarrollo Comunitario Sostenible",
        text: "Impulsamos iniciativas que fortalecen a las comunidades mediante educación ambiental, participación ciudadana y prácticas sostenibles.",
        image: "public/img/cultivocafe2.jpg",
        alt: "Desarrollo Comunitario Sostenible"
      }
    ],

    objetivos: [
      {
        title: "Protección de recursos naturales",
        text: "Promover acciones que protejan los ecosistemas y los recursos naturales de las comunidades.",
        icon: "public/img/icon-proteccion.jpg"
      },
      {
        title: "Conservación de la biodiversidad",
        text: "Impulsar iniciativas orientadas a la preservación de flora, fauna y hábitats naturales.",
        icon: "public/img/icon-biodiversidad.jpg"
      },
      {
        title: "Educación ambiental",
        text: "Fomentar el conocimiento y la conciencia ecológica en niños, jóvenes y adultos.",
        icon: "public/img/icon-educacion.jpg"
      },
      {
        title: "Reforestación comunitaria",
        text: "Organizar jornadas de reforestación para restaurar áreas degradadas y fortalecer el entorno natural.",
        icon: "public/img/icon-reforestacion.png"
      },
      {
        title: "Participación ciudadana",
        text: "Involucrar a la comunidad en actividades de protección ambiental y desarrollo sostenible.",
        icon: "public/img/icon-comunitaria.jpeg"
      },
      {
        title: "Prácticas sostenibles",
        text: "Difundir hábitos responsables y sostenibles que contribuyan al bienestar ambiental y social.",
        icon: "public/img/icon-sostenibilidad.jpg"
      }
    ],

    panelTitle: "Los bosques de Honduras bajo amenaza",
    panelText: "Más del 60 % del territorio hondureño está cubierto por bosques biodiversos que albergan paisajes espectaculares, así como también,  flora y fauna diversa. Sin embargo, estos ecosistemas están siendo rápidamente degradados por invasiones ilegales de tierras y áreas protegidas, tala no autorizada, expansión de la agricultura y ganadería, y proyectos de infraestructura.",
    panelText2: "Estas amenazas no solo destruyen los bosques, sino que también afectan gravemente a las comunidades locales, ya que aproximadamente el 40 % de la población depende de los recursos forestales para su subsistencia.",
    panelImage: "public/img/incendiodanli.jpg",
    panelAlt: "Incendio forestal",

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
      brand: "Unidad de Desarrollo Ambiental y Comunitario (UDAC) ",
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

      copyright: "© 2026 Unidad de Desarrollo Ambiental y Comunitario (UDAC) . Todos los derechos reservados."
    }
  };
}