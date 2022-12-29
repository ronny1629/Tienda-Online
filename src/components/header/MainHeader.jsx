import  LogoSneakers  from '@/assets/images/logo.svg'
import  Avatar  from "@/assets/images/image-avatar.png";
import MenuIcons from '@/components/icons/MenuIcons';
import Cart from '@/components/icons/cart';
import CloseIcons from '@/components/icons/CloseIcons';
import { useState } from 'react';
import NavLinkHeader from '@/components/header/NavLinkHeader';

const MainHeader = () => {

    const [navClass, setNavClass] = useState('hidden font-bold md:static md:flex-row md:gap-4 md:flex md:h-auto  md:mr-auto md:p-0')

    const handleOpenMenu = ()=>{
        setNavClass("absolute top-0 left-0 gap-y-5 font-bold bg-white h-full md:static p-0 flex flex-col md:flex-row md:gap-4 md-flex md:h-auto md:mr-auto w-4/5");
    } 

    const handleCloseMenu = ()=>{
        setNavClass('hidden font-bold md:static  md:flex-row md:gap-4 md:flex md:h-auto  md:mr-auto md:p-0');
    }

  return (
    <>
    
        <header className='flex container mx-auto items-center gap-8 p-4 md:p-0'>
            <button className='md:hidden' onClick={ handleOpenMenu }>
                <MenuIcons/>
            </button>

            <img src={LogoSneakers} alt="Logo Sneakers" className='mr-auto md:mr-0 h-5 mb-1'/>
            
            <nav className={navClass}>

                <button className='mb-12 md:hidden' onClick={ handleCloseMenu }>
                    <CloseIcons/>
                </button>

                <NavLinkHeader text='Collections'/>
                <NavLinkHeader text='Men'/>
                <NavLinkHeader text='Women'/>
                <NavLinkHeader text='About'/>
                <NavLinkHeader text='Contact'/>
            </nav>

            <div className='flex gap-4'>
                <button>
                    <Cart/>
                </button>
                <img src={ Avatar } alt=""  className='w-8'/>
            </div>
        </header>  
        <span className='container hidden mx-auto md:block h-[1px] w-full bg-gray-100 '>

        </span>
        

    </>
  )
}

export default MainHeader;