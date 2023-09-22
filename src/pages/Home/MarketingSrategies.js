import React from "react";

function MarketingSrategies() {
  const strategies = [
    {
      title: "MARKETING DE CONTENIDO",
      description:
        "El marketing de contenido es una forma de marketing centrada en crear, publicar y distribuir contenido para un público objetivo en línea.",
      image: "images/content-marketing.png",
    },
    {
      title: "INBOUD MARKETING",
      description:
       "El inbound es, de lejos, la estrategia de marketing B2B más efectiva, ya que aprovecha las fortalezas de la mayoría de las otras nueve estrategias para atraer, involucrar y deleitar a los clientes.",
      image: "images/inbound-marketing.png",
    },
    {
      title: "REDES SOCIALES",
      description:
        "El marketing en redes sociales se centra en proporcionar a los usuarios contenido que consideren valioso y que deseen compartir en sus redes sociales, lo que resulta en una mayor visibilidad y tráfico en el sitio web.",
      image: "images/social-media.png",
    },
    {
      title: "OPTIMIZACIÓN PARA MOTORES DE BÚSQUEDA",
      description:
       "La optimización para motores de búsqueda es el proceso de mejorar la calidad y cantidad del tráfico de un sitio web o una página web desde los motores de búsqueda.",
      image: "images/seo.png",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-semibold text-primary sm:mt-10">
        ¿Quieres impulsar el crecimiento de tu negocio?
      </h1>
      <h1 className="text-7xl font-semibold text-primary mt-10 sm:text-5xl">
        La <b className="text-secondary">SOLUCION</b> esta aqui..
      </h1>
      <p className="text-gray-600 text-xl mt-10">
        Curioso acerca de lo que piensan los profesionales de negocios sobre diferentes estrategias de marketing. Echamos un vistazo a los resultados recientes de encuestas e informes que recopilaron datos sobre el tema, y creamos una lista de 10 estrategias de marketing B2B comúnmente reconocidas como exitosas, independientemente de la industria. Esto es lo que encontramos, en ningún orden particular:
      </p>

      <div className="grid grid-cols-2 gap-20 mt-10 sm:grid-cols-1">
        {strategies.map((item) => {
          return (
            <div className="border border-primary p-5 flex flex-col space-y-10 rounded transform hover:scale-105 duration-300">
              <h1 className="mx-20 sm:mx-5 text-center -mt-8 bg-white border-primary border text-2xl rounded text-secondary py-2">
                {item.title}
              </h1>
              <img src={item.image} alt="" className="h-24 w-24" />
              <p className="text-gray-600 text-md hover:text-primary">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MarketingSrategies;
