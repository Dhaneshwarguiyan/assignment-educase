import Mandotary from "./Mandotary";

interface inputPropType {
    label:string;
    name:string;
    value:string;
    placeholder:string;
    type:'text'|'password';
    mandotary?:boolean
    updateFormData:(args:React.ChangeEvent<HTMLInputElement>)=>void;
}


export default function Input({label,name,value,placeholder,type,mandotary,updateFormData}:inputPropType) {
  return (
    <div className="">
        <div className="text-purple100 translate-y-[10px] bg-background text-[13px] w-fit px-2 mx-2">
            {label}{mandotary && <Mandotary/>}
        </div>
        <input type={type} name={name} placeholder={placeholder} value={value} className="border-[2px] border-white200 rounded-[6px] w-[335px] h-[40px] px-4 outline-none text-black200 text-[14px] bg-transparent" onChange={updateFormData}/>
    </div>
)
}
