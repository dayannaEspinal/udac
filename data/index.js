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
        { label: "Áreas de acción", href: "areasdeaccion.html" },
        { label: "Objetivos", href: "objetivos.html" },
        { label: "Nosotros", href: "nosotros.html" },
        { label: "Eventos", href: "eventos.html" },
        { label: "Proyectos", href: "proyectos.html" },
        { label: "Contactanos", href: "contactanos.html" }
      ]
    },

    heroTitle: "El bosque sustenta la vida, siembra esperanza y garantiza un futuro sostenible para todos.",
    heroText: "Es donde la naturaleza y la humanidad se encuentran.",
    heroImage: "./img/bosque2.jpg",

    cards: [
      {
        title: "Protección del Medio Ambiente",
        text: "Promovemos la conservación de los recursos naturales mediante acciones que protegen el entorno y garantizan un equilibrio sostenible entre la naturaleza y la comunidad.",
        image: "./img/niña.jpg",
        alt: "Protección del Medio Ambiente"
      },
      {
        title: "Conservación de la Biodiversidad",
        text: "Trabajamos en la protección de la flora y la fauna, preservando los ecosistemas y fomentando el respeto por la vida silvestre.",
        image: "./img/colibri.jpg",
        alt: "Conservación de la Biodiversidad"
      },
      {
        title: "Desarrollo Comunitario Sostenible",
        text: "Impulsamos iniciativas que fortalecen a las comunidades mediante educación ambiental, participación ciudadana y prácticas sostenibles.",
        image: "./img/cultivocafe2.jpg",
        alt: "Desarrollo Comunitario Sostenible"
      }
    ],

    objetivos: [
      {
        title: "Protección de recursos naturales",
        text: "Promover acciones que protejan los ecosistemas y los recursos naturales de las comunidades.",
        icon: "./img/icon-proteccion.jpg"
      },
      {
        title: "Conservación de la biodiversidad",
        text: "Impulsar iniciativas orientadas a la preservación de flora, fauna y hábitats naturales.",
        icon: "./img/icon-biodiversidad.jpg"
      },
      {
        title: "Educación ambiental",
        text: "Fomentar el conocimiento y la conciencia ecológica en niños, jóvenes y adultos.",
        icon: "./img/icon-educacion.jpg"
      },
      {
        title: "Reforestación comunitaria",
        text: "Organizar jornadas de reforestación para restaurar áreas degradadas y fortalecer el entorno natural.",
        icon: "./img/icon-reforestacion.png"
      },
      {
        title: "Participación ciudadana",
        text: "Involucrar a la comunidad en actividades de protección ambiental y desarrollo sostenible.",
        icon: "./img/icon-comunitaria.jpeg"
      },
      {
        title: "Prácticas sostenibles",
        text: "Difundir hábitos responsables y sostenibles que contribuyan al bienestar ambiental y social.",
        icon: "./img/icon-sostenibilidad.jpg"
      }
    ],

    panelTitle: "Los bosques de Honduras bajo amenaza",
    panelText: "Más del 60 % del territorio hondureño está cubierto por bosques biodiversos que albergan paisajes espectaculares, así como también, flora y fauna diversa. Sin embargo, estos ecosistemas están siendo rápidamente degradados por invasiones ilegales de tierras y áreas protegidas, tala no autorizada, expansión de la agricultura y ganadería, y proyectos de infraestructura.",
    panelText2: "Estas amenazas no solo destruyen los bosques, sino que también afectan gravemente a las comunidades locales, ya que aproximadamente el 40 % de la población depende de los recursos forestales para su subsistencia.",
    panelImage: "./img/incendiodanli.jpg",
    panelAlt: "Incendio forestal",

    areasPanel: [
      {
        layoutClass: "normal",
        title: "Reforestación comunitaria",
        description: "Impulsamos jornadas de reforestación para recuperar áreas degradadas, fortalecer los ecosistemas y promover la participación activa de la comunidad en la protección del entorno natural.",
        image: "./img/reforestacion2.jpg",
        alt: "Reforestación comunitaria"
      },
      {
        layoutClass: "reverse",
        title: "Protección de recursos naturales",
        description: "Promovemos acciones enfocadas en el cuidado del agua, el suelo y los bosques, fomentando prácticas responsables que aseguren la sostenibilidad ambiental.",
        image: "./img/recoleccionbasura.jpg",
        alt: "Protección de recursos naturales"
      },
      {
        layoutClass: "normal",
        title: "Conservación de la biodiversidad",
        description: "Trabajamos en la preservación de la flora y fauna local, protegiendo los hábitats naturales y concientizando a la población sobre la importancia del equilibrio ecológico.",
        image: "./img/areaprotegida.jpg",
        alt: "Conservación de la biodiversidad"
      },
      {
        layoutClass: "reverse",
        title: "Educación ambiental",
        description: "Desarrollamos actividades educativas dirigidas a niños, jóvenes y adultos para fortalecer la conciencia ecológica y fomentar hábitos sostenibles.",
        image: "./img/educacionambiental.jpg",
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
          icon: "./img/icon-proteccion2.png"
        },
        {
          title: "Biodiversidad",
          text: "Conservar la flora y fauna de Honduras, preservando sus hábitats y riqueza ecológica.",
          icon: "./img/icon-biodiversidad2.png"
        },
        {
          title: "Educación Ambiental",
          text: "Fomentar conciencia ecológica mediante procesos formativos dirigidos a la comunidad.",
          icon: "./img/icon-educacion2.png"
        },
        {
          title: "Participación Ciudadana",
          text: "Motivar a las comunidades a involucrarse en acciones ambientales con compromiso y responsabilidad.",
          icon: "./img/icon-participacion2.png"
        },
        {
          title: "Prácticas Sostenibles",
          text: "Promover hábitos responsables como reciclaje, consumo consciente y uso eficiente de recursos.",
          icon: "./img/icon-sostenibilidad2.png"
        },
        {
          title: "Reforestación",
          text: "Impulsar jornadas de siembra y recuperación de áreas afectadas para restaurar ecosistemas.",
          icon: "./img/icon-reforestacion2.png"
        }
      ]
    },

    galleryTitle: "Acciones que transforman",
    galleryImages: [
      { src: "./img/reforestacion3.jpg", alt: "Reforestacion" },
      { src: "./img/limpiezarios.jpg", alt: "Limpieza de rios" },
      { src: "./img/recoleccionbasura.jpg", alt: "Recoleccion de basura" },
      { src: "./img/ganaderiasostenible.jpg", alt: "Ganderia sostenible" },
      { src: "./img/composta.jpg", alt: "Composta" },
      { src: "./img/reforestacion4.jpg", alt: "Reforestacion4" },
      { src: "./img/niña.jpg", alt: "niña comunidad" },
      { src: "./img/limpiezarios2.jpg", alt: "Limpieza rios" },
      { src: "./img/cultivocafe.jpg", alt: "Cultivo cafe sostenible" }
    ],

    heroEventos: {
      title: "Participa, actúa y deja una huella positiva en Honduras.",
      subtitle: "Organizamos actividades que protegen nuestros recursos naturales y educan a la comunidad para construir un mejor futuro.",
      image: "./img/eventos.jpg"
    },

    heroProyectos: {
      title: "Unidad de Desarrollo Ambiental y Comunitario",
      image: "./img/bosque2.jpg",
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
      image: "./img/educacionambiental.jpg",
      profile: {
        name: "Carlos Zuniga",
        role: "Director UDAC",
        description: "Líder en iniciativas de gestión ambiental, participación comunitaria y desarrollo de proyectos enfocados en la conservación de los recursos naturales y la educación ambiental.",
        email: "czuniga@udac.org",
        phone: "+504 9840-7071",
        image: "./img/John.jpg" 
      }
    },

    voluntariado: {
      imgBeneficios: "./img/voluntariado_beneficios.jpg", 
      imgRequisitos: "./img/voluntariado_requisitos.jpg",
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
          image: "./img/Vivero_Forestal.jpg",
          alt: "Vivero forestal",
          status: "En curso"
        },
        {
          name: "Educación Ambiental Escolar",
          description: "Programa de talleres interactivos en escuelas rurales sobre reciclaje y cuidado del agua.",
          image: "./img/Educacion_Ambiental.jpg",
          alt: "Educación ambiental",
          status: "Activo"
        },
        {
          name: "Agricultura Sostenible",
          description: "Apoyo a productores locales para la transición hacia prácticas agroecológicas y conservación del suelo.",
          image: "./img/Agricultura_Sostenible.jpg",
          alt: "Agricultura sostenible",
          status: "En curso"
        },
        {
          name: "Ganadería Sostenible",
          description: "Implementación de sistemas silvopastoriles que combinan árboles y pastizales para mejorar la producción sin deforestar.",
          image: "./img/Ganaderia_Sostenible.jpg",
          alt: "Ganadería sostenible",
          status: "Activo"
        },
        {
          name: "Cultivo de Café Sostenible",
          description: "Promoción de técnicas de cultivo bajo sombra para proteger la biodiversidad y garantizar un grano de alta calidad.",
          image: "./img/Cultivo_Cafe.jpg",
          alt: "Café sostenible",
          status: "Planificación"
        },
        {
          name: "Composta en Casa",
          description: "Talleres comunitarios para transformar residuos orgánicos en abono natural, reduciendo la contaminación ambiental.",
          image: "./img/Composta_Casa.jpg",
          alt: "Composta casera",
          status: "Activo"
        }
      ]
    },

    
    nosotros: {
  hero: {
    title: "¿Quiénes somos?",
    subtitle: "Comprometidos con el desarrollo ambiental y comunitario en Honduras",
    image: "./video/montaña.gif"
  },

  intro: {
    title: "Unidad de Desarrollo Ambiental y Comunitario (UDAC)",
    text: "Somos una organización dedicada a la protección del medio ambiente y el desarrollo sostenible en comunidades de Honduras.",
    text2: "Impulsamos proyectos de reforestación, educación ambiental, limpieza comunitaria y conservación de recursos naturales."
  },

  misionVision: {
    mision: "Tenemos como misión promover la protección, conservación y restauración del medio ambiente mediante la participación activa de la comunidad, el desarrollo de programas de educación ambiental y la ejecución de acciones sostenibles que contribuyan al bienestar ecológico y social del país. Busca generar conciencia, fortalecer valores ambientales y fomentar una cultura de responsabilidad colectiva orientada al uso adecuado de los recursos naturales.",
    vision: "Ser una organización líder a nivel nacional en la gestión ambiental comunitaria, reconocida por su impacto positivo en la conservación de los recursos naturales, la formación de ciudadanos comprometidos y la implementación de iniciativas innovadoras que impulsen un desarrollo sostenible. Aspirando a construir un futuro donde la armonía entre el ser humano y la naturaleza sea una prioridad en cada acción."
  },

 proyectos: [
  {
    title: "Conferencia sobre Cambio Climático",
    desc: "Espacio de aprendizaje donde expertos comparten información clave sobre el cambio climático, sus efectos en Honduras y las acciones que podemos tomar para proteger el medio ambiente y construir un futuro sostenible.",
    image: "./img/conferencia.jpg"
  },
  {
    title: "Taller de Reciclaje Creativo",
    desc: "Actividad interactiva en la que los participantes aprenden a reutilizar materiales como plástico, cartón y vidrio, transformándolos en objetos útiles y promoviendo una cultura de reciclaje en la comunidad.",
    image: "./img/taller.jpg"
  },
  {
    title: "Día de Movilidad Sostenible",
    desc: "Evento que promueve el uso de medios de transporte ecológicos como la bicicleta y la caminata, con el objetivo de reducir la contaminación y fomentar hábitos saludables en la población.",
    image: "./img/movilidad.jpg"
  },
  {
    title: "Charla Ambiental para Niños",
    desc: "Actividad educativa dirigida a niños de escuelas primarias, donde se enseñan de forma dinámica y divertida temas como el reciclaje, el cuidado del agua y la protección de la naturaleza, fomentando desde temprana edad la conciencia ambiental.",
    image: "./img/charla.jpg"
  },
  {
  title: "Caminata Ecológica Guiada",
  desc: "Actividad al aire libre que permite a los participantes conectar con la naturaleza, conocer la biodiversidad local y aprender sobre la importancia de conservar los ecosistemas.",
  image: "./img/caminata.jpg"
},
{
  title: "Jornada de Limpieza Comunitaria",
  desc: "Evento en el que voluntarios se unen para limpiar espacios públicos, fomentando el trabajo en equipo y el compromiso ciudadano con el cuidado del entorno.",
  image: "./img/limpiezacalle.jpg"
}
]
},
eventos: {
  title: "Agenda de eventos UDAC",
  subtitle: "Participa en actividades de impacto ambiental y social",

  image: "./img/eventos.jpg",
  video: "https://www.youtube.com/embed/1w9pC8x5w3Q",

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
      image: "./img/reforestacion.jpg"
    },
    {
      title: "Educación Ambiental",
      desc: "Talleres educativos sobre reciclaje, cambio climático y sostenibilidad.",
      date: "Mayo 2026",
      location: "Centro comunitario UDAC",
      image: "./img/charla.jpg"
    },
    {
      title: "Limpieza Ecológica",
      desc: "Campaña de limpieza de ríos y espacios públicos para reducir contaminación.",
      date: "Junio 2026",
      location: "Río Choluteca, Danlí",
      image: "./img/limpiezarios.jpg"
    }
  ],

  links: [
    {
      text: "ICF - Conservación Forestal",
      url: "https://icf.gob.hn/",
      desc: "Protección y manejo sostenible de los bosques, áreas protegidas y vida silvestre en Honduras."
    },
    {
      text: "SERNA - Recursos Naturales",
      url: "https://serna.gob.hn/",
      desc: "Gestión ambiental y políticas de sostenibilidad en Honduras."
    },
    {
      text: "FAO Medio Ambiente",
      url: "https://www.fao.org/americas/priorities/better-environment/es",
      desc: "Organización internacional enfocada en seguridad alimentaria y sostenibilidad ambiental."
    }
  ],

  extra: {
    highlight: {
      title: "Únete al cambio",
      text: "Cada acción cuenta. Participa en nuestros eventos y ayuda a transformar el medio ambiente en Honduras.",
      bg: "/video/naturaleza.gif"
    },

    gallery: [
      "./img/proyectoecologico.jpg",
      "./img/conservarflora.jpg",
      "./img/conservarfauna.jpg",
      "./img/reunionecologica.jpg"
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