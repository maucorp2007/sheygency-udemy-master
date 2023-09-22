import React, { useState } from "react";
import Numbers             from "./Numbers";

function ClientsList() {
  const [selectedClientIndex, setSelectedClientIndex] = useState(0);
  const clients = [
    {
      name: "Slack",
      logo: "images/slack.png",
      url: "https://www.tcs.com/",
      description:
       "Slack es un conjunto de herramientas y servicios basados en la nube que facilita la realización del trabajo. Está diseñado para equipos de todos los tamaños y tiene un diseño sencillo y atractivo que es fácil de usar y funciona muy bien en cualquier dispositivo.",
    },
    {
      name: "Twitter",
      logo: "images/twitter.png",
      url: "https://www.infosys.com/",
      description:
       "Twitter es un servicio de redes sociales que permite a los usuarios enviar y leer mensajes cortos de 140 caracteres llamados 'tweets'.",
    },
    {
      name: "Instagram",
      logo: "images/instagram.png",
      url: "https://www.wipro.com/",
      description:
        "Instagram es un servicio de intercambio de fotos, videos y comunicación propiedad y operado por Facebook, Inc. Fue creado por Kevin Systrom y Mike Krieger, y fue lanzado en octubre de 2010.",
    },
    {
      name: "Spotify",
      logo: "images/spotify.png",
      url: "https://www.hcl.com/",
      description:
        "Spotify es un servicio de streaming de música que ofrece una amplia gama de géneros musicales, incluyendo rock, pop, country, electrónico, y más. Fue creado por el programador y empresario sueco Johan Liljegren en 2007.",
    },
    {
      name: "Messenger",
      logo: "images/messenger.png",
      url: "https://www.accenture.com/",
      description:
        "Messenger es una aplicación de mensajería que permite a los usuarios comunicarse con sus amigos y familiares. Fue creada por Facebook en 2011.",
    },
    {
      name: "Cognizant",
      logo: "images/cognizant.png",
      url: "https://www.capgemini.com/",
      description:
        "Cognizant es una empresa tecnológica multinacional con sede en Bengaluru, India. Es la empresa india de tecnologías de la información más grande en términos de capitalización de mercado."
      ,
    },
    {
      name: "Github",
      logo: "images/github.png",
      url: "https://www.cognizant.com/",
      description:
        "GitHub es un servicio de alojamiento basado en web para el control de versiones de código utilizando el modelo de control de versiones distribuido (DVCS). Fue creado por Linus Torvalds en 2005.",
    },
  ];

  const next = () => {
    setSelectedClientIndex(selectedClientIndex + 1);
  };

  const previous = () => {
    setSelectedClientIndex(selectedClientIndex - 1);
  };

  return (
    <div>
      <div className="bg-primary h-44 rounded-b-full sm:rounded-b-2xl"></div>
      <div className="flex justify-center -mt-44 items-end space-x-10 sm:space-x-0 sm:p-5 overflow-x-hidden">
        {selectedClientIndex !== 0 && (
          <i
            className="ri-arrow-left-line text-4xl text-gray-600 cursor-pointer sm:hidden"
            onClick={previous}
          ></i>
        )}

        <div className="grid grid-cols-3 gap-10 sm:grid-cols-1 sm:gap-2">
          {[
            clients[selectedClientIndex],
            clients[selectedClientIndex + 1],
            clients[selectedClientIndex + 2],
          ].map((item) => (
            <div className="bg-white shadow p-5 w-[400px] sm:w-auto sm:h-auto border h-[350px]">
              <div className="flex space-x-10 sm:space-x-0 items-center justify-between sm:flex-col">
                <img src={item.logo} alt="" className="h-32 w-32 z-20 sm:w-10 sm:h-10" />
                <h1 className="text-primary font-semibold text-2xl">
                  {item.name}
                </h1>
              </div>
              <p className="text-gray-600 text-md mt-10">{item.description}</p>
            </div>
          ))}
        </div>

        {selectedClientIndex < 4 && (
          <i
            className="ri-arrow-right-line text-4xl text-gray-600 cursor-pointer sm:hidden"
            onClick={next}
          ></i>
        )}
      </div>

      <div className="flex justify-center mt-10">
        <div className="flex space-x-2">
          {[1, 2, 3, 4,5].map((item, index) => (
            <div
              onClick={()=>setSelectedClientIndex(index)}
              className={`bg-gray-200 h-4 w-4 rounded-full cursor-pointer hover:scale-105 transition-all transform duration-300 ${
                selectedClientIndex === index && "border-2 border-secondary h-5 w-5"
              }`}
            ></div>
          ))}
        </div>
      </div>

      <Numbers />
    </div>
  );
}

export default ClientsList;
