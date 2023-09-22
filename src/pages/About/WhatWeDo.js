import React from "react";

function WhatWeDo() {
  const items = [
    {
      title: "Desarrollo Web",
      icon: "images/web.png",
      description:
        "El desarrollo web es el trabajo involucrado en desarrollar un sitio web para Internet o una intranet.",
    },
    {
      title: "Desarrollo Móvil",
      icon: "images/mobile.png",
      description:
       "El desarrollo móvil es el trabajo involucrado en desarrollar una aplicación móvil para dispositivos móviles como smartphones, tablets y teléfonos móviles." ,
    },
    {
      title: "Marketing Digital ",
      icon: "images/digital-marketing.png",
      description:
        "El marketing digital es el trabajo involucrado en desarrollar una estrategia y plan de marketing digital.",
    },

    {
      title: "Diseño Grafico",
      icon: "images/graphicdesign.png",
      description:
        "Diseño gráfico es el trabajo involucrado en desarrollar una estrategia de marketing digital y crear un plan de marketing digital.",
    },
  ];
  return <div className="z-20 sm:mt-10">
      <h1 className='text-secondary text-8xl text-center z-20 font-semibold sm:text-5xl'> Lo que hacemos?</h1>
      <div className='h-96 w-full bg-primary mt-12'>

      </div>
      <div className="grid grid-cols-4 sm:grid-cols-1 gap-10 mx-32 sm:mx-0 -mt-48 sm:w-full sm:px-5">
          {items.map((item)=>(
              <div className="p-5 bg-white border shadow flex flex-col space-y-5 items-center transform hover:scale-105 duration-300 sm:selection:w-full">
                      <img src={item.icon} className="h-20 w-20" />
                      <h1 className='text-2xl'>{item.title}</h1>
                      <p className='text-gray-600 text-md'>{item.description}</p>
              </div>
          ))}
      </div>
  </div>
}

export default WhatWeDo;
