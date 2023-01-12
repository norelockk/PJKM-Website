<template>
	<RouterPage pageName="Home">
		<Calendar></Calendar>
		<div class="fullPage">
			<v-row style="height: 100%">
				<v-col class="my-auto">
					<v-row>
						<v-img
							:src="require('@/assets/images/Logos/PJKT-05(fade).png')"
							max-width="50%"
							max-height="75%"
							class="mx-auto my-auto imgDark"
						>
							<v-row
								id="comingsoon"
								class="mono ma-0"
								style="height: 100%; width: 100%"
								justify="center"
								align="center"
							>
								<h1><strong>Coming Soon</strong></h1>
							</v-row>
						</v-img>
					</v-row>
				</v-col>
			</v-row>
		</div>
	</RouterPage>
</template>

<style scoped>
.fullPage {
	width: 100vw;
	height: 100vh;
}
</style>

<script>
import { defineComponent } from 'vue'
import RouterPage from '@/components/RouterPage.vue'
import server from '@/ServerAccess/Server.js'
import Calendar from '@/components/Calendar.vue'

// Components

export default defineComponent({
	name: 'Home',
	mounted() {	},

	components: {
		RouterPage,
		Calendar,
	},
	data: () => ({}),
	methods: {
		
	},
})
</script>
