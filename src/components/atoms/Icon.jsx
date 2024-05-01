import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Icon({ icon, size, classes }) {
  return (
    <FontAwesomeIcon icon={icon} size={size} className={classes} />
  )
}