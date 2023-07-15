import Template from "./Template";
import loginImg from "../project_image/101.jpg"
const Login = ({setIsLoggedIn}) => {
  return (
    <div>
      <Template
        title="Welcome Back"
        desc1="Build skill for today, tommorow, and beyond."
        desc2="Education is future proof of your career."
        image={loginImg}
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
};

export default Login;
