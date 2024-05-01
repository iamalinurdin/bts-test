import { Link } from "react-router-dom";

export default function ButtonLink({ children, href = '#', color = 'primary', size = 'md', classes }) {
  return (
    <Link role="button" to={href} className={`btn btn-${color} btn-${size} ${classes}`}>
      {children}
    </Link>
  )
}