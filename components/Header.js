import Image from "next/image"
import { SearchIcon } from '@heroicons/react/solid'

function Header() {
    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:p-10'>
            {/* left */}
            <div className='relative flex items-center h-10 cursor-pointer my-auto'>
                <Image
                    src='https://links.papareact.com/qd3'
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left'
                />
            </div>

            {/* meddle */}
            <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
                <input type="text" placeholder='Start your search' className='flex-grow pl-5 bg-transparent outline-none text-gray-600 text-sm placeholder-gray-400' />
                <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2 '/>
            </div>

            {/* right */}
            <div></div>
        </header>
    )
}

export default Header
