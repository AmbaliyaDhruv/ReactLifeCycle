
import {Component} from "react";

const HOF=(COMPO)=>{
    return class Fun extends Component{
        constructor(){
            super()
            this.state={
                marks:0
            }    
         }

         handleChange=(e)=>{
            this.setState({marks:this.state.marks+1});
         }

         render(){
             return (
                 <COMPO marks={this.state.marks} increase={this.handleChange}/>
             )
         }
    }
}


export default HOF;