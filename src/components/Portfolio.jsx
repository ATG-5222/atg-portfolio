import React, { useState } from "react";
import Modal from "react-modal";

import tec from "../assets/portfolio/tecDeMonterrey.jpg";
import kiara from "../assets/portfolio/kiara.jpg";
import atemporal from "../assets/portfolio/atemporal.jpg";
import zebrands from "../assets/portfolio/zebrands.jpg";
import traffic from "../assets/portfolio/traffic.jpg";

const Portfolio = () => {

  const [selectedModal, setSelectedModal] = useState(null);

  const portfolios = [
    {
      id: 1,
      src: tec,
      desc: "Portfolio made up of works to several courses within my university period",
      link: "https://miscompetenciastec21.tec.mx/elumen/portfolio/WmD7kEcgavceX9Qa"
    },
    {
      id: 2,
      src: kiara,
      desc: "Web application developed in Genesis Solutions for Kiara Real Estate",
      link: "https://github.com/Genesis-Solutions/Kiara-Bienes-Raices"
    },
    {
      id: 3,
      src: atemporal,
      desc: "Mobile application for Android developed for event management in Atemporal",
      link: "https://github.com/ATG-5222/AppAtemporal/tree/develop"
    },
    {
      id: 4,
      src: zebrands,
      desc: "Web application for the management of support tickets within Zebrands",
      link: "https://github.com/ATG-5222/Proyecto_Tickets"
    },
    {
      id: 5,
      src: traffic,
      desc: "Traffic simulation on a highway using mesa and other python tools",
      link: "https://github.com/ATG-5222/TC2008B_Project"
    }
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, desc, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                onClick={() => setSelectedModal(id)}
                >
                  Demo
                </button>
                <a 
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code/Files
                </a>
              </div>
            </div>
          ))}
        </div>

        <Modal
          isOpen={selectedModal !== null}
          onRequestClose={() => setSelectedModal(null)}
        >
          {selectedModal !== null && (
            <div>
              <p>Modal contenido para el elemento {selectedModal}</p>
              {/* Aquí puedes mostrar el contenido del modal dependiendo del elemento seleccionado */}
              {/* Por ejemplo, puedes acceder a los datos del elemento seleccionado utilizando `portfolios[selectedModal - 1]` */}
              {/* <p>{portfolios[selectedModal - 1].desc}</p> */}
            </div>
          )}
        </Modal>

      </div>
    </div>
  );
};

export default Portfolio;
