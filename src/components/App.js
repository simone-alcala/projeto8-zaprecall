import { useState } from "react";

import Welcome from "./Welcome";
import Deck from "./Deck";

function App(){

  const [hidden, setHidden] = useState(true);
  
  return(
    <div className="container">
      {  hidden && <Welcome hide={setHidden}/> }
      { !hidden && <Deck /> }     
    </div>
  );  
}

export default App;
