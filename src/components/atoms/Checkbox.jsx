export default function Checkbox({ value, checked = false, name, handleOnChange }) {
  return <input type="checkbox" name={name} value={value} defaultChecked={checked} className="checkbox" onChange={handleOnChange} />
}