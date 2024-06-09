import React, { useEffect, useState } from 'react';
import {
    fetchCombinedData
} from './services/api';
import TransactionsTable from './components/TransactionsTable';
import Statistics from './components/Statistics';
import BarChart from './components/BarChart';

const App = () => {
    const [month, setMonth] = useState('04');
    const [data, setData] = useState(null);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetchCombinedData(month, search, 1, 10);
                setData(response);
            } catch (error) {
                console.error('Error fetching combined data:', error.message);
            }
        };

        getData();
    }, [month, search]);

    return (
        <div className="App">
            <h1>Transactions Dash</h1>
            <label htmlFor="month-select">Select Month:</label>
            <select
                id="month-select"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
            >
                <option value="01">January</option>
                <option value="02">February</option>
                <option value="03">March</option>
                <option value="04">April</option>
                <option value="05">May</option>
                <option value="06">June</option>
                <option value="07">July</option>
                <option value="08">August</option>
                <option value="09">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
            </select>

            {data ? (
                <>
                    <Statistics statistics={data.statistics} />
                    <BarChart barChartData={data.barChart} />
                    <TransactionsTable transactions={data.transactions} />
                </>
            ) : (
                <p>Loading...</p>
            )}

            <label htmlFor="search-input">Search:</label>
            <input
                type="text"
                id="search-input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
};

export default App;
