import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
class App extends React.Component{
    state = {
        fishes:{},
        order:{}
    }
    addFish = fish =>{
        console.log(fish);
        //1.Take a copy of existing state
        const fishes = { ...this.state.fishes}
        //2.add our new fish to that fishes variable
        fishes[`fish${Date.now()}`] = fish;
        //3.Set the new fishes object to state
        this.setState({
            fishes:fishes
        });
    }
    addToOrder = (key) =>{
        //1.Take a copy of the state
        const order = { ...this.state.order}
        //2.add the order or update the existing one
        order[key] = order[key]+1 || 1;
        //3.call setState to update our state
        this.setState({order:order});
    } 
    loadSampleFishes = () =>{
        this.setState({ fishes : sampleFishes});
    }
    render(){
        return (
           <div className="catch-of-the-day">
              <div className="menu">
                  <Header tagline="saif is cool" age={500} cool={true}/>
                  <ul className="fishes">
                      {Object.keys(this.state.fishes).map(key => <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder}/>)}
                  </ul>
              </div>
              <Order fishes={this.state.fishes} order={this.state.order} />
              <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes}/>
           </div>
        );
    }
}

export default App;