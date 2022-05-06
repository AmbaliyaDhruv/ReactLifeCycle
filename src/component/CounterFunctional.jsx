import {useEffect} from "react"

export const Functional=({number})=>{
    useEffect(()=>{
        console.log("component update..........")

        return()=>{
         console.log("component remove")
        }
    },[number])
    return (
  <>
         <h1>Functional component lifecycle</h1>
         <h2>{number}</h2>
        </>
    )
}