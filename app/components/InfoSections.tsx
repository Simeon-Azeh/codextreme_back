
// components/HeroCarousel.tsx
import { MdArrowOutward } from "react-icons/md";



const InfoSection = () => {
    return (
        <div className="w-full p-4 lg:w-[90%] mx-auto ">
            <h1 className='space-mono text-[40px] text-black font-semibold'>Does this sound like you?</h1>
            <p className='text-[20px] text-black'>Private, public, small, medium to large companies and organizations come to CodeXtreme when they need technical partners and a process they can count on.</p>
            <p className='text-[20px] text-black'>At the start of the conversation, they say things like these:</p>
            <div>
                <div className='mt-10 relative'>
                   
                    <h1 className='font-semibold text-black text-[30px] z-40 mb-2 '>Out of date</h1>
                    <div className='h-4 w-44 bg-red-400 absolute top-7 -z-40'></div>
                    <p className='text-black text-[20px]'>“We rely on our application/system but don’t have in-house staff with the<br /> technical expertise needed to maintain and improve it.”</p>
                </div>

                <div className='mt-10 relative'>
                   
                   <h1 className='font-semibold text-black text-[30px] z-40 mb-2 '>Trapped</h1>
                   <div className='h-4 w-44 bg-red-400 absolute top-8 -z-40'></div>
                   <p className='text-black text-[20px]'>“Our current engineers make everything hard. Availability, timelines,<br /> communication, pricing—it’s all frustrating. We feel trapped.”</p>
               </div>
               <div className='mt-10 relative'>
                   
                   <h1 className='font-semibold text-black text-[30px] z-40 mb-2 '>Backlog</h1>
                   <div className='h-4 w-44 bg-red-400 absolute top-8 -z-40'></div>
                   <p className='text-black text-[20px]'>“Issues with our apps/systems and requests for new features and functionality<br />  are piling up. Our team can catch up. We can’t keep ignoring them.”</p>
               </div>
               <div className='mt-10 relative'>
                   
                   <h1 className='font-semibold text-black text-[30px] z-40 mb-2 '>Limbo</h1>
                   <div className='h-4 w-44 bg-red-400 absolute top-8 -z-40'></div>
                   <p className='text-black text-[20px]'>”The original engineers are no longer available. Development has been hit or<br /> miss ever since. We have no control over our own software and systems.”</p>
               </div>
               <div className='mt-10 relative'>
                   
                   <h1 className='font-semibold text-black text-[30px] z-40 mb-2 '>Opportunity</h1>
                   <div className='h-4 w-44 bg-red-400 absolute top-8 -z-40'></div>
                   <p className='text-black text-[20px]'>“We need apps/systems to make certain tasks, operations and processes easier.<br /> Automation would help to minimize staffing costs and help us better serve our team and customers/clients.”</p>
               </div>
               
            </div>
            <div className='mt-6 flex space-x-4 pb-20 flex-col md:flex-row gap-4'>
                <button className="px-4 py-2 text-white bg-gradient-to-r from-[#000000] to-[#666666] rounded font-medium hover:translate-y-[-5px] duration-150">Get a quote today</button>
                <button className='border  px-4 text-black  rounded-md font-medium flex items-center gap-1 py-2 hover:translate-y-[-5px] duration-150'>Book a 20 minute consulting call <MdArrowOutward /></button>
            </div>
        </div>
    );
};

export default InfoSection;
