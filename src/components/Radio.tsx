interface radioPropType {
    text:string;
    name:string;
    checked:boolean;
    updateFormData:(arg:React.ChangeEvent<HTMLInputElement>)=>void;
}


export default function Radio({text,name,checked,updateFormData}:radioPropType) {
  return (
    <div className="flex gap-2">
        <input type="radio" name={name} value={text} className="checked:accent-purple100 size-5 cursor-pointer" checked={checked} onChange={updateFormData}/>
        <div className="text-[14px] text-black200">
            {text}
        </div>
    </div>
  )
}
