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
        { label: "Proyectos", href: "proyectos.html" },
        { label: "Contactanos", href: "contactanos.html" },
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
        { number: "+15,000", label: "Árboles plantados" },
        { number: "12", label: "Fuentes de agua protegidas" },
        { number: "+600", label: "Familias beneficiadas" },
        { number: "18", label: "Comunidades atendidas" }
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
      { src: "/img/cultivocafe.jpg", alt: "Cultivo cafe sostenible" }
    ],

    heroEventos: {
      title: "Participa en Nuestros Eventos",
      subtitle: "La acción colectiva es el motor del cambio. En UDAC organizamos constantemente jornadas de reforestación, limpieza de ríos y talleres educativos para proteger los ecosistemas de Honduras. ¡Descubre nuestras actividades y únete para dejar una huella positiva!",
      image: "/img/eventos.jpg"
    },

    heroProyectos: {
      title: "Nuestros Proyectos",
      subtitle: "Iniciativas reales que están transformando a Honduras paso a paso.",
      image: "/img/bosque2.jpg",
      focusTitle: "Nuestros Enfoques Clave:",
      focusItems: [
        { icon: "🌱", label: "Reforestación", value: "+15,000 Árboles Plantados", desc: "En microcuencas críticas de Danlí, restaurando ecosistemas vitales." },
        { icon: "🤝", label: "Desarrollo Comunitario", value: "12 Comunidades Empoderadas", desc: "Capacitaciones en agricultura sostenible y soberanía alimentaria." },
        { icon: "📚", label: "Educación Ambiental", value: "5 Escuelas Equipadas", desc: "Programas interactivos para más de 300 estudiantes locales." },
        { icon: "💧", label: "Conservación de Agua", value: "Protección de 4 Fuentes", desc: "Monitoreo y conservación de microcuencas de agua vitales." }
      ],
      footerText: "Acompáñanos a descubrir las historias detrás de cada hectárea recuperada, cada comunidad fortalecida y cada niño educado para un futuro sostenible."
    },

    heroContactanos: {
      title: "Póngase en contacto con nosotros",
      subtitle: "Estamos aquí para escuchar tus ideas y resolver tus dudas sobre la protección del medio ambiente en Honduras.",
      image: "/img/educacionambiental.jpg",
      profile: {
        name: "John Glitfeldt",
        role: "Coordinador de campañas y recaudación de fondos",
        description: "John es responsable de la recaudación de fondos y también coordinador de las campañas de Bosques y el Mundo.",
        email: "jgl@verdensskove.org",
        phone: "+45 21 60 72 68",
        tag: "Comunicación",
        image: "/img/John.jpg" 
      }
    },

    voluntariado: {
      imgBeneficios: "/img/voluntariado_beneficios.jpg", 
      imgRequisitos: "/img/voluntariado_requisitos.jpg",
      beneficios: [
        "Desarrollo de competencias y habilidades",
        "Reconocimiento de comunidad como una persona que promueve el apropiamiento y sostenibilidad de los procesos de desarrollo en su comunidad.",
        "Contribución al fortalecimiento del bienestar de niños, niñas, familias y comunidades.",
        "Reconocimiento por la labor voluntaria",
        "Oportunidad de servir a las personas vulnerables",
        "Gratificación del personal por servir a otros y formar parte de nuestro programa de voluntariado.",
        "Sin esperar nada a cambio recibe mucho"
      ],
      requisitos: [
        "Ser mayor de 18 años (o contar con permiso de un tutor legal).",
        "Alto compromiso y responsabilidad con las actividades asignadas.",
        "Vocación de servicio, empatía y amor por la naturaleza.",
        "Disponibilidad de tiempo para asistir a las jornadas de campo.",
        "Llenar el formulario oficial de inscripción de UDAC."
      ]
    },

    proyectosData: {
      title: "Nuestros Proyectos",
      subtitle: "Iniciativas que transforman comunidades y protegen nuestro entorno.",
      items: [
        {
          name: "Vivero Forestal Comunitario",
          description: "Creación de un vivero para cultivar especies nativas y reforestar las principales cuencas hídricas de Danlí.",
          image: "/img/Vivero_Forestal.jpg",
          alt: "Vivero forestal",
          status: "En curso"
        },
        {
          name: "Educación Ambiental Escolar",
          description: "Programa de talleres interactivos en escuelas rurales sobre reciclaje y cuidado del agua.",
          image: "/img/Educacion_Ambiental.jpg",
          alt: "Educación ambiental",
          status: "Activo"
        },
        {
          name: "Agricultura Sostenible",
          description: "Apoyo a productores locales para la transición hacia prácticas agroecológicas y conservación del suelo.",
          image: "/img/Agricultura_Sostenible.jpg",
          alt: "Agricultura sostenible",
          status: "En curso"
        },
        {
          name: "Ganadería Sostenible",
          description: "Implementación de sistemas silvopastoriles que combinan árboles y pastizales para mejorar la producción sin deforestar.",
          image: "/img/Ganaderia_Sostenible.jpg",
          alt: "Ganadería sostenible",
          status: "Activo"
        },
        {
          name: "Cultivo de Café Sostenible",
          description: "Promoción de técnicas de cultivo bajo sombra para proteger la biodiversidad y garantizar un grano de alta calidad.",
          image: "/img/Cultivo_Cafe.jpg",
          alt: "Café sostenible",
          status: "Planificación"
        },
        {
          name: "Composta en Casa",
          description: "Talleres comunitarios para transformar residuos orgánicos en abono natural, reduciendo la contaminación ambiental.",
          image: "/img/Composta_Casa.jpg",
          alt: "Composta casera",
          status: "Activo"
        }
      ]
    },

    eventos: {
      title: "Agenda de eventos UDAC",
      subtitle: "Participa en actividades de impacto ambiental y social",
      video: "https://www.youtube.com/embed/1w9pC8x5w3Q",
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
          location: "Río local y zonas urbanas",
          image: "/img/limpiezacomunitaria.jpg"
        }
      ]
    },

    nosotros: {
      hero: {
        title: "¿Quiénes somos?",
        subtitle: "Comprometidos con el desarrollo ambiental y comunitario en Honduras",
        image: "/video/montaña.gif"
      },
      intro: {
        title: "Unidad de Desarrollo Ambiental y Comunitario (UDAC)",
        text: "Somos una organización dedicada a la protección del medio ambiente y el desarrollo sostenible de comunidades en Honduras.",
        text2: "Impulsamos proyectos de reforestación, educación ambiental, limpieza comunitaria y conservación de recursos naturales."
      },
      misionVision: {
        mision: "Promover acciones ambientales sostenibles mediante educación y participación comunitaria.",
        vision: "Ser una organización líder en transformación ambiental y social en Honduras."
      },

      heroProyectos: {
      title: "Nuestros Proyectos",
      subtitle: "Iniciativas reales que están transformando a Honduras paso a paso.",
      image: "/img/bosque2.jpg"
    },

    heroContactanos: {
      title: "Estamos para escucharte",
      subtitle: "Ponte en contacto con nosotros para sumar esfuerzos por el medio ambiente.",
      image: "/img/educacionambiental.jpg"
    },

      proyectos: [
        {
          title: "Reforestación",
          desc: "Restauración de áreas verdes mediante la siembra de árboles.",
          image: "/img/proyecto1.jpg"
        },
        {
          title: "Educación Ambiental",
          desc: "Formación en temas ecológicos para jóvenes y comunidades.",
          image: "/img/charlascolegios.jpg"
        },
        {
          title: "Limpieza Comunitaria",
          desc: "Campañas de limpieza en ríos, calles y espacios públicos.",
          image: "/img/limpiezarios.jpg"
        },
        {
          title: "Conservación",
          desc: "Protección de flora y fauna en zonas vulnerables.",
          image: "/img/conservacion.jpg"
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
      text: "ICF - Conservación Forestal",
      url: "https://icf.gob.hn/",
      desc: "Protección y manejo sostenible de los bosques, áreas protegidas y vida silvestre en Honduras."
    },
    {
      text: "SERNA - Recursos Naturales",
      url: "https://serna.gob.hn/",
      desc: "Institución encargada de la gestión ambiental, recursos naturales y políticas de sostenibilidad del país."
    },
    {
      text: "FAO Medio Ambiente",
      url: "https://www.fao.org/americas/priorities/better-environment/es",
      desc: "Organización internacional que promueve la seguridad alimentaria y la sostenibilidad ambiental global."
    }
  ],


  intro: {
    title: "Acciones que transforman el entorno",
    text: "Nuestros eventos están diseñados para generar impacto real en el medio ambiente y fortalecer la participación comunitaria en Honduras.",
    highlight: "Reforestación, educación ambiental y limpieza ecológica son parte de nuestro compromiso."
  },

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
      desc: "Talleres educativos sobre reciclaje, cambio climático, agua y sostenibilidad.",
      date: "Mayo 2026",
      location: "Centro comunitario UDAC",
      image: "/img/charla.jpg"
    },
    {
      title: "Limpieza Ecológica",
      desc: "Campaña de limpieza de ríos y espacios públicos para reducir contaminación.",
      date: "Junio 2026",
      location: "Río Choluteca, Danlí",
      image: "/img/limpiezarios.jpg"
    }
  ],

  extra: {
    highlight: {
      title: "Únete al cambio",
      text: "Cada acción cuenta. Participa en nuestros eventos y ayuda a transformar el medio ambiente en Honduras.",
      button: "Quiero participar",
      link: "/contacto.html",
      bg: "/video/naturaleza.gif"
    },

    gallery: [
      "/img/proyectoecologico.jpg",
      "/img/conservarflora.jpg",
      "/img/conservarfauna.jpg",
      "/img/reunionecologica.jpg"
    ],

    testimonials: [
      {
        text: "Una experiencia increíble, aprendí mucho sobre el medio ambiente.",
        name: "María López"
      },
      {
        text: "Me encantó participar en la reforestación.",
        name: "Carlos Méndez"
      },
      {
        text: "Excelente organización y muy buen ambiente.",
        name: "Ana García"
      }
    ]
  }
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