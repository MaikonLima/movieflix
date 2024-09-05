<template>
    <button :class="[
        'flex items-center justify-center font-bold w-24 h-12 rounded-lg shadow-md cursor-pointer transform transition duration-200 hover:shadow-2xl hover:scale-95 border-2',
        bgColor,
        borderColor,
        hoverColor,
    ]">
        <component :is="icon" class="h-5 w-5 mr-2" v-if="icon" />
        <span>{{ title }}</span>
    </button>
</template>

<script>
export default {
    name: 'ButtonComponent',
    props: {
        title: {
            type: String,
            required: true,
        },
        icon: {
            type: [Object, String],
            default: null,
        },
        bgColor: {
            type: String,
            default: 'bg-blue-500',
        },
        borderColor: {
            type: String,
            default: 'border-transparent',
        },
        hoverColor: {
            type: String,
            default: 'hover:bg-blue-600',
        },
    },
};
</script>
