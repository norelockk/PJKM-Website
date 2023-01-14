<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
</script>

<template>
	<!-- <Header></Header> -->
	<RouterView />
</template>

<style>
@font-face {
	font-family: 'Share Tech Mono';
	font-weight: 400;
	font-style: normal;
	font-display: auto;
	unicode-range: U+000-5FF;
	src: url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');
}

.mono {
	font-family: 'Share Tech Mono', monospace !important;
}
</style>