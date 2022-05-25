const WhoWeAreItem = ({ title, subTitle, textColor }) => {
    return (
        <div className='mb-10 md:mr-8'>
            <h2 className={`text-[${textColor}] text-6xl mb-4`}>{title}</h2>
            <p className='text-white text-xl'>{subTitle}</p>
        </div>
    );
};

export default WhoWeAreItem;