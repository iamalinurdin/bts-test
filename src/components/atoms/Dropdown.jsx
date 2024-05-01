export default function Dropdown({ children, content = '', position = 'end' }) {
  return (
    <div className={`dropdown dropdown-${position}`}>
      <div tabIndex={0} role="button">
        {content}
      </div>
      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 mb-5">
        {children}
      </ul>
    </div>
  )
}