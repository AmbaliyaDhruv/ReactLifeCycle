

import {Component} from "react"

class Counter extends Component {
    
    componentDidUpdate(prev){
        
        if(prev!==this.props.number){
            console.log("components update")
        }
    }
    
    render(){
    
        return (
       <div>
           <h1>{this.props.number}</h1>
       </div>

        )
    }



}

export default Counter