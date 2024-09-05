<template>
    <LoadingComponent v-if="isLoading" />
    <div v-else class="bg-fixed bg-center bg-cover h-screen py-24 px-5 grid items-center"
        :style="`background-image: linear-gradient(to right, black, rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/original/${movies.backdrop_path});`">
        <div class="p-5">
            <div class="text-white w-12/12 md:w-4/12">
                <p class="text-3xl font-bold whitespace-normal">{{ movies.title }}</p>
                <div class="flex space-x-2 pb-2 items-center text-gray-500">
                    <p class="text-sm text-gray-400">{{ getYearFromDate(movies.release_date) }}</p>
                    <p class="text-green-500 text-xs rounded-full py-1 px-2">
                        {{ movies.vote_average }}</p>
                    <p class="text-sm text-gray-400">|</p>
                    <p class="text-sm text-gray-400">{{ movies.runtime }} min</p>
                </div>
                <p class="line-clamp-4 text-lg font-bold pt-2">{{ movies.tagline }}</p>
                <p class="text-sm line-clamp-6">{{ movies.overview }}</p>
                <div class="flex justify-start space-x-3 text-sm text-white py-5 items-center">
                    <ButtonComponent title="Trailer" :icon="PlayIcon" bgColor="bg-red-600"
                        hoverColor="hover:bg-red-500" />
                    <ButtonComponent :title="isFavorite ? 'Remover' : 'Salvar'" :icon="TrashIcon"
                        bgColor="bg-transparent" borderColor="border-white" hoverColor="hover:bg-transparent"
                        @click="toggleFavorite" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getMovieById } from '@/services/request/getAll';
import { useToast } from "vue-toastification";
import ButtonComponent from '../../components/Button/ButtonComponent.vue';
import { PlayIcon, TrashIcon } from '@heroicons/vue/solid';
import LoadingComponent from '../../components/Loading/LoadingComponent.vue';

const toast = useToast();

export default {
    props: {
        movie: Object
    },
    components: {
        ButtonComponent,
        LoadingComponent
    },
    data() {
        return {
            movies: {},
            isLoading: true,
            isFavorite: false
        };
    },
    async created() {
        const id = this.$route.params.id;
        try {
            this.movies = await getMovieById(id);
            this.isLoading = false;
            this.checkIfFavorite();
        } catch (error) {
            toast.error("Erro ao carregar detalhes do filme ou série!");
            this.isLoading = false;
        }
    },
    methods: {
        getYearFromDate(dateString) {
            const date = new Date(dateString);
            return date.getFullYear();
        },
        toggleFavorite() {
            const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            const index = favorites.findIndex(fav => fav.id === this.movies.id);

            if (index === -1) {
                favorites.push(this.movies);
                localStorage.setItem('favorites', JSON.stringify(favorites));
                this.isFavorite = true;
                toast.success("Filme adicionado aos favoritos!");
            } else {
                favorites.splice(index, 1);
                localStorage.setItem('favorites', JSON.stringify(favorites));
                this.isFavorite = false;
                toast.success("Filme removido dos favoritos!");
            }
        },
        checkIfFavorite() {
            const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            this.isFavorite = favorites.some(fav => fav.id === this.movies.id);
        }
    }
}
</script>
