import { IButton } from "../../components/MyTypes"

function Button(props:IButton) {
  return (
    <>
      <button onClick={props.onClick} className={`${props.still}   text-white pt-3 px-3 hover:border bg-orange   duration-500   hover:border-orange `}>{props.txt1} {props.txt2} </button>
    </>
  )
}

export default Button
