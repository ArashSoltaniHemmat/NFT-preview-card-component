import React from "react";
import "./App.css"; 
import EquilibriumImg from "./images/image-equilibrium.jpg";
import avatarImg from "./images/image-avatar.png";
import iconView from "./images/icon-view.svg";
import{ useState } from "react";


const ResultCart = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="bg-[hsl(217,54%,11%)] flex items-center justify-center min-h-screen">
  
  <div className="bg-[hsl(216,50%,16%)] w-[350px] rounded-xl p-6 shadow-lg">

    <div className="relative">

  <img 
    src={EquilibriumImg} 
    className="rounded-lg w-full"
  />

  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-cyan-400/50">
    <img src={iconView} />
  </div>

</div>

    <h2 className="text-white text-xl font-semibold mb-2">
      Equilibrium #3429
    </h2>

    <p className="text-[hsl(215,51%,70%)] text-[18px] mb-4">
      Our Equilibrium collection promotes balance and calm.
    </p>

    <div className="flex justify-between mb-4">
      <span className="text-[hsl(178,100%,50%)] font-semibold">
        0.041 ETH
      </span>

      <span className="text-[hsl(215,51%,70%)]">
        3 days left
      </span>
    </div>

    <hr className="border-[hsl(215,32%,27%)] mb-4"/>
    <div className="flex items-center">
      <img src={avatarImg} className="w-6 h-6 rounded-full inline-block mr-2" />
      <span className="text-[hsla(240, 33%, 1%, 1.00)] text-sm">
        Creation of <span className="text-white font-semibold">Jules Wyvern</span>
      </span>
    </div>

  </div>

</div>
  );
};

export default ResultCart;