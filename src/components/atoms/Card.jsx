export default function Card({ children, classes }) {
  return (
    <div className={`card border ${classes}`}>
      <div className="card-body">
        {children}
      </div>
    </div>
  )
}