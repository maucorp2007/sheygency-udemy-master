import React from "react";

function Numbers() {
  return (
    <div className="px-52 sm:px-5 mt-20">
      <h1 className="text-2xl text-gray-600 my-5">Hasta hoy hemos brindado nuestros servicios a....</h1>
      <div className="bg-secondary flex space-x-10 sm:space-x-0 p-5 justify-between rounded sm:flex-col sm:items-start sm:space-y-10">
        <div className="flex flex-col space-y-2">
          <h1 className=" text-9xl text-white">152</h1>
          <h1 className="text-white  text-2xl">Clientes</h1>
        </div>

        <div className="flex flex-col space-y-2">
          <h1 className=" text-9xl text-white">485</h1>
          <h1 className="text-white  text-2xl">Proyectos</h1>
        </div>

        <div className="flex flex-col space-y-2">
          <h1 className=" text-9xl text-white">24</h1>
          <h1 className="text-white  text-2xl">Ubicaciones</h1>
        </div>
      </div>
    </div>
  );
}

export default Numbers;
