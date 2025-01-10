import Image from 'next/image'
import React from 'react'
import singapore from "../../../public/images/tmp/singapore.webp";
import malaysia from "../../../public/images/tmp/malaysia.webp";
import antalya from "../../../public/images/tmp/antalya.webp";
import uzbTur from "../../../public/images/tmp/uzb-tur.jpeg";
import georgia from "../../../public/images/tmp/georgia.png";

export default function Tours() {
  return (
    <div className='relative mt-56 md:mt-36 pb-12'>
      <div className='container mx-auto'>
        <div className='flex flex-wrap items-center justify-center gap-3 mb-10 text-center text-3xl font-extrabold uppercase tracking-tight opacity-75'>
            <h2 className='font-black uppercase  text-slate-700 drop-shadow-xl dark:text-inherit px-10 md:px-0'>Выгодные</h2>
            <h2 className='text-blue-600 p-2 hover:bg-gray-200 rounded-md cursor-pointer'>туры</h2>
            <h2>и</h2>
            <h2 className='text-[#f9b500] p-2 hover:bg-gray-200 rounded-md cursor-pointer'>скидки</h2>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
            <div className='overflow-hidden rounded-xl shadow-lg'>
            <div className='relative h-60'>
                <Image src={singapore} alt='' loading="lazy" decoding="async" data-nimg="fill" className='object-cover' sizes="100vw"
                style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    inset: 0,
                    color: 'transparent',
                  }}/>
            </div>
            <div className='bg-card px-6 py-5'>
                <div className='text-lg font-bold uppercase'>Туры в Сингапур</div>
                <div className="my-2 inline-block rounded-full bg-yellow-400 px-2 text-sm font-medium text-black">от 3519 tjs</div>
                <div className="mt-2 line-clamp-3 text-[15px] leading-5 opacity-70">Погода в Сингапуре — это мечта буквально каждого теплолюбивого жителя Планеты.</div>
            </div>
            </div>
            <div className='overflow-hidden rounded-xl shadow-lg'>
            <div className='relative h-60'>
                <Image src={uzbTur} alt='' loading="lazy" decoding="async" data-nimg="fill" className='object-cover' sizes="100vw"
                style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    inset: 0,
                    color: 'transparent',
                  }}/>
            </div>
            <div className='bg-card px-6 py-5'>
                <div className='text-lg font-bold uppercase'>ТУРЫ В УЗБЕКИСТАН</div>
                <div className="my-2 inline-block rounded-full bg-yellow-400 px-2 text-sm font-medium text-black">от 3519 tjs</div>
                <div className="mt-2 line-clamp-3 text-[15px] leading-5 opacity-70">Путешествие по Узбекистану: от Ташкента до Бухары. Узнайте тайны известных усыпальниц и познакомиться с национальными ремёслами</div>
            </div>
            </div>
            <div className='overflow-hidden rounded-xl shadow-lg'>
            <div className='relative h-60'>
                <Image src={georgia} alt='' loading="lazy" decoding="async" data-nimg="fill" className='object-cover' sizes="100vw"
                style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    inset: 0,
                    color: 'transparent',
                  }}/>
            </div>
            <div className='bg-card px-6 py-5'>
                <div className='text-lg font-bold uppercase'>ТУРЫ В Грузию</div>
                <div className="my-2 inline-block rounded-full bg-yellow-400 px-2 text-sm font-medium text-black">от 3519 tjs</div>
                <div className="mt-2 line-clamp-3 text-[15px] leading-5 opacity-70">Откройте историю, красоту природы и традиции теплого города и гостеприимного края</div>
            </div>
            </div>
            <div className='overflow-hidden rounded-xl shadow-lg'>
            <div className='relative h-60'>
                <Image src={malaysia} alt='' loading="lazy" decoding="async" data-nimg="fill" className='object-cover' sizes="100vw"
                style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    inset: 0,
                    color: 'transparent',
                  }}/>
            </div>
            <div className='bg-card px-6 py-5'>
                <div className='text-lg font-bold uppercase'>ТУРЫ В МАЛАЙЗИЮ</div>
                <div className="my-2 inline-block rounded-full bg-yellow-400 px-2 text-sm font-medium text-black">от 3519 tjs</div>
                <div className="mt-2 line-clamp-3 text-[15px] leading-5 opacity-70">Анталия обладает всеми преимуществами и достоинствами города...</div>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}
