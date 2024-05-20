import pathofimg from './ticTacToe.png';
import style from './Card.module.css';
function Card(props){
 

    return (

                <div className={style.card}>
                    <img src={pathofimg} alt="Avatar"></img>
                    <div className={style.container}>
                    <h4><b>{props.name}</b></h4> 
                    <p>{props.cat}</p> 
                    <p>{props.isbool?'yes':"no"}</p> 
                    </div>
        </div>
    );
  
}
export default Card