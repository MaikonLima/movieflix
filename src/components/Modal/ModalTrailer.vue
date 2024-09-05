<template>
    <div v-if="show" class="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
        <div class="bg-transparent rounded-lg overflow-hidden w-full max-w-2xl p-10 relative">

            <button @click="close" class="absolute top-2 right-2 text-gray-600 hover:text-gray-800 bg-transparent border-none">
                <svg stroke="currentColor" fill="#FFF" stroke-width="0" viewBox="0 0 512 512" height="1.8rem"
                    width="1.8rem" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M256 48C140.559 48 48 140.559 48 256c0 115.436 92.559 208 208 208 115.435 0 208-92.564 208-208 0-115.441-92.564-208-208-208zm104.002 282.881l-29.12 29.117L256 285.117l-74.881 74.881-29.121-29.117L226.881 256l-74.883-74.881 29.121-29.116L256 226.881l74.881-74.878 29.12 29.116L285.119 256l74.883 74.881z">
                    </path>
                </svg>
            </button>

            <div v-if="trailerUrl" class="video-play">
                <iframe :src="trailerUrl" class="w-full h-full" frameborder="0" allow="autoplay; encrypted-media"
                    allowfullscreen></iframe>
            </div>

            <p v-else class="text-center text-gray-500">Trailer não disponível</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        show: {
            type: Boolean,
            required: true,
        },
        trailerUrl: {
            type: String,
            required: false,
        },
    },
    methods: {
        close() {
            this.$emit('close');
        },
    },
};
</script>

<style scoped>
.video-play {
    height: 400px;
}
</style>