<template>
	<div class="ma-4 pa-4">
		<v-card varient="tonal">
			<v-row class="ma-2 pa-2" justify="center">
				<v-col cols="2" v-for="event in events" class="text-center">
					
				</v-col>
			</v-row>
		</v-card>
	</div>
</template>

<style scoped></style>

<script>
import { DefineComponent } from 'vue'
import server from '@/ServerAccess/Server'
export default {
	name: 'Calendar',
	mounted() {
		this.LoadEvents()
		console.log(this.events)
	},
	props: [],
	components: {},
	data: () => ({
		events: [],
	}),
	methods: {
		async LoadEvents() {
			await server
				.GetEvents()
				.then((data) => {
					this.events = data
					console.log(data)
					// data.forEach((event) => {
					// 	this.events.push({
					// 		title: event.title,
					// 		description: event.notes,
					// 		start: event.start_dt,
					// 		end: event.end_dt,
					// 		location: event.location,
					// 		created: event.creation_dt,
					// 		updated: event.update_dt,
					// 		host: event.who,
					// 	})
					// })
				})
				.catch((err) => console.warn(err))
		},

		CheckDetails(e) {
			console.log(e)
			return true
		},
	},
}
</script>
