import { Outlet, useNavigate } from "react-router-dom";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";

export default function Layout() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = () => {
    dispatch(logout())
    navigate('/login')
  }
  return (
    <div className="container mx-auto p-24">
      <Button classes="mb-5" handleOnClick={handleLogout}>
        Logout
        <Icon icon={faSignOut} />
      </Button>
      <hr className="mb-5" />
      <Outlet />
    </div>
  )
}