import { Suspense } from "react";
import FriendsCards from "./FriendsCards";

const FriendsPage = async () => {
    const res = await fetch('http://localhost:3000/friends.json');
    const friends = await res.json();
    console.log(friends);
    return (
        <div className="container mx-auto gap-5">
            <h2>This is the Friends page</h2>
            <Suspense fallback={<div>Loading...</div>}>
                <FriendsCards friends={friends}/>
            </Suspense>
        </div>
    );
};

export default FriendsPage;