// Common components
import { MainTitle } from '../../common';

// Components
import HowItWorkItem from './HowItWorkItem';

const howItWorksItems = [
    {
        id: '1',
        title: '01.',
        subTitle: 'Lorem ipsum dolor',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A vel suspendisse faucibus libero, urna tristique et. Urna at erat nunc viverra sed ullamcorper diam. Sit egestas in et ornare.',
        textColor: '#28D6E2',
    },
    {
        id: '1',
        title: '02.',
        subTitle: 'Lorem ipsum dolor',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A vel suspendisse faucibus libero, urna tristique et. Urna at erat nunc viverra sed ullamcorper diam. Sit egestas in et ornare.',
        textColor: '#6E34FF',
    },
    {
        id: '1',
        title: '03.',
        subTitle: 'Lorem ipsum dolor',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A vel suspendisse faucibus libero, urna tristique et. Urna at erat nunc viverra sed ullamcorper diam. Sit egestas in et ornare.',
        textColor: '#5AD8A9',
    },
    {
        id: '1',
        title: '04.',
        subTitle: 'Lorem ipsum dolor',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A vel suspendisse faucibus libero, urna tristique et. Urna at erat nunc viverra sed ullamcorper diam. Sit egestas in et ornare.',
        textColor: '#E953C8',
    },
];

const HowItWorks = () => {
    return (
        <div className='container mx-auto'>
            <MainTitle
                title='How it works?'
            />
            <div className='grid grid-cols-1 pl-4 mt-8 md:grid-cols-2 lg:grid-cols-4'>

                {
                    howItWorksItems?.map((item) => (
                        <HowItWorkItem
                            key={item.id}
                            title={item.title}
                            subTitle={item.subTitle}
                            description={item.description}
                            textColor={item.textColor}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default HowItWorks;