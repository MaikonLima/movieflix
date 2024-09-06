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
        console.error('Error ao carregar filmes:', error);
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
        console.error('Error ao carregar series:', error);
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
        console.error('Error ao carregar filmes:', error);
        throw error;
    }
};

export const getMovieById = async (id) => {
    try {
        const response = await ApiTMDB.get(`/movie/${id}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao carregar detalhes:', error);
        throw error;
    }
};

export const getSeriesById = async (id) => {
    try {
        const response = await ApiTMDB.get(`/tv/${id}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao carregar detalhes:', error);
        throw error;
    }
};


export const getMovieTrailer = async (movieId) => {
    try {
      const response = await ApiTMDB.get(`/movie/${movieId}/videos`);
      const trailer = response.data.results.find(video => video.type === 'Trailer' && video.site === 'YouTube');
  
      return trailer ? `${import.meta.env.VITE_YOUTUBE_URL}/embed/${trailer.key}` : null;
    } catch (error) {
      console.error('Erro ao buscar o trailer:', error);
      throw error;
    }
  };