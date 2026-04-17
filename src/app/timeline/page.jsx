"use client";

import { useActivity } from "@/context/ActivityContext";
import { LuPhoneCall } from "react-icons/lu";
import { BiCommentDots } from "react-icons/bi";
import { IoVideocamOutline } from "react-icons/io5";
import { useState } from "react";

const TimelinePage = () => {
    const { activities } = useActivity();
    const [filter, setFilter] = useState("all");
    const [sortOrder, setSortOrder] = useState("newest");
    const [searchQuery, setSearchQuery] = useState("");

    const activityConfig = {
        call: {
            icon: <LuPhoneCall className="text-2xl text-green-600" />,
            label: "Meetup",
        },
        text: {
            icon: <BiCommentDots className="text-2xl text-blue-600" />,
            label: "Text",
        },
        video: {
            icon: <IoVideocamOutline className="text-2xl text-purple-600" />,
            label: "Video",
        },
    };

    const processedActivities = activities
        .filter((item) => {
            const matchesCategory = filter === "all" || item.type === filter;
            const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        })
        .sort((a, b) => {
            const dateA = new Date(a.time);
            const dateB = new Date(b.time);
            return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
        });

    return (
        <div className="p-6 bg-slate-50 min-h-screen">
            <div className="container mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-slate-800">Timeline</h2>

                <div className="mb-6 flex flex-wrap gap-4 items-center justify-center md:justify-start">

                    <select
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                        className="px-4 py-2 border border-gray-200 rounded-lg bg-white cursor-pointer shadow-md"
                    >
                        <option value="all">All Activities</option>
                        <option value="call">Call</option>
                        <option value="text">Text</option>
                        <option value="video">Video</option>
                    </select>

                    <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        className="px-4 py-2 border border-gray-200 rounded-lg bg-white cursor-pointer shadow-md"
                    >
                        <option value="newest">Newest First</option>
                        <option value="oldest">Oldest First</option>
                    </select>

                    <div className="flex-1 min-w-62.5">
                        <input
                            type="text"
                            placeholder="Search by friend's name..."
                            value={searchQuery}
                    
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg bg-white shadow-md"
                        />
                    </div>
                </div>

                {processedActivities.length === 0 ? (
                    <div className="text-center mt-10">
                        <p className="text-gray-400">
                            {searchQuery
                                ? `No activities found for "${searchQuery}"`
                                : `No ${filter !== "all" ? filter : ""} activity yet...`}
                        </p>
                    </div>
                ) : (
                    processedActivities.map((item, index) => {
                        const config = activityConfig[item.type];

                        return (
                            <div
                                key={index}
                                className="bg-white p-4 rounded-xl shadow-sm mb-4 flex items-center gap-4 border border-slate-100 transition-all hover:shadow-md"
                            >
                                <div className="bg-slate-100 p-3 rounded-full">
                                    {config?.icon}
                                </div>

                                <div className="space-y-1">
                                    <p className="text-xl md:text-2xl space-x-2 text-gray-800">
                                        <span className="text-green-950 font-bold">
                                            {config?.label}
                                        </span>
                                        <span className="pr-2 text-slate-400 font-normal">with</span>
                                        <span className="font-semibold">{item.name}</span>
                                    </p>
                                    <p className="text-gray-500 text-sm md:text-lg">
                                        {new Date(item.time).toLocaleString()}
                                    </p>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default TimelinePage;