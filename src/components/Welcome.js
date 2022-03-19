import { useState } from "react";

function Welcome(props){

  const { hide } = props;
  
  const [hidden, setHidden] = useState(false);

  const css = `welcome ${hidden && 'hidden' }`;

  return(   
   
    <div className={css}>

      <img src="./images/logo.png" alt="logo" /> 
      ZapRecall!

      <div className="start" onClick={()=> {
        setHidden(!hidden);
        hide(hidden);
      }}>
        Iniciar Recall!
      </div>

    </div>
    
  );
}

export default Welcome;
