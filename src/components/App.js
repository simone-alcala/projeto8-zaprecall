import Welcome from "./Welcome";
import Footer from "./Footer";
import Deck from "./Deck";

function App(){
  return(
    <div className="container">
      <Welcome />

      <Deck />

      <Footer />
    </div>
  );  
}

export default App;
