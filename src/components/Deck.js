import { useState } from 'react';

import Flashcard from './Flashcard';
import Footer from './Footer';

import Logo from './../assets/logo.png'

function Deck(){

  const [answered, setAnswered] = useState(0);
  const [icon, setIcon] = useState([]);
  
  function addAnswered(value){
    setAnswered(answered + value);
  }

  function addIcon(value){
    setIcon([...icon,value]);
  }

  const deck1=[
    {
      question: 'O que é JSX?',
      answer: 'Uma extensão de linguagem do JavaScript.'
    },
    {
      question: 'O React é ___',
      answer: 'uma biblioteca JavaScript para construção de interfaces.'
    },
    {
      question: 'Componentes devem iniciar com __',
      answer: 'letra maiúscula.'
    },
    {
      question: 'Podemos colocar __ dentro do JSX.',
      answer: 'expressões'
    },
    {
      question: 'O ReactDOM nos ajuda __',
      answer: 'interagindo com a DOM para colocar componentes React na mesma.'
    },
    {
      question: 'Usamos o npm para __',
      answer: 'gerenciar os pacotes necessários e suas dependências.'
    },
    {
      question: 'Usamos props para __',
      answer: 'passar diferentes informações para componentes.'
    },
    {
      question: 'Usamos estado (state) para __',
      answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente.'
    }
  ]

  deck1.sort( () => Math.random() - 0.5 );
  
  return(
    <>
      <div className="deck ">
        <div className="header">
          <img src={Logo} alt="logo" /> 
          <span>ZapRecall</span>
        </div>
        {deck1.map( ( {question,answer}, index ) => {
            return (
              <Flashcard  key ={index} 
                          question={question}  
                          answer={answer} 
                          index={index+1} 
                          answered={addAnswered} 
                          iconFooter={addIcon} /> 
            )})}
      </div>
      <Footer length={deck1.length} 
              answered={answered} 
              icons={icon}/>
    </>
  );
}

export default Deck;