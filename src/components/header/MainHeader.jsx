import  LogoSneakers  from '@/assets/images/logo.svg'
import  Avatar  from "@/assets/images/image-avatar.png";
import MenuIcons from '@/components/icons/MenuIcons';
import Cart from '@/components/icons/cart';
import CloseIcons from '@/components/icons/CloseIcons';
import { useState } from 'react';

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
    
        <header className='flex container mx-auto px-4 items-center gap-8 bg-gray-200 py-8 '>
            <button className='md:hidden' onClick={ handleOpenMenu }>
                <MenuIcons/>
            </button>

            <img src={LogoSneakers} alt="Logo Sneakers" className='mr-auto md:mr-0 h-5 mb-1'/>
            
            <nav className={navClass}>
                <button className='mb-12 md:hidden' onClick={ handleCloseMenu }>
                    <CloseIcons/>
                </button>
                <a href="#">Collections</a>
                <a href="#">Men</a>
                <a href="#">Women</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
            </nav>

            <div className='flex gap-4'>
                <button>
                    <Cart/>
                </button>
                <img src={ Avatar } alt=""  className='w-8'/>
            </div>
        </header>  
        

    </>
  )
}

export default MainHeader;