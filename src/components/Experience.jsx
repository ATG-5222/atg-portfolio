import React from "react";

import javascript from "../assets/javascript.png";
import node from "../assets/node.png";
import mySQL from "../assets/mySQL.png";
import python from "../assets/python.png";
import cpp from "../assets/cpp.png";
import gnuLinux from "../assets/gnuLinux.png";
import packetTracer from "../assets/packetTracer.png";
import wireshark from "../assets/wireshark.png";
import autopsy from "../assets/autopsy.png";
import nessus from "../assets/nessus.png";
import owaspZAP from "../assets/owaspZAP.png";
import docker from "../assets/docker.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: cpp,
      title: "C++",
      style: "shadow-blue-600",
    },
    {
      id: 2,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 3,
      src: node,
      title: "Node.js",
      style: "shadow-green-600",
    },
    {
      id: 4,
      src: mySQL,
      title: "MySQL",
      style: "shadow-orange-600",
    },
    {
      id: 5,
      src: python,
      title: "Python",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: gnuLinux,
      title: "GNU/Linux",
      style: "shadow-yellow-500",
    },
    {
      id: 7,
      src: packetTracer,
      title: "Cisco Packet Tracer",
      style: "shadow-green-500",
    },
    {
      id: 8,
      src: wireshark,
      title: "Wireshark",
      style: "shadow-blue-500",
    },
    {
      id: 9,
      src: owaspZAP,
      title: "OWASP ZAP",
      style: "shadow-blue-500",
    },
    {
      id: 10,
      src: autopsy,
      title: "Autopsy Digital Forensics",
      style: "shadow-red-500",
    },
    {
      id: 11,
      src: nessus,
      title: "Nessus Vulnerability Scanner",
      style: "shadow-cyan-500",
    },
    {
      id: 12,
      src: docker,
      title: "Dockers",
      style: "shadow-blue-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-3 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="pt-6">These are the technologies I've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
