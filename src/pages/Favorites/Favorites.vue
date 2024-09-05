<template>
    <section class="px-3 md:px-10 pt-24 pb-12">
        <p class="text-3xl font-bold text-white pt-10 pb-5 text-center">Minha Lista</p>

        <p v-if="favorites.length === 0" class="text-base font-bold text-gray-500 text-center">
            Sua lista está vazia :(
        </p>

        <div v-else class="grid grid-cols-12 justify-items-center items-center gap-3">
            <div v-for="movie in favorites" :key="movie.id"
                class="group col-span-6 sm:col-span-6 md:col-span-3 lg:col-span-3 xl:col-span-3 transform transition duration-300 ease-in-out hover:bg-gray-800 hover:scale-95 rounded-lg">
                <p @click="removeFromFavorites(movie.id)"
                    class="opacity-100 md:opacity-0 text-red-500 group-hover:opacity-100 absolute right-0 z-20 -mt-2 -mr-2 bg-white rounded-full cursor-pointer transform hover:scale-105">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                        height="1.8rem" width="1.8rem" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M256 48C140.559 48 48 140.559 48 256c0 115.436 92.559 208 208 208 115.435 0 208-92.564 208-208 0-115.441-92.564-208-208-208zm104.002 282.881l-29.12 29.117L256 285.117l-74.881 74.881-29.121-29.117L226.881 256l-74.883-74.881 29.121-29.116L256 226.881l74.881-74.878 29.12 29.116L285.119 256l74.883 74.881z">
                        </path>
                    </svg>
                </p>
                <a :href="`details/${movie.id}`">
                    <div class="relative flex items-center justify-center p-0 md:p-5">
                        <img :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`"
                            class="opacity-100 group-hover:opacity-50 rounded-lg" />
                    </div>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
import { useToast } from "vue-toastification";

const toast = useToast();

export default {
    data() {
        return {
            favorites: []
        };
    },
    created() {
        this.loadFavorites();
    },
    methods: {
        loadFavorites() {
            const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
            this.favorites = storedFavorites;
        },
        removeFromFavorites(movieId) {
            try {
                this.favorites = this.favorites.filter(movie => movie.id !== movieId);
                localStorage.setItem('favorites', JSON.stringify(this.favorites));
                toast.success("Removido da sua lista!");
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>
