
import Template from './Template';
import signupImg from "../project_image/110.jpg"

const Signup = ({setIsLoggedIn}) => {
  return (
    <div>
       <Template
       title="Join the million learning to code with DeepStudy for free"
        desc1="Build skill for today, tommorow, and beyond."
        desc2="Education is future proof of your career."
        image={signupImg}
        formtype="signup"
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  )
}

export default Signup
