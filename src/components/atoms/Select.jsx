export default function Select({ 
  placeholder = '', 
  size = 'md', 
  color = 'primary', 
  options = [],
  name = '',
  handleOnChange = () => {}
}) {
  return (
    <select className={`select select-bordered select-${size} select-${color}`} name={name} onChange={handleOnChange}>
      <option disabled selected>
        {placeholder}
      </option>
      {options.map((item, index) => (
        <option value={item.value} key={index}>
          {item.label}
        </option>
      ))}
    </select>
  )
}