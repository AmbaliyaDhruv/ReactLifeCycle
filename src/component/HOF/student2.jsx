
import { Component } from "react";
import HOF from "./HOF"
class Studdent1 extends Component {
    
    render() {
        return (
            <>

                <h1 onMouseOver={this.props.increase}>Student2 DSA score is {this.props.marks} </h1>

            </>
        )
    }
}

export default HOF(Studdent1);