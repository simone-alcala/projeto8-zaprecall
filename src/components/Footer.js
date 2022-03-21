import Sad from './../assets/sad.png';
import Party from './../assets/party.png';

function Footer(props){
  const { className, length, answered, icons } = props;
   return(
    <footer className={className}>
      {  
        (props.answered === props.length) && ( 
          icons.includes ('add-circle')  ? 
          <div className="end">
            <div>
              <img src={Sad} alt="sad" />
              <strong>Putz</strong> 
            </div>
            <p>Ainda faltam alguns... <br />Mas não desanime</p>
          </div> :
          <div className="end">      
            <div>
              <img src={Party}alt="party" />
              <strong>Parabéns</strong> 
            </div>
            <p>Você não esqueceu de  <br /> nenhum flashcard!</p>
          </div> 
        ) 
      }
      {answered}/{length} CONCLUÍDOS
      <div>
        {icons.map( (icon, index) => <span key={index} className={icon}> <ion-icon name={icon} ></ion-icon> </span> )}
      </div>
    </footer>
  );
}

export default Footer;
