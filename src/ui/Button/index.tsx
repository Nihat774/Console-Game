import { IButton } from "../../components/MyTypes"
import React from "react"
function Button(props:IButton) {
  return (
    <>
      <button className={`${props.still} text-white bg-orange`}>{props.txt}</button>
    </>
  )
}

export default Button
