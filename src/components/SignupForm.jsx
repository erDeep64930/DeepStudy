import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
const SignupForm = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [accountType, setAccountType] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const changeHandler = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (formData.password != formData.confirmPassword) {
      toast.error("please enter correct password , password do not match");
      return;
    }
    setIsLoggedIn(true);
    toast.success("account created successfully");

    const accountData = {
      ...formData,
    };
    const finalData = {
      ...accountData,
      ...formData,
      accountType,
    };
    console.log(finalData);
    navigate("/dashboard");
  };

  return (
    <div>
      {/* student instructor tab */}
      <div className="flex bg-transparent border border-amber-500 rounded-xl my-6 gap-x-1 p-1 max-w-max">
        <button
          className={`${
            accountType === "student"
              ? "bg-amber-300 text-white"
              : "bg-transparent text-white"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("student")}
        >
          Student
        </button>
        <button
          className={`${
            accountType === "instructor"
              ? "bg-amber-300 text-white"
              : "bg-transparent text-white"
          } py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => setAccountType("instructor")}
        >
          Instructor
        </button>
      </div>
      <form
        onSubmit={submitHandler}
        className="flex flex-col w-full gap-y-4 mt-5"
      >
        <div className="flex gap-x-4">
          <label className="w-full">
            <p className="text-[0.87rem] text-white mb-1 leading-[1.375rem]">
              First Name<sup className="text-pink-500">*</sup>
            </p>
            <input
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter your first name"
              value={formData.firstName}
              className="w-full bg-transparent p-[12px] rounded-sm text-white "
            />
          </label>
          <label className="w-full">
            <p className="text-[0.87rem] text-white mb-1 leading-[1.375rem]">
              Last Name<sup className="text-pink-500">*</sup>
            </p>
            <input
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter your last name"
              value={formData.lastName}
              className="w-full bg-transparent p-[12px] rounded-sm text-white "
            />
          </label>
        </div>
        <label className="w-full">
          <p className="text-[0.87rem] text-white mb-1 leading-[1.375rem]">
            Email<sup className="text-pink-500">*</sup>
          </p>
          <input
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter your email"
            value={formData.email}
            className="w-full bg-transparent p-[12px] rounded-sm text-white "
          />
        </label>
        {/* createpassword and confirm password */}
        <div className="flex gap-x-4">
          <label className="w-full relative">
            <p className="text-[0.87rem] text-white mb-1 leading-[1.375rem]">
              Create Password<sup className="text-pink-500">*</sup>
            </p>
            <input
              required
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Enter your password"
              value={formData.password}
              className="w-full bg-transparent p-[12px] rounded-sm text-white "
            />
            <span
              className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#afb2bf" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#afb2bf" />
              )}
            </span>
          </label>

          <label className="w-full relative">
            <p className="text-[0.87rem] text-white mb-1 leading-[1.375rem]">
              Confirm Password<sup>*</sup>
            </p>
            <input
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="confirm your password"
              value={formData.confirmPassword}
              className="w-full bg-transparent p-[12px] rounded-sm text-white "
            />
            <span
              className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() => setShowConfirmPassword((prev) => !prev)}
            >
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible fontSize={24} fill="#afb2bf" />
              ) : (
                <AiOutlineEye fontSize={24} fill="#afb2bf" />
              )}
            </span>
          </label>
        </div>

        <button className="text-black px-[12px] py-[8px] rounded-[8px] border border-amber-400 bg-amber-400 hover:bg-transparent hover:text-white">
          create account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
