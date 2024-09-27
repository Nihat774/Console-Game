import { IButton } from "../../components/MyTypes"

function Button(props:IButton) {
  return (
    <>
      <button onClick={props.onClick} className={`${props.still}   text-white border-2 bg-orange hover:shadow-md hover:shadow-orange/100 duration-500  hover:bg-white hover:border-orange hover:text-orange`}>{props.txt1} {props.txt2} </button>
    </>
  )
}

export default Button
