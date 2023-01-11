<template >
	<slot></slot>
</template>

<script>
export default {
	name: "rpage",
	props: [
		"pageName"
	],
	created() {
		document.title = `PJKTCOM | ${this.pageName}`
	},
	methods: {}
}
</script>