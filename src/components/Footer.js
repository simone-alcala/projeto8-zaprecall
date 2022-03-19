function Footer(props){
  const { className, length, answered, icons } = props;
  let allRight = true;

  icons.includes('add-circle') ? allRight = false : allRight = true; 

  return(
    <footer className={className}>
      { {answered} === {length} && {allRight} ? <div>ZAP</div> : <div>PUTS</div> }

      {answered}/{length} CONCLUÍDOS
      <div>
        {icons.map( (icon) => <span className={icon}> <ion-icon name={icon} ></ion-icon> </span> )}
      </div>
      
    </footer>
  );
}

export default Footer;