import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export default function PrivateRoute() {
  const { token } = useSelector((state) => state.auth)

  if (!token) {
    return <Navigate to="/login" />
  }
  // else if (token && pathname == '/login' || pathname == '/register') {
  //   return <Navigate to="/" />
  // }

  return <Outlet />
}