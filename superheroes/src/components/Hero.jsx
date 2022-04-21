import './Hero.css';

function Hero(props) {
    return (
    <div id="heroesContainer">    
      <div className="hero">
        <h2 className ="heading">{props.name}</h2>
        <div className = "content">Род деятельности : {props.kindOfAct}</div>
        <div className = "content">Суперсилы : {props.power}</div>
        <img src ={props.image} alt = "Картинка супергероя" className ="img"/>
        <div className = "content">Описание героя: {props.descrip}</div>
      </div>
    </div>
    );
  }
  
  export default Hero;