import { IButton } from "../../components/MyTypes"

function Button(props:IButton) {
  return (
    <>
      <button className={`${props.still} text-white bg-orange py-2 px-3`}>{props.txt}</button>
    </>
  )
}

export default Button
