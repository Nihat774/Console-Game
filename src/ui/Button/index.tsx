import { IButton } from "../../components/MyTypes"

function Button(props:IButton) {
  return (
    <>
      <button onClick={props.onClick} className={`${props.still} text-white bg-orange`}>{props.txt1} {props.txt2} </button>
    </>
  )
}

export default Button
