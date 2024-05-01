export default function Form({ children, handleOnSubmit }) {
  return (
    <form onSubmit={handleOnSubmit} className="flex flex-col gap-3">
      {children}
    </form>
  )
}