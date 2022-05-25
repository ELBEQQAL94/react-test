// Common components
import { MainTitle } from '../../common';

// Components
import ServiceItem from '../ServiceItem';

// Data
import { services } from '../../data';

// Assets
import Laptop from '../../assets/images/laptop-lg.png';

const Features = () => {
    return (
        <div className='container mx-auto py-7'>
            <MainTitle
                title='Some features'
            />
            <div className='lg:flex flex-row-reverse'>
                <div className='lg:w-1/2'>
                    <div className='grid grid-cols-1 pl-4 mt-8 md:grid-cols-2 lg:grid-cols-2'>
                        {
                            services?.map((service) => (
                                <ServiceItem
                                    key={service.id}
                                    alt={service.alt}
                                    src={service.src}
                                    title={service.title}
                                    subTitle={service.subTitle}
                                />
                            ))
                        }
                    </div>
                </div>
                <div className='pr-4 mt-14 lg:w-1/2'>
                    <img
                        alt='laptop'
                        src={Laptop}
                        className='w-full'
                    />
                </div>
            </div>
        </div>
    );
};

export default Features;