'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LuClock3 } from 'react-icons/lu';
import { RiHome2Line } from 'react-icons/ri';
import { TfiStatsUp } from 'react-icons/tfi';

const NavbarPage = () => {
    const pathName = usePathname();
    return (
        <div className='navbar bg-base-100 shadow-sm'>
            <div className="block md:flex lg:flex justify-between container mx-auto">
                <Link href="/">
                    <h2 className='font-bold text-lg text-center py-2'>Keen<span className='text-green-800'>Keeper</span></h2>
                </Link>
                <div className='flex space-x-5 justify-center items-center'>
                    <Link className={pathName === '/' ? 'btn bg-green-800 text-white' : ''} href="/">
                        <button className='font-bold flex gap-2 items-center'><RiHome2Line />Home</button>
                    </Link>
                    <Link className={pathName === '/timeline' ? 'btn bg-green-800 text-white' : ''} href="/timeline">
                        <button className="font-bold flex gap-2 items-center"><LuClock3 />Timeline</button>
                    </Link>
                    <Link className={pathName === '/stats' ? 'btn bg-green-800 text-white' : ''} href="/stats">
                        <button className="font-bold flex gap-2 items-center"><TfiStatsUp />Stats</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NavbarPage;