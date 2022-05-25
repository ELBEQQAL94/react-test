// Assets
import Gradeint from '../../assets/images/gredient-bg.png';
import Slide01 from '../../assets/images/slide-01.png';

// Common components
import { NormalButtonLink } from '../../common';

const Hero = () => {
    return (
        <div
            style={{ backgroundImage: `url(${Gradeint})` }}
            className='bg-no-repeat bg-cover'
        >
            <div className='
                container 
                mx-auto 
                py-8
                lg:flex 
                lg:mt-14
                '
            >
                <div className='lg:shrink-0 lg:w-1/2 lg:self-center'>
                    <h1 className='text-white font-bold text-5xl pt-9 w-10/12 pl-4 lg:text-7xl'>
                        Discover, collect and sell creative NFTs
                    </h1>
                    <p className='text-white pt-5 px-5 text-xl lg:text-2xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar amet tellus urna id dui est magna placerat massa. Sit amet sit netus.</p>
                    <div className='mt-20 pl-4 w-1/2'>
                        <NormalButtonLink
                            title='Learn more'
                            buttonStyleContainer='bg-[#6E34FF] text-white py-4 px-14 shadow-2xl rounded-md'
                        />
                    </div>
                </div>
                <div className='mt-20 px-4 md:pl-32 lg:w-1/2 lg:mt-0 lg:px-0'>
                    <img
                        alt='slide-01'
                        src={Slide01}
                        className='w-full rounded object-contain'
                    />
                    <div className='flex items-center justify-center mt-10'>
                        <div className='flex items-center'>
                            <div className='w-3 h-3 rounded-full bg-[#6E34FF] mr-4 cursor-pointer' />
                            <div className='w-3 h-3 rounded-full bg-[#8B9299] mr-4 cursor-pointer' />
                            <div className='w-3 h-3 rounded-full bg-[#8B9299] mr-4 cursor-pointer' />
                            <div className='w-3 h-3 rounded-full bg-[#8B9299] mr-4 cursor-pointer' />
                            <div className='w-3 h-3 rounded-full bg-[#8B9299] cursor-pointer' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;