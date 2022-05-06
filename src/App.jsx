
import './App.css'

import React,{Component} from "react"
import Counter from './component/Counter';
import { Functional } from './component/CounterFunctional';
import Student1 from './component/HOF/student1';
import Student2 from './component/HOF/student2';

class App extends Component {

constructor(){
  super();
  this.state={
    count:0
  }
}
  componentDidMount(){
    console.log("component his mount")
  }

  Increase(){
    this.setState({count:this.state.count+1})
  }

  componentWillUnmount(){
    console.log("component unmount")
  }
  render(){
    return (
      <div className='App'>
        
        <h1>React lifecycle with React Class Component</h1>
        <Counter number={this.state.count}/>
       
        <button onClick={()=>this.Increase()}>
        Increase
        </button>

        <Functional number={this.state.count}/>

        <Student1/>
        <Student2/>
      </div>
    )
  }
}


export default App