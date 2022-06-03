import Header from "./create-vm/header";
import Body from "./create-vm/body";
import Squares from "./floatings-squares/squares";
import Import from "./create-vm/import"
import "./App.css";

function App() {
  
  return (
    
    <div>
     <Import />
     
      <div className="container">
        <Header />
        <h4 className="lets">Let's create a VM</h4>
        <Body />
      </div>
      <Squares />
      <script src="https://apis.google.com/js/platform.js?onload=onLoad" async defer />
    </div>
    
  );
}

export default App;
