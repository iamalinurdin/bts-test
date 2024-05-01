import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function AuthLayout() {
  const { token } = useSelector((state) => state.auth)

  if (token) {
    return <Navigate to="/" />
  }

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