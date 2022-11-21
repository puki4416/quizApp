import { Navigate } from "react-router-dom";

const PrivateRoute = ({ allow, component }) => {
  return allow ? (
    component
  ) : (
    <Navigate to="/" {...window.alert("비정상적 접근입니다")}></Navigate>
  );
};

export default PrivateRoute;
