google.charts.load("current", { packages: ["corechart"] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["Task", "Hours per Day"],
    ["LifeTravel", 11],
    ["Viajes Falabella", 2],
    ["Despegar", 2],
    ["Booking", 2],
    ["LATAM", 7],
  ]);

  var options = {
    title: "Distribución porcentual de descargas por aplicaciones de viaje",
  };

  var chart = new google.visualization.PieChart(
    document.getElementById("piechart")
  );

  chart.draw(data, options);
}

// Objeto con mapeos de texto en español e inglés
const textMappings = {
  'language-toggle': {
    'es': 'Change to English',
    'en': 'Ver en Español'
  },
  'navAboutUs': {
    'es': 'Nosotros',
    'en': 'About Us'
  },
  'navFeatures': {
    'es': 'caracteristicas',
    'en': 'Features'
  },
  'navPlans': {
    'es': 'planes',
    'en': 'Plans'
  },
  'navContact': {
    'es': 'contacto',
    'en': 'Contact'
  },
  'mainHeading': {
    'es': 'LA REVOLUCIÓN VIAJERA LLEGÓ.',
    'en': 'THE TRAVEL REVOLUTION IS HERE.'
  },
  'mainSubtitle': {
    'es': 'Visita nuestra página AdventureHub para que realices tus viajes de manera fácil y rápida.',
    'en': 'Visit our AdventureHub page to make your travels easy and fast.'
  },
  'aboutUsHeading': {
    'es': 'Nosotros',
    'en': 'About Us'
  },
  'aboutUsText': {
    'es': 'AdventureHub, nuestra startup, tiene como objetivo tener un entorno mobile que le sugiera a los usuarios un destino según sus preferencias, además de organizar un programa de viaje acorde con su presupuesto, brindándole un servicio completo y eficiente. Esta propuesta se pensó con la finalidad de promover el turismo, brindándole al usuario una serie de destinos turísticos según su preferencia. A veces, es muy difícil escoger un destino de muchos que tenemos en mente, por lo que nuestra aplicación facilitará esta decisión al usuario.',
    'en': 'AdventureHub, our startup, aims to provide a mobile platform that suggests destinations to users based on their preferences, in addition to organizing a travel itinerary that fits their budget, offering a comprehensive and efficient service. This proposal was conceived with the goal of promoting tourism by offering the user a variety of tourist destinations tailored to their preferences. Sometimes, it can be challenging to choose a destination from the many options in mind, so our app will streamline this decision for the user.'
  },
  'featuresHeading': {
    'es': 'características',
    'en': 'Features'
  },
  'featuresText': {
    'es': 'La aplicación AdventureHub cuenta con las siguientes características que lo hacen ideal para la realización de tu próximo viaje.',
    'en': 'The AdventureHub app has the following features that make it ideal for planning your next trip.'
  },
  'feature1Title': {
    'es': 'usalo donde estes',
    'en': 'use it wherever you are'
  },
  'feature1Description': {
    'es': 'Podrás utilizar nuestra aplicación sea donde estés en el territorio nacional.',
    'en': 'You can use our application wherever you are in the national territory.'
  },
  'feature2Title': {
    'es': 'siempre disponible',
    'en': 'always available'
  },
  'feature2Description': {
    'es': 'Nuestra aplicación estará para ti las 24 horas del día.',
    'en': 'Our application will be available to you 24 hours a day.'
  },
  'feature3Title': {
    'es': 'personalizable',
    'en': 'customizable'
  },
  'feature3Description': {
    'es': 'Podrás personalizar la configuración dentro de la aplicación de acuerdo a tus necesidades.',
    'en': 'You can customize the settings within the application according to your needs.'
  },
  'feature4Title': {
    'es': 'SEGURIDAD',
    'en': 'SECURITY'
  },
  'feature4Description': {
    'es': 'Tus datos se mantendrán seguros en nuestra aplicación, gracias a nuestro sistema integrado de encriptación.',
    'en': 'Your data will be kept secure in our application, thanks to our integrated encryption system.'
  },
  'feature5Title': {
    'es': 'rapido',
    'en': 'fast'
  },
  'feature5Description': {
    'es': 'Realizarás tus búsquedas y compras de una manera rápida con nuestra aplicación.',
    'en': 'You will perform your searches and purchases quickly with our application.'
  },
  'feature6Title': {
    'es': 'Web-first',
    'en': 'Web-first'
  },
  'feature6Description': {
    'es': 'Diseño enfocado para navegadores web para brindar una mejor experiencia.',
    'en': 'Web-focused design to provide a better experience.'
  },
  'contactHeading': {
    'es': 'contactanos',
    'en': 'Contact Us'
  },
  'footerContactHeading': {
    'es': 'Contactanos',
    'en': 'Contact Us'
  },
  'contactNamePlaceholder': {
    'es': 'Nombre',
    'en': 'Name'
  },
  'contactEmailPlaceholder': {
    'es': 'Email',
    'en': 'Email'
  },
  'contactMessagePlaceholder': {
    'es': 'Mensaje',
    'en': 'Message'
  },
  'contactSendButton': {
    'es': 'Enviar',
    'en': 'Send'
  },
  'startJourneyButton': {
    'es': 'Iniciar mi viaje',
    'en': 'Start my trip'
  },
  'aboutAppTitle': {
    'es': 'Conoce más nuestra APLICACIÓN',
    'en': 'Learn more about our APPLICATION'
  },
  'featureUniqueFlightsTitle': {
    'es': 'ENCUENTRA VUELO UNICOS',
    'en': 'FIND UNIQUE FLIGHTS'
  },
  'featureUniqueFlightsDesc': {
    'es': 'Compara opciones de diferentes compañías. Busca diferentes rutas y encuentra las mejores ofertas',
    'en': 'Compare options from different airlines. Search different routes and find the best deals.'
  },
  'featureBestAccommodationsTitle': {
    'es': 'LOS MEJORES ALOJAMIENTOS DEL PAÍS',
    'en': 'THE BEST ACCOMMODATIONS IN THE COUNTRY'
  },
  'featureBestAccommodationsDesc': {
    'es': 'Reserva el hospedaje para tus vacaciones soñadas en cuotas y sin costo de reserva',
    'en': 'Book accommodation for your dream vacation in installments and with no booking fees.'
  },
  'featureActivitiesToursTitle': {
    'es': 'actividades, tours y atracciones',
    'en': 'ACTIVITIES, TOURS, AND ATTRACTIONS'
  },
  'featureActivitiesToursDesc': {
    'es': 'En AdventureHub puedes encontrar una gran variedad de actividades, excursiones y atracciones para disfrutar al máximo de tu destino favorito.',
    'en': 'At AdventureHub, you can find a wide variety of activities, excursions, and attractions to make the most of your favorite destination.'
  },
  'plansSectionTitle': {
    'es': 'PLANES',
    'en': 'PLANS'
  },
  'plansSectionDescription': {
    'es': 'AdventureHub posee planes para nuestros dos tipos de clientes. Elige si quieres viajar o publicitar tus paquetes de viaje.',
    'en': 'AdventureHub offers plans for our two types of customers. Choose whether you want to travel or advertise your travel packages.'
  },
  'plan1User': {
    'es': 'Turista',
    'en': 'Tourist'
  },
  'plan2User': {
    'es': 'Agencia de Viajes',
    'en': 'Travel Agency'
  },
  'plan1Title': {
    'es': 'Gratis',
    'en': 'Free'
  },
  'plan2Title': {
    'es': 'Pagado con comisiones',
    'en': 'Paid with commissions'
  },
  'plan1Description': {
    'es': 'Ideal para los viajeros que desean encontrar los mejores planes y paquetes de viaje de acorde a sus preferencias.',
    'en': 'Ideal for travelers who want to find the best travel plans and packages according to their preferences.'
  },
  'plan2Description': {
    'es': 'Promociona tus paquetes de viaje en nuestra aplicación por un cómodo precio en comisiones.',
    'en': 'Promote your travel packages on our application for a convenient commission fee.'
  },
  'planButton1': {
    'es': 'Elegir',
    'en': 'Select'
  },
  'planButton2': {
    'es': 'Elegir',
    'en': 'Select'
  },
  'videoAbout': {
    'es': 'Video sobre nuestro producto',
    'en': 'About the product video'
  },
  'AboutTheProductSection': {
    'es': 'Sobre el producto',
    'en': 'About the product'
  },
  // Añade aquí más mapeos para otros textos de ser necesarios
};

// Variable para rastrear el idioma actual
let currentLanguage = 'es'; // Español por defecto

document.addEventListener("DOMContentLoaded", function() {
  const langToggle = document.getElementById('language-toggle');

  langToggle.addEventListener('click', function(e) {
    e.preventDefault();
    toggleLanguage();
  });

  function toggleLanguage() {
    // Alternar el idioma actual
    currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
    // Actualizar el texto del botón
    langToggle.textContent = currentLanguage === 'es' ? 'English' : 'Español';
  
    // Actualizar el texto y los placeholders de la página
    for (const key in textMappings) {
      const element = document.getElementById(key);
      if (element) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = textMappings[key][currentLanguage];
        } else {
          element.textContent = textMappings[key][currentLanguage];
        }
      }
    }
  }
  
});
