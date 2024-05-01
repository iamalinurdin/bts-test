export default function Input({
  type = 'text',
  placeholder = '',
  value = '',
  color = 'primary',
  disabled = false,
  handleOnChange = () => { },
  name = '',
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      className={`input input-bordered min-w-fit max-w-full input-${color}`}
      disabled={disabled}
      onChange={handleOnChange}
      name={name}
    />
  )
}