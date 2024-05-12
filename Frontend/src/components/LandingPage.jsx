import React, { useState } from "react";

function LandingPage() {
  const [selectedButton, setSelectedButton] = useState(null);
  const buttons = [
    { id: 1, label: "Button 1" },
    { id: 2, label: "Button 2" },
    { id: 3, label: "Button 3" },
  ];

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-52 px-20">
        {["Discover.", "Explore.", "Thrive."].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <div className="mr-[1vw] w-[8vw] rounded-md h-[6.1vw] -top-[1.2vw] relative bg-red-500"></div>
                )}
                <h1 className="uppercase text-9xl leading-none tracking-tighter font-lebre font-medium">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-20 flex justify-around items-center py-5 px-20 rounded-full ">
        {buttons.map((button) => (
          <button
            key={button.id}
            className={`bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:from-red-500 hover:via-yellow-500 hover:to-green-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-xl transition duration-300 ${
              selectedButton === button.id ? "glow" : ""
            }`}
            onClick={() => handleButtonClick(button.id)}
          >
            {button.label}
          </button>
        ))}
      </div>
      <div className="border-t-[1px] border-zinc-700 flex justify-around items-center py-5 px-20 mt-3 ">
        {selectedButton ===1 && (
          <div className="bg-blue-200 p-4 w-full rounded">
            hola amigo kese ho thik ho {selectedButton}
          </div>
        )}
         {selectedButton === 2 && (
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front bg-blue-200 p-4 rounded">
                Button 2 Front Content
              </div>
              <div className="flip-card-back bg-blue-200 p-4 rounded">
                Button 2 Back Content
              </div>
            </div>
          </div>
        )}
        {selectedButton ===3 && (
          <div className="bg-blue-200 p-4 w-full rounded">
            hola amigo kese ho thik ho {selectedButton}
          </div>
        )}
      </div>
    </div>
  );
}

export default LandingPage;