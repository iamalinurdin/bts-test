export default function Radio({ name, classes, handleOnChange, value, checked, role, ariaLabel }) {
  return (
    <input
      type="radio"
      name={name}
      role={role}
      className={classes}
      aria-label={ariaLabel}
      checked={checked}
      value={value}
      onChange={handleOnChange} />
  )
}