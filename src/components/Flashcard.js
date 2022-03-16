function Flashcard(props){
  const {index, question, answer} = props;
  return(
    <>
      <div className="deck">
        PERGUNTA {index} {question}
        
        <ion-icon name="play-outline"></ion-icon>
      </div>
    </>
  );
}

export default Flashcard;

//RESPOSTA: {answer}