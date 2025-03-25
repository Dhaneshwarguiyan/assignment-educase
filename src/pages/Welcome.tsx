import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";

export default function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="w-[375px] h-[812px] bg-background flex flex-col justify-end px-[20px] border">
        <div className="mb-[29px] w-[232px] flex flex-col gap-[10px]">
            <Heading text={"Welcome to PopX"}/>
            <SubHeading />
        </div>
        <div className="flex flex-col gap-3 mb-[41px]">
            <span onClick={()=>{navigate('/signup')}}><Button text="Create Account" type={"primary"}/></span>
            <span onClick={()=>{navigate('/signin')}}><Button text="Already Registered? Login" type={"secondary"}/></span>
        </div>
    </div>
  )
}
