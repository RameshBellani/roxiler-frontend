// BarChart.js
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChartComponent = ({ data }) => {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        if (data && data.length > 0) {
            const formattedData = data.map((item, index) => ({
                label: `Range ${index + 1}`,
                priceRange: item.priceRange,
                count: item.count
            }));
            setChartData(formattedData);
        }
    }, [data]);

    return (
        <div style={{ width: '100%', height: 400 }}>
            <h2>Bar Chart</h2>
            <ResponsiveContainer>
                <BarChart data={chartData}>
                    <XAxis dataKey="label" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="count" fill="#8884d8" name="Number of Items" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarChartComponent;
