export default function Textarea({
  value = '',
  disabled = false,
  handleOnChange = () => { },
  name = '',
  color = 'primary'
}) {
  return (
    <textarea
      name={name}
      onChange={handleOnChange}
      cols="30"
      rows="5"
      className={`textarea textarea-bordered textarea-${color}`}
      disabled={disabled}
      value={value}
    >
    </textarea>
  )
}