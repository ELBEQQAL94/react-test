// Libraries
import { useState } from 'react';

// Assets
import MenuIcon from '../../assets/icons/menu-icon.png';
import Logo from '../../assets/icons/logo.png';
import Logo2 from '../../assets/icons/logo-2.png';
import CloseIcon from '../../assets/icons/close-icon.png';
import Gradeint from '../../assets/images/gredient-bg.png';

// Contants
import { links } from '../../constants';

// Common components
import { NormalButtonLink } from '../../common';

const NavBar = () => {

    // States
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => setShowMenu((prevShowMenuState) => !prevShowMenuState);

    const renderNavigation = () => (
        <>
            {links?.map((link) => (
                <a key={link.id} href="#" className='text-2xl text-white mb-8 md:mb-0 md:mx-8'>{link.title}</a>
            ))}
        </>
    );

    const renderMenu = () => {
        if (!showMenu) return null;
        return (
            <div className='h-screen w-screen bg-[#282C30] absolute top-0'>
                <img
                    alt='close-icon'
                    src={CloseIcon}
                    className='absolute right-5 top-5 cursor-pointer z-10'
                    onClick={toggleMenu}
                />
                <img
                    src={Gradeint}
                    className='w-full h-screen absolute z-0'
                />
                <div className='flex flex-col items-center justify-center w-full h-screen'>
                    <img
                        alt='logo'
                        src={Logo2}
                        className='z-30 mb-10'
                    />
                    <div className='z-30 flex flex-col items-center mt-8'>
                        {renderNavigation()}
                        <NormalButtonLink
                            title='Connect wallet'
                            buttonStyleContainer='bg-[#6E34FF] text-white py-4 px-8 mt-8 shadow-2xl md:mt-0 rounded-md'
                        />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <nav className=' bg-[#202226] shadow-3xl'>
            <div className='
                flex 
                items-center 
                justify-between 
                p-7
                container 
                mx-auto
            '>
                <div className='flex'>
                    <img
                        alt='logo'
                        src={Logo}
                        className='cursor-pointer lg:mr-10'
                    />
                    <div className='hidden md:flex md:items-center md:justify-between'>
                        {renderNavigation()}
                    </div>
                </div>
                <NormalButtonLink
                    title='Connect wallet'
                    buttonStyleContainer='hidden bg-[#6E34FF] text-white py-4 px-8 mt-8 shadow-2xl rounded-md md:mt-0 md:block'
                />
                <img
                    alt='menu-icon'
                    src={MenuIcon}
                    className='cursor-pointer md:hidden'
                    onClick={toggleMenu}
                />
            </div>
            {renderMenu()}
        </nav>
    );
};

export default NavBar;