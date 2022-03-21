import Logo from './../assets/logo.png'

function Welcome(props){
  const { hide } = props;
  
  return(   
    <>
      <div className="welcome">
        <img src={Logo} alt="logo" /> ZapRecall
        <div className="start" onClick={()=> { hide(false) }}>
          Iniciar Recall!
        </div>
      </div>
    </>
  );
}

export default Welcome;
