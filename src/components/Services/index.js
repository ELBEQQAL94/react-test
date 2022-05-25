// Assets
import Mobile from '../../assets/images/mobile-02.png';

// Components
import ServiceItem from '../ServiceItem';

// Data
import { services } from '../../data';

const Services = () => {
    return (
        <div className='container mx-auto py-8 px-4 lg:hidden'>
            <h1 className='hidden text-white font-bold text-5xl pt-9 w-10/12 pl-4 mb-14 md:block lg:text-7xl'>
                Our Tool
            </h1>
            <div className='md:flex'>
                <div>
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
                <div className='hidden md:block'>
                    <img
                        alt='mobile'
                        src={Mobile}
                    />
                </div>
            </div>
        </div>
    );
};

export default Services;