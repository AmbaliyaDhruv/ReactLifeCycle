import {Component} from "react";
import HOF from "./HOF"
class Student2 extends Component{
    render(){
        
        return(
            <>
              <h1 onMouseOver={this.props.increase}>Student1 DSA marks is {this.props.marks} </h1>
            </>
        )
    }
}

export default HOF(Student2);