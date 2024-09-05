
import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home/Home.vue';
import Details from '@/pages/Details/Details.vue';
import Movies from '@/pages/Movies/Movies.vue';
import Series from '@/pages/Series/Series.vue';
import Favorites from '@/pages/Favorites/Favorites.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/movies',
        name: 'Movies',
        component: Movies,
    },
    {
        path: '/series',
        name: 'Series',
        component: Series,
    },
    {
        path: '/details/:id',
        name: 'Details',
        component: Details,
        props: true,
    },
    {
        path: '/watchlist',
        name: 'Favorites',
        component: Favorites
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
