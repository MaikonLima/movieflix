<template>
    <div class="flex items-center justify-center min-h-screen">
        <div class="relative">
            <div class="w-16 h-16 border-4 border-t-4 border-white border-solid rounded-full animate-spin"></div>
            <span class="absolute inset-0 flex items-center justify-center text-white text-xl font-bold top-20">
                Loading...
            </span>
        </div>
    </div>
    <div class="loader"></div>
</template>

<script>
export default {
    name: 'LoadingComponent',
};
</script>

<style scoped>
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
}

.animate-spin {
    animation: spin 1s linear infinite;
}
</style>
