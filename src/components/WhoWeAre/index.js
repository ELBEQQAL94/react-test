// Components
import WhoWeAreItem from './WhoWeAreItem';

const WhoWeAre = () => {
    return (
        <div className='container mx-auto py-14 lg:flex'>
            <div className='lg:shrink-0 lg:w-1/2 pr-10'>
                <h1 className='text-4xl text-white pl-4'>Who we are?</h1>
                <p className='text-[#B5BBC0] pl-4 mt-4 text-xl'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis sodales habitasse curabitur dolor ut consectetur eleifend non. Iaculis morbi mi pellentesque praesent. Consectetur eget ultrices odio adipiscing condimentum placerat viverra. Urna, nibh id gravida vivamus. Vulputate arcu in imperdiet praesent. Faucibus tortor tempor iaculis maecenas mauris.
                    A lacus eleifend eu augue tincidunt aliquet egestas turpis massa. Augue sagittis viverra nunc, hac nisl accumsan, mi odio nibh. Urna elementum elementum id commodo elit eu ultricies eget aliquam. Malesuada sodales nisi sit mollis mi dignissim nulla etiam. Feugiat mi velit accumsan magna. Lectus enim in nam proin neque et sem. Eget tincidunt fringilla cras velit enim lorem.
                </p>
            </div>
            <div className='lg:w-1/2'>
                <div className='grid grid-cols-2 pl-4 mt-8 md:grid-cols-4 lg:grid-cols-2'>
                    <WhoWeAreItem
                        title='100+'
                        subTitle='In adipiscing sed aliquet consectetur.'
                        textColor='#E953C8'
                    />
                    <WhoWeAreItem
                        title='20K+'
                        subTitle='Nec viverra sagittis magnis sit magna ut.'
                        textColor='#5AD8A9'
                    />
                    <WhoWeAreItem
                        title='100%'
                        subTitle='Neque nunc lacinia eu aliquam.'
                        textColor='#5AD8A9'
                    />
                    <WhoWeAreItem
                        title='60K+'
                        subTitle='Condimentum quam vestibulum donec.'
                        textColor='#E953C8'
                    />
                </div>
            </div>
        </div>
    );
};

export default WhoWeAre;