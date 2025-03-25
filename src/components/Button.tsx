interface buttonPropType {
    text:string;
    type:"primary" | "secondary" | "inactive";
}

export default function Button({text,type}:buttonPropType) {
  return (
    <button className={`${type === 'primary' ? 'bg-purple100 text-white': 'bg-black100 text-black200'}  ${type === 'inactive' ? 'text-white100 bg-white200 cursor-not-allowed':'cursor-pointer'} w-[335px] h-[46px] rounded-[6px] text-[16px] font-medium flex items-center justify-center`} type="submit">
        {text}
    </button>
  )
}
