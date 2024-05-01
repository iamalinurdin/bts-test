export default function Toggle({ label, size = 'sm', checked = true, handleOnClick }) {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        {/* <span className="label-text">{label}</span> */}
        <input
          name={`status-${label}`}
          type="checkbox"
          className="toggle toggle-sm toggle-primary"
          defaultChecked={checked}
          onChange={handleOnClick}
        />
      </label>
    </div>
  )
}