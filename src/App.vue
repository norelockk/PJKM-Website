<script setup lang="ts">
// The 'setup' keyword above is very important, its a special Vue 3 feature that replaces most Vue boilerplate code.
// The 'lang' keyword sets this code block as Typescript.
// Vue 3's Composition API should be used, as appose to the Options API.
// The Composition API is better for Typescript and requires less boilerplate code.

import { RouterLink, RouterView } from "vue-router";
import NavHeader from "@/components/NavHeader.vue";
import NavDrawer from "@/components/NavDrawer.vue";
import DefaultFooter from "@/components/DefaultFooter.vue";
import { reactive } from 'vue'
import { ref } from 'vue'

import Header from './components/Header.vue';

// The trade-off of using the Composition API is that these 'ref' and 'reactive' keywords need to be used to create Vue reactive variables:

// Reactive example
const data = reactive({ drawerOpen: true});
// Ref example
const drawerOpen = ref(false);

// Types can be specified
const drawerOpenTyped = ref<Boolean>(false);

// Ref and Reative are how to make reactive data elements, they are both very similar.
// Ref creates 1 reactive data point.
// Reactive creates a object of data points, meaning its good for creating a group of multiple data points.
// Ref with need .value to be accessed like shown below:
// Reactive will need an object to store the data like shown below:

function toggleNavDrawer() {
	// Reactive:
	data.drawerOpen = !data.drawerOpen;
	// Ref:
	drawerOpen.value = !drawerOpen.value;
}
</script>

<template>
	<v-app>
		<!-- Elements should be kebab case in the HTML like shown, not camel case like NavHeader  -->
		<nav-header @navDrawerOpen="toggleNavDrawer" />
		<nav-drawer :drawer="drawerOpen" @navDrawerClose="toggleNavDrawer" />
		<v-main>
			<router-view/>
		</v-main>
		<default-footer />
	</v-app>
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
