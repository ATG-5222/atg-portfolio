import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am currently studying computer science at Tecnológico de Monterrey and I am eager to learn as much as possible about the field. 
        </p>

        <br />

        <p className="text-xl">
          I am particularly interested in learning everything about the field of cybersecurity.
          I am excited about the opportunity to work with other talented professionals and contribute to the development of innovative software solutions.
        </p>
      </div>
    </div>
  );
};

export default About;
