import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="container mx-auto">
      <div className="h-screen flex justify-center items-center">
        <div className="w-1/2">
          <Outlet />
        </div>
      </div>
    </div>
  )
}