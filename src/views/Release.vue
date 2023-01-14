<script setup lang="ts">
import { onMounted } from 'vue'

function PlayVideo() {
	var videoPlayer = document.getElementById('VideoPlayer')
	videoPlayer?.classList.add("show")
}
</script>

<template>
	<v-row justify="center" align="center" style="height: 100vh">
		<v-col style="width: fit-content">
			<v-fade-transition mode="out-in">
				<v-img src="src/assets/logos/PJKT-05(fade).png" height="700" class="text-center">
					<div style="height: 100%; width: 100%; flex-direction: column;" class="d-flex justify-center align-center text-h1 mono" justify="center" align="center">
						<v-row class="my-0">
							<v-col align-self="end">
								<strong>Coming June 2023</strong>
							</v-col>
						</v-row>
						<v-row class="my-0">
							<v-col align-self="start">
								<a href="https://youtube.com" target="_blank"><v-btn>
										Watch our announcement video
									</v-btn>
								</a>
							</v-col>
						</v-row>
					</div>
				</v-img>
			</v-fade-transition>
		</v-col>
	</v-row>

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

.hide {
	display: none;
}

.show {
	display: block;
}
</style>