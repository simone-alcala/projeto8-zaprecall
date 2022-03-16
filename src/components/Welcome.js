function Welcome(){
  return(
    <div className="welcome">
      <img src="./images/logo.png" alt="logo"/>
      ZapRecall!

      <div className="start" onClick={() => alert('testeeee')} >
        Iniciar Recal!
      </div>

    </div>
  );
}

export default Welcome;
