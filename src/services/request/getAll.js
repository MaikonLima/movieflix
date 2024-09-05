import { ApiTMDB } from "../api";

export const getMoviesTrend = async (query, page) => {
    try {
        const response = await ApiTMDB.get(`/trending/all/day`, {
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
        const response = await ApiTMDB.get(`/discover/tv`, {
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
        const response = await ApiTMDB.get(`/discover/movie`, {
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
