import React from "react";

function WhyChooseUs() {
  const items = [
    {
      title: "Innovador y Apasionado",
      image: "images/innovation.png",
      description:
       "Somos un equipo de diseñadores y desarrolladores creativos y apasionados. Somos plenamente conscientes de la importancia de diseñar para la era digital y nos esforzamos por ofrecer el mejor resultado para nuestros clientes.",
    },
    {
      title: "Buena Rentabilidad de la Inversión" ,
      image: "images/investment.png",
      description:
        "Trabajar con nosotros significa brindar a tu empresa grandes ahorros. Todos nuestros paquetes de marketing digital y desarrollo web se ofrecen a precios competitivos.",
    },
    {
      title: "Atención al Cliente sin Interrupciones",
      image: "images/customer-support.png",
      description:
        "Siempre estamos aquí para ayudarte con cualquier pregunta que tengas. Siempre estamos aquí para ayudarte con cualquier pregunta que tengas. Siempre estamos aquí para ayudarte con cualquier pregunta que tengas.",
    },
  ];
  return (
    <div className="mx-32 sm:mx-3 mt-20 border shadow">
      <div className="bg-primary h-72 w-full flex justify-center items-center">
        <h1 className="text-7xl font-semibold text-white sm:text-4xl">Porque Elegirnos?</h1>
      </div>
      <div className="grid grid-cols-3 p-5 gap-10 sm:grid-cols-1">
        {items.map((item) => (
          <div className="p-5 bg-white border shadow flex flex-col space-y-5 items-center transform hover:scale-105 duration-300">
            <img src={item.image} className="h-20 w-20" />
            <h1 className="text-2xl font-semibold">{item.title}</h1>
            <p className="text-gray-600 text-md">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyChooseUs;
