import React from "react";

function Address() {
  return (
    <div className="flex justify-center">
      <div className="bg-primary rounded-3xl flex-col space-y-10 p-10 text-white">
        <h1 className="text-3xl font-semibold">Ponte en contacto</h1>
        <p>
         "Yorkcorp Marketing es una agencia de marketing digital. Ofrecemos servicios de marketing y desarrollo."
        </p>

        <div className="flex space-x-5 items-center">
          <div className="h-12 w-12 bg-[#ffa60021] p-2 rounded">
            <i className="ri-map-pin-line text-3xl text-secondary"></i>
          </div>
          <div>
            <h1 className="font-semibold text-xl">Visitanos</h1>
            <p>Chile , Peru , Colombia</p>

          </div>
        </div>

        <div className="flex space-x-5 items-center">
          <div className="h-12 w-12 bg-[#ffa60021] p-2 rounded">
            <i className="ri-mail-line text-3xl text-secondary"></i>
          </div>
          <div>
            <h1 className="font-semibold text-xl">Correo</h1>
            <p>Apkeventoscartagena@gmail.com</p>

          </div>
        </div>


        <div className="flex space-x-5 items-center">
          <div className="h-12 w-12 bg-[#ffa60021] p-2 rounded">
            <i className="ri-mail-line text-3xl text-secondary"></i>
          </div>
          <div>
            <h1 className="font-semibold text-xl">Llamanos</h1>
            <p>+573015366445</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
