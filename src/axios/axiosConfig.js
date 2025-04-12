import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://coingeko.burjx.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const get = async (url) => {
  try {
    const resp = await axiosInstance.get(url);
    return resp.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};