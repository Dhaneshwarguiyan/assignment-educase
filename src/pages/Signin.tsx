import React, { useEffect, useState } from "react"
import Button from "../components/Button"
import Heading from "../components/Heading"
import Input from "../components/Input"
import SubHeading from "../components/SubHeading"
import { useNavigate } from "react-router-dom"
import { signInPropType } from "../types/proptypes"


const Signin = () => {
  const navigate = useNavigate();
  const [isButtonActive,setIsButtonActive] = useState<boolean>(false);
  const [formData,setFormData] = useState<signInPropType>({
    email:"",
    password:""
  });
  const updateFormData = (e:React.ChangeEvent<HTMLInputElement>)=> {
    setFormData((prev)=>{
      const updatedData = {
        ...prev,
        [e.target.name]:e.target.value
      }
      checkIsActive(updatedData);
      return updatedData;
    })
  }
  const checkIsActive = (formData:signInPropType)=>{
    if(formData.email && formData.password){
        setIsButtonActive(true);
    }else{
        setIsButtonActive(false);
    }
  }
  const handleSubmit = (e:React.MouseEvent<HTMLButtonElement>)=>{
      e.preventDefault();
      if(isButtonActive){
        navigate('/dashboard');
      }
  }
  useEffect(()=>{
    checkIsActive(formData);
  },[])
  return (
    <div className="w-[375px] h-[812px] bg-background px-[20px] border">
      <form>
          <div className="w-[232px] flex flex-col gap-3 pb-[20px] mt-8">
                <Heading text="Signin to your PopX account"/>
                <SubHeading />
            </div>
                <Input label="Email Address" name="email" placeholder="Enter email address" value={formData.email} type="text" updateFormData={updateFormData}/>
                <Input label="Password" name="password" placeholder="Enter password" value={formData.password} type="password" updateFormData={updateFormData}/>
            <button className="mt-4" type="submit" onClick={handleSubmit}>
                <Button text="Login" type={isButtonActive ? 'primary' : 'inactive'}/>
            </button>
      </form>
    </div>
  )
}

export default Signin
