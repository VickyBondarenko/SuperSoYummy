import { useNavigate } from "react-router-dom";
import { selectIsAuth } from "../redux/authSlice/authSelectors";
import { useAppSelector } from "./reduxHooks";

interface PrivateRouteProps {
  children: any;
}
export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const isLoggedIn = useAppSelector(selectIsAuth);

  const navigate = useNavigate();

  if (!isLoggedIn) {
    return navigate("/welcome");
  }

  return children;
};
