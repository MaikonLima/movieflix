<template>
    <LoadingComponent v-if="isLoading" />
    <section class="px-3 md:px-10 pt-24 pb-12">
        <div class="grid grid-cols-12 justify-items-center items-center gap-3">
            <div v-for="movie in series" :key="movie.id"
                class="group col-span-6 sm:col-span-6 md:col-span-3 lg:col-span-3 xl:col-span-3 transform transition duration-300 ease-in-out hover:bg-gray-800 hover:scale-95 rounded-lg">
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
import { getSeries } from '@/services/request/getAll';
import LoadingComponent from '../../components/Loading/LoadingComponent.vue';

export default {
    components: {
        LoadingComponent,
    },
    data() {
        return {
            series: [],
            isLoading: true,
            isFetching: false,
            page: 1,
        };
    },
    async created() {
        this.isLoading = true;
        try {
            await this.loadMoreSeries();
            this.isLoading = false;
        } catch (error) {
            console.error('Error loading series:', error);
            this.isLoading = false;
        }
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        async loadMoreSeries() {
            if (this.isFetching) return;

            this.isFetching = true;
            try {
                const newSeries = await getSeries(this.page);
                this.series = [...this.series, ...newSeries];
                this.page += 1;
            } catch (error) {
                console.error('Error loading more series:', error);
            } finally {
                this.isFetching = false;
            }
        },
        handleScroll() {
            const scrollPosition = window.innerHeight + window.scrollY;
            const threshold = document.body.offsetHeight - 100;

            if (scrollPosition >= threshold) {
                this.loadMoreSeries();
            }
        }
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>