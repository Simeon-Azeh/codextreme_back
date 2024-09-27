
// components/HeroCarousel.tsx
import { Carousel } from 'antd';



const HeroCarousel = () => {
    return (
        <Carousel autoplay dotPosition="bottom" effect="fade" >
            <div >
                <h2 className='space-mono text-[18px] lg:text-[50px] text-[#000000]'>Innovating in Africa since 2024</h2>
                <h1 className=' text-[28px] lg:text-[70px] text-[#000000] mont font-semibold'>Global Innovation Consulting</h1>
                <p className='text-[18px] mont lg:text-[25px] mt-[-20px]'>Solving for companies, organizations, people and communities</p>
            </div>

            <div>
                
            </div>

        </Carousel>
    );
};

export default HeroCarousel;
