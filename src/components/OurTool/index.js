// Assets
import Gradeint from '../../assets/images/gredient-bg.png';
import Mobile from '../../assets/images/mobile.png';

// Common components
import { MainTitle } from '../../common';

const OurTool = () => {
    return (
        <div
            style={{ backgroundImage: `url(${Gradeint})` }}
            className='bg-no-repeat bg-cover md:hidden'
        >
            <div className='
                container 
                mx-auto 
                py-8
                lg:flex 
                lg:mt-14
                '
            >
                <MainTitle title='Our Tool' />
                <div className='flex items-center justify-center'>
                    <img
                        alt='mobile'
                        src={Mobile}
                    />
                </div>

            </div>
        </div>
    );
};

export default OurTool;