export default function Card({ children, classes }) {
  return (
    <div className={`card border h-full ${classes}`}>
      <div className="card-body">
        {children}
      </div>
    </div>
  )
}