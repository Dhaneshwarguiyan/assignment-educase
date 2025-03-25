interface headingPropType {
    text:string;
}

const Heading = ({text}:headingPropType) => {
  return (
    <div className="text-black200 text-[28px] font-medium">
        {text}
    </div>
  )
}

export default Heading
