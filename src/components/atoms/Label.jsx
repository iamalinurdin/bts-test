export default function Label({ children, label, classes }) {
  return (
    <label className={`form-control ${classes}`}>
      <div className="label">{label}</div>
      {children}
    </label>
  )
}