// Assets
import Logo from '../../assets/icons/logo-2.png';

const Footer = () => {
    return (
        <div className='bg-[#202226] shadow-3xl'>
            <div className='container mx-auto flex items-center justify-between p-4 '>
                <img
                    alt='logo'
                    src={Logo}
                />
                <h5 className='text-[#B5BBC0]'>Copyright ©</h5>
            </div>
        </div>
    );
};

export default Footer;