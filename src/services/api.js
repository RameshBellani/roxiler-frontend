import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Fetch transactions with pagination and search
export const fetchTransactions = (month, page, perPage, search) =>
    axios.get(`${API_URL}/transactions`, {
        params: { month, page, perPage, search },
    });

// Fetch statistics for a specific month
export const fetchStatistics = (month) =>
    axios.get(`${API_URL}/statistics`, { params: { month } });

// Fetch bar chart data for a specific month
export const fetchBarChartData = (month) =>
    axios.get(`${API_URL}/bar-chart`, { params: { month } });

// Fetch pie chart data for a specific month
export const fetchPieChartData = (month) =>
    axios.get(`${API_URL}/pie-chart`, { params: { month } });

// Fetch combined data including transactions, statistics, bar chart, and pie chart
export const fetchCombinedData = async (month, search = '', page = 1, perPage = 10) => {
    try {
        const response = await axios.get(`${API_URL}/combined`, {
            params: { month, search, page, perPage }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching combined data:', error.message);
        throw error;
    }
};
