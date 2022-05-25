const ServiceItem = ({ src, alt, title, subTitle }) => {
    return (
        <div className='mb-12 md:mb-8 lg:p-4'>
            <div className='flex items-center mb-4'>
                <img
                    alt={alt}
                    src={src}
                    className='mr-4'
                />
                <h2 className='text-2xl text-white md:text-xl'>{title}</h2>
            </div>
            <p className='text-[#B5BBC0] text-xl md:text-base'>{subTitle}</p>
        </div>
    );
};

export default ServiceItem;