import React from "react";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import PlaneCard from "./components/PlaneCard";
import planes from "./planes.json";
import './App.css';

class App extends React.Component {
  state = {
    planes : planes,     
    score: 0,
    topScore: 0      
  };
///set the click so it restarts the game if a previously picked image is clicked again.
handleClick = id => {
  const pickPlane = this.state.planes.find(plane => (plane.id === id))
  
  if(pickPlane.clicked){
    this.gameOver()    
  } else {
    let updatedPlanes = this.state.planes.map(plane => {
      if(plane.id === id){
        plane.clicked = true
      }
      return plane
    })
    this.handleIncrement(updatedPlanes)
  }
}
//randomly shuffle images around
doTheShuffle = array => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
//set up the add 1 to score
handleIncrement = (updatedPlanes) => {
  this.setState({
    score: this.state.score + 1,
    planes: this.doTheShuffle(updatedPlanes)
  })
}
//ends game and resets the score to zero. replaces scroe with the topScore.
  gameOver = () => {
    planes.map(plane=>plane.clicked=false)
  if (this.state.score > this.state.topScore){
    alert("New High Altitude World Record")
    this.setState({
      topScore: this.state.score,
      score: 0,
      planes:this.doTheShuffle(planes)
      
    })
  } else{
    alert("You trying to tie the low altitude record?!")
    this.setState({
      score:0,
      planes: this.doTheShuffle(planes)
    })
  }
  
};

render(){
  return(<>
    
    <Header
      score={this.state.score}
      topScore={this.state.topScore}     
    />

    <Jumbotron />  
    <div className = "container">
    <div className = "wrapper">    
        {this.state.planes.map(
          plane => {
          return(            
              <PlaneCard
                key={plane.id}
                id={plane.id}
                handleClick={this.handleClick}            
                image={plane.image}              
              />            
          )}                  
        )}        
    </div>
    </div>  
</>);
}
}
  
export default App;
