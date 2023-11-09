import React from "react";
import Players from "./Component/Palyers";
import ListePlay from "./Component/ListePlay";


function App() {
  return (
    <div style={{backgroundImage: 'https://as1.ftcdn.net/v2/jpg/03/91/05/56/1000_F_391055688_yjzFWXml77dQdYm0CikcbGDFjA8VHBd6.jpg'}}>
      <h1 style={{color : "red" , textAlign : "center"}}>LISTE PLAYER</h1>
      
      <ListePlay Players={Players} name='bilel' />
     
    </div>
  );
}

export default App;
