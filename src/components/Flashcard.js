function Flashcard(props){
  const {index, question, answer} = props;
  return(
    <>
      <div className="card">
        PERGUNTA {index} 
        
        <ion-icon name="play-outline"></ion-icon>
      </div>
    </>
  );
}

export default Flashcard;

//RESPOSTA: {answer} {question}