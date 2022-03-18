import { useState } from "react";

import Welcome from "./Welcome";
import Deck from "./Deck";

function App(){

  const [hidden, setHidden] = useState(true);
  
  function hide(value){
    setHidden(value);
  }
 
  return(
    <div className="container">
      <Welcome hide={hide}/> 
      <Deck className={hidden ? 'hidden' : ''} /> 
      
    </div>
  );  
}

export default App;
