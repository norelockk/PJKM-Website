<template>
	<RouterPage pageName="Home">
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
							<v-row class="ma-0 text-h2" style="height: 100%; width: 100%" justify="center" align="center">
								<strong>Coming Soon</strong>
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

// Components

export default defineComponent({
	name: 'Home',

	components: {
		RouterPage,
	},
})
</script>
