import React from 'react';
import './Statistics.css'; // Import your CSS file for styling

const Statistics = ({ statistics }) => {
    return (
        <div className="statistics-container">
            <h2 className="statistics-title">Statistics {statistics.month}</h2>
            <div className="statistics-item">
                <p className="statistics-label">Total Sale Amount:</p>
                <p className="statistics-value">{statistics.totalSaleAmount}</p>
            </div>
            <div className="statistics-item">
                <p className="statistics-label">Total Sold Items:</p>
                <p className="statistics-value">{statistics.totalSoldItems}</p>
            </div>
            <div className="statistics-item">
                <p className="statistics-label">Total Not Sold Items:</p>
                <p className="statistics-value">{statistics.totalNotSoldItems}</p>
            </div>
        </div>
    );
};

export default Statistics;
