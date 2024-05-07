import React, { useState } from "react";
import Modal from "react-modal";

import genesis from "../assets/portfolio/genesis.png";
import imimex from "../assets/portfolio/imimex.jpeg";
import zebrands from "../assets/portfolio/zebrands.jpg";
import traffic from "../assets/portfolio/traffic.jpg";
import kiara from "../assets/portfolio/kiara.png";
import server from "../assets/portfolio/server.png";

const Portfolio = () => {

  const [selectedModal, setSelectedModal] = useState(null);
  const [selectedPortfolios, setSelectedPortfolios] = useState({});

  const portfolios = [
    {
      id: 1,
      src: genesis,
      hasLink: true,
      desc: "Consolidation of a software development department.",
      link: "https://andrewisabeast.notion.site/G-nesis-e66594d87d41464dacb036ab7322e908?pvs=4",
      contri: "I participated as an active member in the software development department and promoted the adoption and accreditation of a CMMI 2 level with 7 process areas mainly through constant monitoring of the cost, time and resources invested to meet the objectives."
    },
    {
      id: 2,
      src: kiara,
      hasLink: true,
      desc: "Web application developed in Genesis Solutions for Kiara Real Estate.",
      link: "https://github.com/Genesis-Solutions/Kiara-Bienes-Raices",
      contri: "I contributed mostly in the development of the Backend as well as in the deployment as part of the Dev-Ops team. Guaranteeing the correct operation of the application, always guaranteeing customer satisfaction, presents a great challenge with satisfactory results."
    },
    {
      id: 3,
      src: server,
      hasLink: false,
      desc: "LAN network implementation with an Ubuntu server.",
      contri: "I participated in the design, implementation, penetration testing and hardening of an enterprise LAN network with a Ubuntu server that provided services within the network such as DNS, DHCP and an Apache2 web server."
    },
    {
      id: 4,
      src: imimex,
      hasLink: false,
      desc: "Design of a standardized local area network (LAN) and a wide area network (WAN) to connect multiple sites.",
      contri: "I contributed to the research and design of a standardized LAN and WAN proposal to solve the client's connectivity needs considering aspects of security, availability and a possible expansion to a hybrid cloud."
    },
    {
      id: 5,
      src: zebrands,
      hasLink: true,
      desc: "Web application for the management of support tickets within Zebrands.",
      link: "https://github.com/ATG-5222/Proyecto_Tickets",
      contri: "I contributed mostly in the development of the Back-End, being my first web development project I focused on learning the necessary concepts to continue polishing my skills."
    },
    {
      id: 6,
      src: traffic,
      hasLink: true,
      desc: "Traffic simulation on a highway using mesa and other python tools.",
      link: "https://github.com/ATG-5222/TC2008B_Project",
      contri: "I contributed in the development of the simulation logic using python and elements such as mesa. Once these elements were in place, I focused on generating a server in python that would post the simulation elements to be able to use them in Unity."
    },
  ];

  const openModal = (id) => {
    const selectedPortfolio = portfolios.find((portfolio) => portfolio.id === id);
    setSelectedModal(id);
    setSelectedPortfolios(selectedPortfolio);
  };

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
          <p className="pt-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, desc, hasLink, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt={desc}
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                onClick={() => openModal(id)}
                >
                  Summary
                </button>
                {hasLink === true &&
                  <a 
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code/Files
                  </a>
                }
              </div>
            </div>
          ))}
        </div>

        <Modal
          isOpen={selectedModal !== null}
          onRequestClose={() => setSelectedModal(null)}
          className="bg-black p-4 sm:p-6 md:p-8 max-w-xl mx-auto mt-20"
          overlayClassName="fixed inset-0 bg-opacity-75 bg-black flex items-center justify-center"
        >
          {selectedModal !== null && (
            <div className="flex flex-col items-center">
              <img
                src={selectedPortfolios.src}
                alt=""
                className="rounded-full h-40 w-40 mb-4 duration-200 hover:scale-105"
              />
              <div className="bg-gray-800 p-4 sm:p-6 md:p-8">
                <h1 className="text-white text-lg mb-4 text-center font-extrabold">
                  What did the project consist of?
                </h1>
                <p className="text-white text-lg text-center mb-4">{selectedPortfolios.desc}</p>
                <h2 className="text-white text-lg mb-4 text-center font-extrabold">
                  My contributions
                </h2>
                <p className="text-white text-lg text-center">{selectedPortfolios.contri}</p>
              </div>
            </div>
          )}
        </Modal>

      </div>
    </div>
  );
};

export default Portfolio;
