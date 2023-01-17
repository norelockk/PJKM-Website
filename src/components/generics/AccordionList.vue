<template>
	<v-card width="100%" class="mx-0" variant="elevated">
		<v-toolbar color="primary" density="compact">
			<v-toolbar-title>{{ title }}</v-toolbar-title>
		</v-toolbar>
		<v-expansion-panels class="pa-2">
			<v-expansion-panel v-for="item, index in items" :key="index">
				<v-expansion-panel-title color="primary" expand-icon="mdi-menu-down">
					{{ item.title }}
				</v-expansion-panel-title>
				<v-expansion-panel-text>
					{{ item.databit }}
				</v-expansion-panel-text>
			</v-expansion-panel>
		</v-expansion-panels>
	</v-card>
</template>

<style scoped>
/* The 'scoped' keyword constrains this styling to only this file */
.pre-wrap {
	white-space: pre-wrap;
}
</style>

<script setup lang="ts">

defineProps<{
	items: AccordionListData[];
	title: string;
}>();
</script>

<script lang="ts">

// This is an example of creating your own datatypes and exporting them for other elements to use
export class AccordionListData {
	// Declare the class's data

	// (I'm just throwing random stuff in here as examples)
	databit: number;
	title: string;
	action: string;
	active: boolean;
	item: {
		title: string;
		image: string;
		content: string;
	};

	// Constructors are called when the object gets initially created (good for setting defaults)
	constructor(dave: number) {
		this.databit = dave;
		this.title = "Larry";
		this.active = false;
		this.action = "mdi-help-circle-outline";
		this.item = {
			title: "Sub Dave",
			image: "placeholder.webp",
			content: "Content Dave"
		}
	}

	// Declare the class's functions
	myFunction(stuff: string) {
		console.log("I Work: " + stuff);
	}
}

</script>