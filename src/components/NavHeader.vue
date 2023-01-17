<script setup lang="ts">
import ColumnLayout from "./generics/ColumnLayout.vue"

// This is how to invoke an event (which is how to send data up to the parent element)
const emit = defineEmits(['navDrawerOpen']);

// Trigger event
function onButton() {
	emit('navDrawerOpen');
};

</script>

<template>
	<v-toolbar density="compact" color="primary" elevation="3">
		<v-app-bar-nav-icon @click="onButton" class="nav-button"></v-app-bar-nav-icon>
		<column-layout>
			<v-toolbar-title>Projekt: Community</v-toolbar-title>
		</column-layout>
	</v-toolbar>
</template>

<style scoped>

</style>
