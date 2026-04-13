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
          title: "Cada acción refleja el compromiso de UDAC con la protección ambiental y el desarrollo comunitario.",
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
      objetivosTitle: "Trabajamos por una Honduras más verde a través de objetivos que integran conservación, educación, participación y sostenibilidad.",
      items: [
        {
          title: "Recursos Naturales",
          text: "Proteger bosques, ríos y fuentes de agua fundamentales para la vida y el equilibrio ambiental.",
          icon: "/img/icon-proteccion2.png"
        },
        {
          title: "Biodiversidad",
          text: "Conservar la flora y fauna de Honduras, preservando sus hábitats y riqueza ecológica.",
          icon: "/img/icon-biodiversidad2.png"
        },
        {
          title: "Educación Ambiental",
          text: "Fomentar conciencia ecológica mediante procesos formativos dirigidos a la comunidad.",
          icon: "/img/icon-educacion2.png"
        },
        {
          title: "Participación Ciudadana",
          text: "Motivar a las comunidades a involucrarse en acciones ambientales con compromiso y responsabilidad.",
          icon: "/img/icon-participacion2.png"
        },
        {
          title: "Prácticas Sostenibles",
          text: "Promover hábitos responsables como reciclaje, consumo consciente y uso eficiente de recursos.",
          icon: "/img/icon-sostenibilidad2.png"
        },
        {
          title: "Reforestación",
          text: "Impulsar jornadas de siembra y recuperación de áreas afectadas para restaurar ecosistemas.",
          icon: "/img/icon-reforestacion2.png"
        }
      ]
    },


      galleryTitle: "Acciones que transforman",
      galleryImages: [
        { src: "/img/reforestacion3.jpg", alt: "Reforestacion" },
        { src: "/img/limpiezarios.jpg", alt: "Limpieza de rios" },
        { src: "/img/recoleccionbasura.jpg", alt: "Recoleccion de basura" },
        { src: "/img/ganaderiasostenible.jpg", alt: "Ganderia sostenible" },
        { src: "/img/composta.jpg", alt: "Composta" },
        { src: "/img/reforestacion4.jpg", alt: "Reforestacion4" },
        { src: "/img/niña.jpg", alt: "niña comunidad" },
        { src: "/img/limpiezarios2.jpg", alt: "Limpieza rios" },
        { src: "/img/cultivocafe.jpg", alt: "Cultivo cafe sostenible" },
],
eventos: {
  title: "Agenda de eventos UDAC",
  subtitle: "Participa en actividades de impacto ambiental y social",

  image: "/img/eventos.jpg",

  video: "https://www.youtube.com/embed/1w9pC8x5w3Q",

  links: [
    {
      text: "Sobre Nosotros",
      url: "/nosotros.html"
    },
    {
      text: "Contáctanos",
      url: "/contacto.html"
    },
    {
      text: "Facebook UDAC",
      url: "https://facebook.com",
      external: true
    }
  ],

  items: [
    {
      title: "Reforestación Masiva",
      desc: "Jornada comunitaria de siembra de árboles para restaurar áreas degradadas y fortalecer ecosistemas locales.",
      date: "Abril 2026",
      location: "Zona rural de Danlí",
      image: "/img/reforestacion.jpg"
    },
    {
      title: "Educación Ambiental",
      desc: "Talleres educativos sobre reciclaje, cambio climático, agua y sostenibilidad dirigidos a jóvenes y adultos.",
      date: "Mayo 2026",
      location: "Centro comunitario UDAC",
      image: "/img/charla.jpg"
    },
    {
      title: "Limpieza Ecológica",
      desc: "Campaña de limpieza de ríos y espacios públicos para reducir contaminación y proteger fuentes de agua.",
      date: "Junio 2026",
      location: "Río Choluteca, Danlí",
      image: "/img/limpiezarios.jpg"
    }
  ]
},
nosotros: {
  hero: {
    title: "¿Quiénes somos?",
    subtitle: "Comprometidos con el desarrollo ambiental y comunitario en Honduras",
    image: "/video/bosque.gif"
  },

  intro: {
    title: "Unidad de Desarrollo Ambiental y Comunitario (UDAC)",
    text: "Somos una organización enfocada en la protección del medio ambiente y el desarrollo sostenible en comunidades de Honduras.",
    text2: "Realizamos proyectos de reforestación, educación ambiental, limpieza comunitaria y conservación de recursos naturales."
  },

  misionVision: {
    mision: "Promover la conciencia ambiental mediante acciones comunitarias y educación sostenible.",
    vision: "Ser una organización líder en la transformación ambiental de Honduras."
  },

  proyectos: [
    {
      title: "Reforestación",
      desc: "Plantación de árboles en zonas afectadas por la deforestación.",
      image: "/img/reforestacion.jpg"
    },
    {
      title: "Educación Ambiental",
      desc: "Charlas y talleres sobre cuidado del medio ambiente.",
      image: "/img/charla.jpg"
    },
    {
      title: "Limpieza Comunitaria",
      desc: "Campañas de limpieza en ríos y zonas urbanas.",
      image: "/img/limpiezarios.jpg"
    },
    {
      title: "Conservación",
      desc: "Protección de flora y fauna en áreas naturales.",
      image: "/img/conservacion.jpg"
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