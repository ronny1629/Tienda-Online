import ImgProduct1 from '@/assets/images/image-product-1.jpg';
import ImgProduct2 from '@/assets/images/image-product-2.jpg';
import ImgProduct3 from '@/assets/images/image-product-3.jpg';
import ImgProduct4 from '@/assets/images/image-product-4.jpg';

import ImgProductSmall1 from '@/assets/images/image-product-1-thumbnail.jpg'
import ImgProductSmall2 from '@/assets/images/image-product-2-thumbnail.jpg'
import ImgProductSmall3 from '@/assets/images/image-product-3-thumbnail.jpg'
import ImgProductSmall4 from '@/assets/images/image-product-4-thumbnail.jpg'

import NextIcon from '@/components/icons/NextIcon';
import PrevieuIcon from '@/components/icons/PrevieuIcon';
import { useState } from 'react';

const imgs = [ImgProduct1, ImgProduct2, ImgProduct3, ImgProduct4];

export default () => { 

    const [index , setIndex ] = useState(0)

    const handleClickNext = () => {
        console.log('Click')
        

        index === imgs.length -1  ? setIndex(0) :setIndex(index + 1) 
    }

    const handleClickPrevieu = () => { 
        console.log('Click')
        

        index === 0  ? setIndex(imgs.length -1) :setIndex(index - 1)
     }

    return(
        <section className="grid md:grid-cols-4 md:gap-4 relative">

            <div className='relative col-span-4'>
                <img src={ imgs[index] } alt="" className='aspect-[16/12] md:rounded-lg'/>

                <div className='absolute top-1/2 left-0 -translate-y-1/2 flex w-full justify-between px-4'>
                    <button onClick={ handleClickPrevieu } className='grid place-items-center h-10 w-10  md:hidden rounded-full bg-white'>
                        <PrevieuIcon/>
                    </button>

                    <button onClick={ handleClickNext } className='grid place-items-center h-10 w-10 md:hidden rounded-full bg-white'>
                        <NextIcon/>
                    </button>
                </div>

            </div>

            <img src={ ImgProductSmall1 } alt="" className='hidden md:block rounded-lg' />
            <img src={ ImgProductSmall2 } alt="" className='hidden md:block rounded-lg'/>
            <img src={ ImgProductSmall3 } alt="" className='hidden md:block rounded-lg'/>
            <img src={ ImgProductSmall4 } alt="" className='hidden md:block rounded-lg'/>

           

        </section>
    )
 };