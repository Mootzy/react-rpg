import React from "react";
import Sprite from "../sprite"

export default function Actor({sprite, data, step = 0}) {




<Sprite 
      image={"/sprites/skins/m1.png"} 
        data={{
          x: 0,
          y: 0,
          h: 32,
          w: 32
        }}
        onKeyPress={handleKeyPress}
         />

}