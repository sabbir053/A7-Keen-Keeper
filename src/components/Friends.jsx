import { Suspense } from "react";
import FriendsCards from "./FriendsCards";

const FriendsPage = async () => {
    const res = await fetch('http://localhost:3000/friends.json');
    const friends = await res.json();
    console.log(friends);
    return (
        <div className="container mx-auto gap-5 px-3">
            <h2 className="text-2xl font-bold">Your Friends</h2>
            <Suspense fallback={
                <div className="flex mx-auto w-52  gap-4">
                    <div className="flex items-center gap-4">
                        <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                        <div className="flex flex-col gap-4">
                            <div className="skeleton h-4 w-20"></div>
                            <div className="skeleton h-4 w-28"></div>
                        </div>
                    </div>
                    <div className="skeleton h-32 w-full"></div>
                </div>
            }>
                <FriendsCards friends={friends} />
            </Suspense>
        </div>
    );
};

export default FriendsPage;