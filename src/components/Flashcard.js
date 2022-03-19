import {useState} from 'react';

function Flashcard(props){
  const {index, question, answer, answered, iconFooter} = props;

  const [hiddenCard     , setHiddenCard     ] = useState(false);
  const [hiddenQuestion , setHiddenQuestion ] = useState(true) ;
  const [hiddenAnswer   , setHiddenAnswer   ] = useState(true) ;
  const [hiddenAnsweredCard, setHiddenAnsweredCard] = useState(true) ;
  const [typeAnswer     , setTypeAnswer     ] = useState('') ;
  const [icon           , setIcon           ] = useState('') ;
  
  function selectAnswer(type){
    setHiddenAnswer(!hiddenAnswer);
    setHiddenAnsweredCard(!hiddenAnsweredCard);
  
    if (type==='not'){
      setTypeAnswer('not');
      setIcon('add-circle');    
      iconFooter('add-circle');
    } else if (type==='almost'){
      setTypeAnswer('almost');
      setIcon('help-circle');
      iconFooter('help-circle');
    } else {
      setTypeAnswer('zap');
      setIcon('checkmark-circle');
      iconFooter('checkmark-circle');
    }
    answered(1);   
  }

  return(
    <>
      { !hiddenCard && 
        <div className="card">
          Pergunta {index} 
          <ion-icon name="play-outline" onClick={() => {
            setHiddenCard(!hiddenCard);
            setHiddenQuestion(!hiddenQuestion);
          }}></ion-icon>
        </div>
      }

      { !hiddenQuestion && 
        <div className="card-question" >
        {question}
        <img src="./images/setinha.png" alt="setinha" onClick={() => {
          setHiddenQuestion(!hiddenQuestion);
          setHiddenAnswer(!hiddenAnswer);
        }} />
        </div>
      }

      { !hiddenAnswer &&
        <div className="card-question">
          {answer}
          <div className="answer">
            <div className="not-recall"        onClick={()=>{selectAnswer('not')}}   >Não lembrei</div>
            <div className="almost-not-recall" onClick={()=>{selectAnswer('almost')}}>Quase não lembrei</div>
            <div className="recall"            onClick={()=>{selectAnswer('zap')}}>Zap</div>
          </div>
        </div>
      }

      {!hiddenAnsweredCard &&
        <div className={"card " + typeAnswer } >
          <span> Pergunta {index} </span>
          <ion-icon name={icon} ></ion-icon>
        </div>
      }

    </>
  );
}

export default Flashcard;


