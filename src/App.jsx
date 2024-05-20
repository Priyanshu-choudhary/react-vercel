import Footer from "./footer/Footer";
import Heading from "./Nav/Heading";
import Card from './CardCreate/Card';
import Button from "./Button/Button";
import MyComponent from "./ReactHooksExample/MyComponent";

function App() {
    return(
        <>
            
            <Heading isbool={false}/>
            <Card name="tic tac toe" cat="game" isbool={true}/>
            <Card name="snake"  cat="game" isbool={false}/>
            <Card name="runer"  cat="coding" isbool={false}/>
            <MyComponent/>
            <Button/>
            <Footer/>
        </>
    );
}
export default App