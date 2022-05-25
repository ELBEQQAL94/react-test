// Assets
import Gradeint from '../../assets/images/mobile-bg.png';
import Mobile from '../../assets/images/mobile-03.png';

// Common components
import { MainTitle } from '../../common';

// Components
import ServiceItem from '../ServiceItem';

// Data
import { services } from '../../data';

const OurToolCustom = () => {
    return (
        <div className='container mx-auto hidden lg:block'>
            <MainTitle title='Our Tool' />
            <div className='flex items-center justify-center px-12'>
                <div>
                    {
                        services?.slice(0, 3).map((service) => (
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
                <div
                    style={{ backgroundImage: `url(${Gradeint})` }}
                    className='bg-no-repeat bg-cover'
                >
                    <img
                        alt='mobile'
                        src={Mobile}
                    />
                </div>
                <div>

                    {
                        services?.slice(3, services.length).map((service) => (
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
        </div>
    );
};

export default OurToolCustom;