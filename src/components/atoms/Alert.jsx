import CloseButton from "../molecules/CloseButton";

export default function Alert({ children, icon, onClick }) {
  return (
    <div className="lg:w-[200px]">
      {icon}
      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> */}
      <span>{children}</span>
      <CloseButton handleOnClick={onClick} />
    </div>
  )
}