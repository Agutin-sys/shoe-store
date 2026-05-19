<script setup>


defineProps({
    onClick: Function,
})


</script>
<template>

<div class="flex justify-center mt-5">
    <button class="bg-[#9DD458] text-white py-3 px-4 text-lg rounded-2xl " @click="onClick"> ← Вернуться назад</button>
</div>

</template>