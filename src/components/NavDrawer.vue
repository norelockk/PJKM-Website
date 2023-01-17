<script setup lang="ts">

// This is how to define a prop (a piece of data passed into the element like a parameter)
const dave = defineProps<{
	drawer: boolean;
}>();

// This is how to invoke an event (which is how to send data up to the parent element)
const emit = defineEmits(['navDrawerClose'])

let items = [
	{ title: "Home", icon: "mdi-view-dashboard", destination: "/" },
	{ title: "About", icon: "mdi-account-box", destination: "about" },
	{ title: "Settings", icon: "mdi-cog", destination: "" },
];

</script>

<template>
	<v-navigation-drawer :model-value="drawer" color="primary">
		<v-toolbar density="compact" theme="dark">
			<v-toolbar-title>My Nav Drawer</v-toolbar-title>
		</v-toolbar>
		<v-divider></v-divider>
		<v-btn class="close-button mx-3 my-2" @click="emit('navDrawerClose')">
			<v-icon> mdi-close-thick </v-icon>
		</v-btn>
		<v-list density="default" nav>
			<v-list-item v-for="item, index in items" :key="index" :prepend-icon="item.icon" link
				v-bind:to="item.destination" :value="item.destination">
				<v-list-item-title>
					{{ item.title }}
				</v-list-item-title>
			</v-list-item>
		</v-list>
	</v-navigation-drawer>
</template>

<style scoped>
/* The 'scoped' keyword constrains this styling to only this file */
	
</style>
