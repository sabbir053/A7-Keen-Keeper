import Image from 'next/image';

const FooterPage = () => {
    return (
        <footer className="bg-[#244d3f] text-primary-content p-3 md:p-10">
            <aside className='text-center'>
                <h2 className="text-4xl md:text-6xl font-bold text-white">KeenKeeper</h2>
                <p className="text-white font-light pt-4">
                    Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
                </p>
                <h2 className='text-2xl font-bold py-4'>Social Links</h2>
                <div className="flex gap-3 justify-center">
                    <Image src="/instagram.png" alt='instagram image' width={44} height={44} />
                    <Image src="/facebook.png" alt='facebook image' width={44} height={44} />
                    <Image src="/twitter.png" alt='twitter image' width={44} height={44} />
                </div>
            </aside>
            <hr className="w-full border-t border-white/20 my-4 mt-8" />
            <nav>
                {/* <div className="flex justify-between ">
                    <p className='py-3'>© 2026 KeenKeeper. All rights reserved.</p>
                    <div className='gap-5 flex'>
                        <a className="link link-hover">Privacy Policy</a>
                        <a className="link link-hover space-x-3">Terms of Service</a>
                        <a className="link link-hover">Cookies</a>
                    </div>
                </div> */}
                <div className="flex flex-col md:flex-row md:justify-between items-center text-center md:text-left gap-3">

                    <p className="py-3">
                        © 2026 KeenKeeper. All rights reserved.
                    </p>

                    <div className="flex flex-col md:flex-row gap-2 md:gap-5 items-center">
                        <a className="link link-hover">Privacy Policy</a>
                        <a className="link link-hover">Terms of Service</a>
                        <a className="link link-hover">Cookies</a>
                    </div>

                </div>
            </nav>
        </footer>
    );
};

export default FooterPage;