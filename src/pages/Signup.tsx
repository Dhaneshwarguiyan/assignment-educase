import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Input from "../components/Input";
import Mandotary from "../components/Mandotary";
import Radio from "../components/Radio";
import { useNavigate } from "react-router-dom";
import { signUpPropType } from "../types/proptypes";
import AnimatedPages from "../animations/AnimatedPages";



export default function Signup() {
    const navigate = useNavigate();
    const [formData,setFormData] = useState<signUpPropType>({
        name:"",
        phone:"",
        email:"",
        password:"",
        company:"",
        agency:"Yes"
    });
    const [isButtonActive,setIsButtonActive] = useState<boolean>(false);
    const updateFormData = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setFormData(prev => {
            const updatedData = {
                ...prev,
                [e.target.name]: e.target.value
            };
            checkActive(updatedData);
            return updatedData;
        })
    }
    const submitHandler = (e:React.MouseEvent<HTMLDivElement>)=>{
        e.preventDefault();
        if(isButtonActive){
            navigate('/dashboard')
        }
    }
    const checkActive = (formData:signUpPropType)=>{
        if(formData.name !=="" && formData.phone !== "" && formData.email !== "" && formData.email !== "" && formData.password !== ""){
            setIsButtonActive(true);
        }else{
            setIsButtonActive(false);
        }
    }
    useEffect(()=>{
        checkActive(formData);
    },[])
  return (
    <AnimatedPages>
        <form>
            <div className="w-[375px] h-[812px] bg-background px-[20px] flex flex-col justify-between border">
                <div>
                    <div className="w-[188px] leading-10 mb-3 mt-8">
                        <Heading text={"Create your PopX account"}/>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Input type="text" label={"Full Name"} value={formData.name} name="name" placeholder={"Enter your Full Name"} mandotary={true} updateFormData={updateFormData}/>
                        <Input type="text" label={"Phone number"}  value={formData.phone} name="phone" placeholder={"Enter your Phone number"} mandotary={true} updateFormData={updateFormData}/>
                        <Input type="text" label={"Email address"} value={formData.email} name="email" placeholder={"Enter your Email address"} mandotary={true} updateFormData={updateFormData}/>
                        <Input type="password" label={"Password"} value={formData.password} name="password" placeholder={"Enter your Password"} mandotary={true} updateFormData={updateFormData}/>
                        <Input type="text" label={"Company name"} value={formData.company} name="company" placeholder={"Enter your Company name"} updateFormData={updateFormData}/>
                    </div>
                    <div className="flex flex-col gap-2 mt-4">
                    <span className="text-[13px] text-black200">Are you an Agency?<Mandotary /></span>
                        <div className="flex gap-4">
                            <Radio text="Yes" name="agency" checked={formData.agency === "Yes"} updateFormData={updateFormData}/>
                            <Radio text="No" name="agency" checked={formData.agency === "No"} updateFormData={updateFormData}/>
                        </div>
                    </div>
                </div>
            <div className="mb-[30px]" onClick={submitHandler}>
                <Button text="Create Account" type={isButtonActive ? "primary":"inactive"}/>
            </div>
            </div>
        </form>
    </AnimatedPages>
  )
}
