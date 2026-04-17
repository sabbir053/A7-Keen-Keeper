import { Suspense } from "react";
import FriendsCards from "./FriendsCards";

const FriendsPage = () => {

    return (
        <div className="container mx-auto gap-5 px-3">
            <h2 className="text-2xl text-black font-bold">Your Friends</h2>
            <Suspense fallback={
                <div className="flex flex-col justify-center items-center min-h-75 mt-10">
                    <span className="loading loading-spinner loading-lg text-error"></span>
                    <p className="mt-4 text-gray-500 font-medium">Loading Friends List...</p>
                </div>
            }>
                <FriendsCards />
            </Suspense>
        </div>
    );
};

export default FriendsPage;