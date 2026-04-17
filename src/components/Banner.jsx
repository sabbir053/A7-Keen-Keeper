
const BannerPage = async () => {
    const res = await fetch('https://a7-keen-keeper-three.vercel.app/friends.json/');
    const friends = await res.json();

    return (
        <div className='py-10 container mx-auto px-3'>
            <h1 className='text-5xl text-black font-bold text-center'>Friends to keep close in your life</h1>
            <p className='text-center font-light text-gray-500 pt-4'>Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />relationships that matter most.</p>
            <div className='text-center pt-4'>
                <button className='btn bg-green-800 text-white font-bold'>+ Add Friend</button>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 py-5'>
                <div className="border border-gray-100 py-10 bg-white shadow text-center rounded-md p-5">
                    <h3 className='font-bold text-5xl text-green-800'>{friends.length}</h3>
                    <p className='text-gray-500 text-lg'>Total Friends</p>
                </div>
                <div className="border border-gray-100 py-10 bg-white shadow text-center rounded-md p-5">
                    <h3 className='font-bold text-5xl text-green-800'>{friends.filter(f => f.status === 'on-track').length}</h3>
                    <p className='text-gray-500 text-lg'>On Track</p>
                </div>
                <div className="border border-gray-100 py-10 bg-white shadow text-center rounded-md p-5">
                    <h3 className='font-bold text-5xl text-green-800'>{friends.filter(f => f.status === 'overdue').length}</h3>
                    <p className='text-gray-500 text-lg'>Need Attention</p>
                </div>
                <div className="border border-gray-100 py-10 bg-white shadow text-center rounded-md p-5">
                    <h3 className='font-bold text-5xl text-green-800'>{friends.length}</h3>
                    <p className='text-gray-500 text-lg'>Interaction This Month</p>
                </div>
            </div>
            <hr className='text-gray-200 mt-10'/>
        </div>
    );
};

export default BannerPage;