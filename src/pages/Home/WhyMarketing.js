import React from "react";

function WhyMarketing() {
  return (
    <div className="mt-20">
      <h1 className="text-center text-8xl font-semibold text-primary sm:text-5xl">
        Porque<b className="text-secondary"> El Marketing en mi Empresa</b> ?
      </h1>
      <div className="h-[500px]">
        <lottie-player
          src="https://assets2.lottiefiles.com/private_files/lf30_GjhcdO.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></lottie-player>
      </div>
      <p className="text-gray-600 text-md mt-10">
       ¿Sabes lo que quieren tus clientes? ¿Crees que tus clientes confían en tus productos? ¿Cuándo fue la última vez que viste a un cliente tuitear sobre tu producto o servicio? ¿Fue una queja o un elogio?
      </p>
      <h1 className="text-primary text-4xl font-semibold mt-10">
        Las respuestas a todas estas preguntas se encuentran en el marketing.
      </h1>
      <p className="text-gray-600 text-md mt-10">
       Cómo comercializas tu negocio determina si la empresa será exitosa o no. El marketing es una herramienta utilizada para crear y mantener la demanda, relevancia, reputación, competencia y más. Sin él, es probable que tu negocio cierre debido a la falta de ventas.
      </p>
    </div>
  );
}

export default WhyMarketing;
