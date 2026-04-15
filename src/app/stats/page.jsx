"use client";

import { useActivity } from "@/context/ActivityContext";
import { Pie, PieChart, ResponsiveContainer, Cell, Tooltip, Legend } from 'recharts';

const StatsPage = () => {
    const { activities } = useActivity();

    // Data calculation based on context
    const statsData = [
        { name: 'Calls', value: activities.filter(a => a.type === "call").length, fill: '#10b981' }, // Emerald
        { name: 'Texts', value: activities.filter(a => a.type === "text").length, fill: '#3b82f6' }, // Blue
        { name: 'Videos', value: activities.filter(a => a.type === "video").length, fill: '#8b5cf6' }, // Purple
    ];

    // Filter out items with 0 value to keep the chart clean
    const chartData = statsData.filter(item => item.value > 0);

    return (
        <div className="container mx-auto min-h-screen p-6">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-slate-800 mb-8">Friendship Analytics</h2>

                <div className="border border-gray-300 rounded-lg bg-gray-50 shadow p-10">

                    <div className="justify-center items-center h-100 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={chartData.length > 0 ? chartData : [{ name: 'Empty', value: 1, fill: '#f1f5f9' }]}
                                    innerRadius="80%"
                                    outerRadius="100%"
                                    cornerRadius="50%" // Your requested style
                                    paddingAngle={8}   // Clean gap
                                    dataKey="value"
                                    isAnimationActive={true}
                                >
                                    {chartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.fill} />
                                    ))}
                                </Pie>
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsPage;