import { defineStore } from 'pinia';

export const useFavoritesStore = defineStore('favorites', {
    state: () => ({
        favorites: []
    }),
    actions: {
        addFavorite(movie) {
            if (!this.favorites.some(fav => fav.id === movie.id)) {
                this.favorites.push(movie);
            }
        },
        removeFavorite(movieId) {
            this.favorites = this.favorites.filter(fav => fav.id !== movieId);
        },
        isFavorite(movieId) {
            return this.favorites.some(fav => fav.id === movieId);
        }
    }
});
