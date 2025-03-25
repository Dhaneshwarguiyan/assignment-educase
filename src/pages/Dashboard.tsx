import AnimatedPages from '../animations/AnimatedPages';
import profile from '../assets/Ellipse 114.png'
import edit from '../assets/Group 1585.png';

export default function Dashboard() {
  return (
    <AnimatedPages>
        <div className="w-[375px] h-[812px] bg-background border">
            <div className='w-full h-[68px] flex items-center bg-white px-[20px] text-[18px] shadow-sm'>
                Account Settings
            </div>
            <div>
                <div className='flex px-[20px] mt-8 gap-4 items-start'>
                    <div>
                        <img src={profile} alt="Profile" />
                        <img src={edit} alt="Profile" className='absolute translate-y-[-30px] translate-x-[60px]'/>
                    </div>
                    <div>
                        <div className='text-[15px] font-medium'>
                            Mary Doe
                        </div>
                        <div className='text-[14px] text-black200'>
                            Marry@gmail.com
                        </div>
                    </div>
                </div>
                <div className='text-black200 text-[14px] px-[19px] mt-6'>
                    Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
                </div>
            </div>
            <div className='h-[460px] border-y-2 border-dashed mt-5'/>
        </div>
    </AnimatedPages>
  )
}
