<template>
    <LoadingComponent v-if="isLoading" />
    <section v-else class="px-3 md:px-10 pt-24 pb-12">
        <div class="grid grid-cols-12 justify-items-center items-center gap-3">
            <div v-for="movie in movies" :key="movie.id"
                class="group col-span-6 sm:col-span-6 md:col-span-3 lg:col-span-3 xl:col-span-3 transform transition duration-300 ease-in-out hover:bg-gray-800 hover:scale-95 rounded-lg">
                <a :href="`details/movies/${movie.id}`">
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
import { getMovies } from '@/services/request/getAll';
import LoadingComponent from '../../components/Loading/LoadingComponent.vue';


export default {
    components: {
        LoadingComponent,
    },
    data() {
        return {
            movies: [],
            isLoading: true,
            isFetching: false,
            page: 1,
        };
    },
    async created() {
        this.isLoading = true;
        try {
            await this.loadMoreMovies();
            this.isLoading = false;
        } catch (error) {
            console.error('Error ao carregar filmes:', error);
            this.isLoading = false;
        }
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        async loadMoreMovies() {
            if (this.isFetching) return;

            this.isFetching = true;
            try {
                const newMovies = await getMovies('action', this.page);
                this.movies = [...this.movies, ...newMovies];
                this.page += 1;
            } catch (error) {
                console.error('Error ao carregar filmes:', error);
            } finally {
                this.isFetching = false;
            }
        },
        handleScroll() {
            const scrollPosition = window.innerHeight + window.scrollY;
            const threshold = document.body.offsetHeight - 100;

            if (scrollPosition >= threshold) {
                this.loadMoreMovies();
            }
        }
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>