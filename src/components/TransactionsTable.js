// src/components/TransactionsTable.js
import React, { useState, useEffect } from 'react';
import './TransactionTable.css'; // Import the CSS file for styling
import { fetchTransactions } from '../services/api'; // Import API function for fetching transactions

const TransactionsTable = () => {
    const [transactions, setTransactions] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchTransactionsData = async () => {
            try {
                const response = await fetchTransactions('', 1, 10, ''); // Fetch transactions
                setTransactions(response.data.transactions);
            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
        };

        fetchTransactionsData();
    }, []);

    const filteredTransactions = transactions.filter((transaction) =>
        transaction.title.toLowerCase().includes(search.toLowerCase()) ||
        transaction.description.toLowerCase().includes(search.toLowerCase()) ||
        transaction.price.toString().includes(search)
    );

    return (
        <div className="transactions-table-container">
            <h2>Transactions Table</h2>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search transactions"
                className="search-input"
            />
            <table className="transactions-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Sold</th>
                        <th>Date of Sale</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredTransactions.map((transaction) => (
                        <tr key={transaction._id}>
                            <td>{transaction.title}</td>
                            <td>{transaction.description}</td>
                            <td>${transaction.price.toFixed(2)}</td>
                            <td>{transaction.category}</td>
                            <td>{transaction.sold ? 'Yes' : 'No'}</td>
                            <td>{new Date(transaction.dateOfSale).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TransactionsTable;
