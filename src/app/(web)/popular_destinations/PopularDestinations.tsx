import React from 'react'
import uae from "../../../public/images/flags/uae.svg"
import ku from "../../../public/images/flags/ku.svg"
import ru from "../../../public/images/flags/ru.svg"
import Image from 'next/image'

export default function PopularDestinations() {
  return (
    <section className="text-gray-600 body-font mt-56 md:mt-20">
  <div className="container px-5 py-1 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        ПОПУЛЯРНЫЕ НАПРАВЛЕНИЯ
      </h1>
    </div>
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-base">
    <div className=''>
    <p className="mb-3 text-lg font-bold">
        Из аэропорта Душанбе
      </p>
      <div className="grid gap-3">
        <div className="flex items-center justify-between rounded-xl bg-accent px-5 py-4 dark:bg-card shadow-lg cursor-pointer">
            <div className='flex items-center gap-3'>
            <span className='relative flex shrink-0 overflow-hidden rounded-full h-9 w-9 border'>
            <Image 
            alt="uae"
            className="aspect-square h-full w-full"
            src={uae}/>
            </span>
          <div className="leading-5">
            <h2 className="text-sm opacity-60">
            Арабские Эмираты
            </h2>
            <p className="font-medium">Дубай (DXB)</p>
          </div>
            </div>
          <div className='text-sm opacity-60'>Пн, Ср</div>
          <div className='rounded-full bg-yellow-400 px-2 text-xs text-center md:text-sm font-medium text-black'>от 550 USD</div>
        </div>
        <div className="flex items-center justify-between rounded-xl bg-accent px-5 py-4 dark:bg-card shadow-lg cursor-pointer">
            <div className='flex items-center gap-3'>
            <span className='relative flex shrink-0 overflow-hidden rounded-full h-9 w-9 border'>
            <Image 
            alt="uae"
            className="aspect-square h-full w-full"
            src={ru}/>
            </span>
          <div className="leading-5">
            <h2 className="text-sm opacity-60">
            Россия
            </h2>
            <p className="font-medium">Москва (DME)</p>
          </div>
            </div>
          <div className='text-sm opacity-60'>Ежедневно</div>
          <div className='rounded-full bg-yellow-400 px-2 text-xs text-center md:text-sm font-medium text-black'>от 20242 RUB</div>
        </div>
      </div>
    </div>
    <div className=''>
    <p className="mb-3 text-lg font-bold">
        Из аэропорта Худжанд
      </p>
      <div className="grid gap-3">
        <div className="flex items-center justify-between rounded-xl bg-accent px-5 py-4 dark:bg-card shadow-lg cursor-pointer">
            <div className='flex items-center gap-3'>
            <span className='relative flex shrink-0 overflow-hidden rounded-full h-9 w-9 border'>
            <Image 
            alt="uae"
            className="aspect-square h-full w-full"
            src={ku}/>
            </span>
          <div className="leading-5">
            <h2 className="text-sm opacity-60">
            Эмираты
            </h2>
            <p className="font-medium">Эль-Кувейт (KWI)</p>
          </div>
            </div>
          <div className='text-sm opacity-60'>Пн, Ср</div>
          <div className='rounded-full bg-yellow-400 px-2 text-xs text-center md:text-sm font-medium text-black'>от 385.16 USD</div>
        </div>
        <div className="flex items-center justify-between rounded-xl bg-accent px-5 py-4 dark:bg-card shadow-lg cursor-pointer">
            <div className='flex items-center gap-3'>
            <span className='relative flex shrink-0 overflow-hidden rounded-full h-9 w-9 border'>
            <Image 
            alt="uae"
            className="aspect-square h-full w-full"
            src={ru}/>
            </span>
          <div className="leading-5">
            <h2 className="text-sm opacity-60">
            Россия
            </h2>
            <p className="font-medium">Красноярск (KJA)</p>
          </div>
            </div>
          <div className='text-sm opacity-60'>Ежедневно</div>
          <div className='rounded-full bg-yellow-400 px-2 text-xs text-center md:text-sm font-medium text-black'>от 23238 RUB</div>
        </div>
      </div>
    </div>
    <div className=''>
    <p className="mb-3 text-lg font-bold">
        Из аэропорта Бохтар
      </p>
      <div className="grid gap-3">
        <div className="flex items-center justify-between rounded-xl bg-accent px-5 py-4 dark:bg-card shadow-lg cursor-pointer">
            <div className='flex items-center gap-3'>
            <span className='relative flex shrink-0 overflow-hidden rounded-full h-9 w-9 border'>
            <Image 
            alt="uae"
            className="aspect-square h-full w-full"
            src={uae}/>
            </span>
          <div className="leading-5">
            <h2 className="text-sm opacity-60">
            Арабские Эмираты
            </h2>
            <p className="font-medium">Дубай (DXB)</p>
          </div>
            </div>
          <div className='text-sm opacity-60'>Пн, Ср</div>
          <div className='rounded-full bg-yellow-400 px-2 text-xs text-center md:text-sm font-medium text-black'>от 550 USD</div>
        </div>
        <div className="flex items-center justify-between rounded-xl bg-accent px-5 py-4 dark:bg-card shadow-lg cursor-pointer">
            <div className='flex items-center gap-3'>
            <span className='relative flex shrink-0 overflow-hidden rounded-full h-9 w-9 border'>
            <Image 
            alt="uae"
            className="aspect-square h-full w-full"
            src={ru}/>
            </span>
          <div className="leading-5">
            <h2 className="text-sm opacity-60">
            Россия
            </h2>
            <p className="font-medium">Екатеринбург (SVX)
            </p>
          </div>
            </div>
          <div className='text-sm opacity-60'>Ежедневно</div>
          <div className='rounded-full bg-yellow-400 px-2 text-xs text-center md:text-sm font-medium text-black'>от 20164.59 RUB</div>
        </div>
      </div>
    </div>
    <div className=''>
    <p className="mb-3 text-lg font-bold">
        Из аэропорта Куляб
      </p>
      <div className="grid gap-3">
        <div className="flex items-center justify-between rounded-xl bg-accent px-5 py-4 dark:bg-card shadow-lg cursor-pointer">
            <div className='flex items-center gap-3'>
            <span className='relative flex shrink-0 overflow-hidden rounded-full h-9 w-9 border'>
            <Image 
            alt="uae"
            className="aspect-square h-full w-full"
            src={uae}/>
            </span>
          <div className="leading-5">
            <h2 className="text-sm opacity-60">
            Арабские Эмираты
            </h2>
            <p className="font-medium">Дубай (DXB)</p>
          </div>
            </div>
          <div className='text-sm opacity-60'>Пн, Ср</div>
          <div className='rounded-full bg-yellow-400 px-2 text-xs text-center md:text-sm font-medium text-black'>от 550 USD</div>
        </div>
        <div className="flex items-center justify-between rounded-xl light:bg-accent px-5 py-4 dark:bg-card shadow-lg cursor-pointer">
            <div className='flex items-center gap-3'>
            <span className='relative flex shrink-0 overflow-hidden rounded-full h-9 w-9 border'>
            <Image 
            alt="uae"
            className="aspect-square h-full w-full"
            src={ru}/>
            </span>
          <div className="leading-5">
            <h2 className="text-sm opacity-60">
            Россия
            </h2>
            <p className="font-medium">Москва (DME)</p>
          </div>
            </div>
          <div className='text-sm opacity-60'>Ежедневно</div>
          <div className='rounded-full bg-yellow-400 px-2 text-xs text-center md:text-sm font-medium text-black'>от 20242 RUB</div>
        </div>
      </div>
    </div>
    </div>
    </div>
  </div>
</section>

  )
}
