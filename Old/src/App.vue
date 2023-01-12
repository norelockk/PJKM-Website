<template>
	<v-app>
		<v-main>
			<router-view />
		</v-main>
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

<script>
export default {
	name: 'App',
	mounted() {
		//CLEAR
		console.clear()
		//this.ConsoleWarn()
	},
	data: () => ({
		warnAmmount: 4,
	}),
	methods: {
		ConsoleWarn() {
			this.warnAmmount--
			console.group("PJKT")
			console.log("%c Know what you're doing here? Apply to join our IT Team at https://discord.gg/PJKT", 'font-size: 25px; color: #00C6FF')
			console.groupEnd()
			if (this.warnAmmount > 0) {
				setTimeout(this.ConsoleWarn, 2000)
			}
		},
	},
}
</script>
