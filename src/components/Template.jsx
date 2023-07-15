import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import pattern from "../project_image/109.jpg";
import { FcGoogle } from "react-icons/fc";
const Template = ({ title, desc1, desc2, image, formtype, setIsLoggedIn }) => {
  return (
    <div className="flex w-11/12 max-w-[1160px] py-12 mx-auto justify-between  gap-x-12 gap-y-0">
      <div className="w-11/12 max-w-[450px]">
        <h1 className="text-white text-[1.8rem] leading-[2.37rem]">{title}</h1>
        <p className="text-[1.125rem] leading-[1.625rem] mt-4">
          <span className="text-white">{desc1}</span>
          <br />
          <span className="text-blue-400 italic">{desc2}</span>
        </p>

        {formtype === "signup" ? (
          <SignupForm setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}

        <div className="flex w-full items-center my-4 gap-x-2">
          <div className="h-[1px] w-full bg-amber-400"></div>
          <p className="text-slate-300 font-medium leading-[1.375rem] ">OR</p>
          <div className="h-[1px] w-full bg-amber-400"></div>
        </div>

        <button className="flex w-full justify-center items-center gap-x-3 mt-6 text-white px-[12px] py-[8px] rounded-[8px] border border-amber-400 bg-amber-200/10">
          <FcGoogle />
          <p>Sign Up with Google</p>
        </button>
      </div>

      {/* this is for image */}

      <div className="relative w-11/12 max-w-[480px] ">
        <img
          src={pattern}
          alt="image pattern"
          width={555}
          height={575}
          loading="lazy"
        />
        <img
          src={image}
          alt="student"
          width={555}
          height={575}
          loading="lazy"
          className="absolute -top-4 right-4"
        />
      </div>
    </div>
  );
};

export default Template;
