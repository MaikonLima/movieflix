import { ApiTMDB } from "../api";

const API_KEY = '73fa89d4f5be62640fd7fb9a794d4ba6';

export const getMoviesTrend = async (query, page) => {
    try {
        const response = await ApiTMDB.get(`/trending/all/day?api_key=${API_KEY}`, {
            params: {
                query,
                sort_by: "popularity.desc",
                page: page
            }
        });
        return response.data.results;
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error;
    }
};

export const getSeries = async (query, page) => {
    try {
        const response = await ApiTMDB.get(`/discover/tv?api_key=${API_KEY}`, {
            params: {
                query,
                sort_by: "popularity.desc",
                page: page
            }
        });
        return response.data.results;
    } catch (error) {
        console.error('Error fetching series:', error);
        throw error;
    }
};

export const getMovies = async (query, page) => {
    try {
        const response = await ApiTMDB.get(`/discover/movie?api_key=${API_KEY}`, {
            params: {
                query,
                sort_by: "popularity.desc",
                page: page
            }
        });
        return response.data.results;
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error;
    }
};

export const getMovieById = async (id) => {
    try {
        const response = await ApiTMDB.get(`/movie/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching movie details:', error);
        throw error;
    }
};
