import { useState } from "react";
import { toast } from "react-toastify";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {Link,useNavigate} from "react-router-dom"
const LoginForm = ({setIsLoggedIn}) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoggedIn(true)
    toast.success("logged in successfully");
    navigate("/dashboard")
  }


  return (
    <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-5">
      <label className="w-full">
        <p className="text-[0.87rem] text-white mb-1 leading-[1.375rem]" >
          Email Address<sup className="text-pink-500">*</sup>
        </p>
        <input
          required
          type="text"
          value={formData.email}
          onChange={changeHandler}
          placeholder="Enter your email address"
          name="email"
          className="w-full bg-transparent p-[12px] rounded-sm text-white "
        />
      </label>

      <label className="w-full relative">
        <p className="text-[0.87rem] text-white mb-1 leading-[1.375rem]">
          Password<sup className="text-pink-500">*</sup>
        </p>
        <input
          required
          type="showPassword ? text : password"
          value={formData.password}
          onChange={changeHandler}
          placeholder="Enter your password"
          name="password"
          className="bg-transparent p-[12px] rounded-sm text-white w-full "
        />
        <span className="absolute right-3 top-[38px] cursor-pointer" onClick={()=>setShowPassword((prev)=>!prev)}>
          {showPassword ? <AiOutlineEyeInvisible fontSize={24} fill="#afb2bf"/> : <AiOutlineEye fontSize={24} fill="#afb2bf"/>}
        </span>
        <Link to="#">
          <p className="text-xs mt-1 text-blue-400 text-right mb-1 leading-[1.375rem]" >Forgot Password</p>
        </Link>
      </label>
      <button className="text-black px-[12px] py-[8px] rounded-[8px] border border-amber-400 bg-amber-400 hover:bg-transparent hover:text-white">Sign in</button>
    </form>
  );
};

export default LoginForm;
