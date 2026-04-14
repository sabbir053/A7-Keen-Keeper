
const FriendsDetailsPage = async({ params }) => {
    const { friendsId } = await params;
    const res = await fetch('http://localhost:3000/friends.json/');
    const allFriends = await res.json();
    const friend = allFriends.find(f => f.id === parseInt(friendsId));
    console.log(friend, 'friend details');

    return (
        <div>
            <h3 className="text-3xl font-bold text-center py-5">Friend Details Page Here</h3>
            <h1>Name: {friend.name}</h1>
            <p>Email: {friend.email}</p>
        </div>
    );
};

export default FriendsDetailsPage;