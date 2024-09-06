<template>
    <LoadingComponent v-if="isLoading" />
    <div v-else class="bg-fixed bg-center bg-cover h-screen py-24 px-5 grid items-center"
        :style="`background-image: linear-gradient(to right, black, rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/original/${movies.backdrop_path});`">
        <div class="p-5">
            <div class="text-white w-12/12 md:w-4/12">
                <p class="text-3xl font-bold whitespace-normal">{{ movies.title ?? movies.original_name }}</p>
                <div class="flex space-x-2 pb-2 items-center text-gray-500">
                    <p class="text-sm text-gray-400">{{ getYearFromDate(movies.release_date) || getYearFromDate(movies.first_air_date)}}</p>
                    <p class="text-green-500 text-xs font-bold rounded-full py-1 px-2">
                        {{ movies.vote_average }}</p>
                    <p class="text-sm text-gray-400">|</p>
                    <p class="text-sm text-gray-400">{{ movies.runtime ?? 0 }} min</p>
                </div>
                <p class="line-clamp-4 text-lg font-bold pt-2">{{ movies.tagline }}</p>
                <p class="text-sm line-clamp-6">{{ movies.overview }}</p>
                <div class="flex justify-start space-x-3 text-sm text-white py-5 items-center">
                    <ButtonComponent title="Trailer" icon="PlayIcon" bgColor="bg-red-600" hoverColor="hover:bg-red-500"
                        @click="showTrailerModal = true" />
                    <ButtonComponent :title="isFavorite ? 'Remover' : 'Salvar'" icon="HeartIcon"
                        bgColor="bg-transparent" borderColor="border-white" hoverColor="hover:bg-transparent"
                        @click="toggleFavorite" />
                </div>
            </div>
        </div>
    </div>
    <ModalTrailer v-if="showTrailerModal" :show="showTrailerModal" :trailerUrl="trailerUrl"
        @close="showTrailerModal = false" />
</template>

<script>
import { getSeriesById, getMovieById, getMovieTrailer } from '@/services/request/getAll';
import { useToast } from "vue-toastification";
import ButtonComponent from '../../components/Button/ButtonComponent.vue';
import LoadingComponent from '../../components/Loading/LoadingComponent.vue';
import ModalTrailer from '../../components/Modal/ModalTrailer.vue';

const toast = useToast();

export default {
    props: {
        movie: Object
    },
    components: {
        ButtonComponent,
        LoadingComponent,
        ModalTrailer
    },
    data() {
        return {
            movies: {},
            isLoading: true,
            isFavorite: false,
            showTrailerModal: false,
            trailerUrl: '',
            movies: null,
            id: this.$route.params.id
        };
    },
    async created() {
        try {
            const { type } = this.$route.params;
            if (type === 'movies' || type === 'movie') {
                this.movies = await getMovieById(this.id);
            } else if (type === 'series' || type === 'tv') {
                this.movies = await getSeriesById(this.id);
            } else {
                throw new Error("Tipo desconhecido");
            }
            
            this.isLoading = false;
            this.checkIfFavorite();
        } catch (error) {
            toast.error("Erro ao carregar detalhes do filme ou série!");
            this.isLoading = false;
            setTimeout(() => {
                this.$router.go(-1);
            }, 2000)
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
        },
        async fetchTrailer() {
            try {
                this.trailerUrl = await getMovieTrailer(this.id);
            } catch (error) {
                console.error('Erro ao carregar o trailer:', error);
            }
        },
        closeModal() {
            this.showTrailerModal = false;
            this.trailerUrl = '';
        },
    },
    watch: {
        showTrailerModal(newValue) {
            if (newValue) {
                this.fetchTrailer();
            }
        },
    },
}
</script>
