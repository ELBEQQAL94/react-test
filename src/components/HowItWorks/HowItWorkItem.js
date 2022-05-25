const HowItWorkItem = ({ title, subTitle, description, textColor }) => {
    return (
        <div className='mb-12'>
            <h1 className='text-[#8B9299] text-9xl'>{title}</h1>
            <h5 className={`text-[${textColor}] text-4xl mt-[-2em] ml-4`}>{subTitle}</h5>
            <p className='text-[#B5BBC0] mt-8 text-xl ml-2 px-4'>{description}</p>
        </div>
    );
};

export default HowItWorkItem;