import { Link } from 'react-router-dom'
import { IIcon } from '../../components/MyTypes'

function Icon(props:IIcon) {
  return (
    <>
      <Link to={props.link} target='_blank'>
      {props.children} 
      </Link>
    </>
  )
}

export default Icon
