import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RequireRoute = ({ children }) => {
  const user = useSelector((state) => state.userReducer.user);
  const NavigateLink = useNavigate();
  useEffect(() => {
    if (!user) {
      NavigateLink("/", { replace: true });
      return;
    }
  }, [user]);
  return children;
};

export default RequireRoute;
