export default function Button({
  children,
  color = 'primary',
  type = 'button',
  size = 'md',
  handleOnClick,
  classes = '',
  disabled = false
}) {
  return (
    <button
      type={type}
      className={`btn min-w-fit btn-${color} btn-${size} ${classes}`}
      onClick={handleOnClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}