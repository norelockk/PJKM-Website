<template>
	<div class="my-0 mx-0" style="height: fit-contents; background-color: black;">
		<v-row class="ma-0">
			<v-col cols="1" class="ma-0 pa-0">
				<RouterLink to="/">
					<v-img src="src/assets/logos/PJKT-03.png" height="75" class="pa-0 ma-0" />
				</RouterLink>
			</v-col>
			<v-col cols="4" class="ma-0 pa-0">
				<v-row class="mx-0 mb-0 mt-7 py-0">
					<v-col cols="2" v-for="link in links.navlinks" class="text-right mono text-h6 my-0 py-0" style="color:white">
						<v-menu transition="slide-y=transition" openOnHover v-if="link.subLocs">
							<template v-slot:activator="{ props }">
								<div v-bind="props">
									{{ link.name }}
									<svg version="1.1" viewBox="0 0 8 5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="8px" height="5px" class="chevron" v-if="link.subLocs" :class="props['aria-expanded'] == 'true' ? 'chevron--flip' : ''">
										<g class="chevron__group">
											<path d="M1.30834787,0.121426937 L4.87569247,3.68780701 C5.04143584,3.8541036 5.04143584,4.11557261 4.87569247,4.2818692 L4.2807853,4.87693487 C4.20364253,4.95546204 4.09599241,5 3.98333171,5 C3.87067101,5 3.76302089,4.95546204 3.68587812,4.87693487 L0.122730401,1.30754434 C-0.0409101338,1.14044787 -0.0409101338,0.880578628 0.122730401,0.713482155 L0.718686793,0.119419971 C0.79596299,0.0427616956 0.902628913,-0.000376468522 1.01396541,2.47569236e-06 C1.1253019,0.000381419907 1.2316441,0.0442445771 1.30834787,0.121426937 L1.30834787,0.121426937 Z" class="chevron__box chevron__box--left" />
											<path d="M3.12493976,3.68899585 L6.68683713,0.123119938 C6.76404711,0.0445502117 6.8717041,3.56458529e-15 6.98436032,0 C7.09701655,-3.56458529e-15 7.20467353,0.0445502117 7.28188351,0.123119938 L7.87588228,0.717098143 C8.04137257,0.883371226 8.04137257,1.14480327 7.87588228,1.31107635 L4.31398491,4.87695226 C4.23695994,4.95546834 4.1294742,5 4.01698553,5 C3.90449685,5 3.79701111,4.95546834 3.71998614,4.87695226 L3.12493976,4.28197072 C2.95998402,4.11649361 2.95814736,3.85659624 3.12074929,3.68899585 L3.12493976,3.68899585 Z" class="chevron__box chevron__box--right" />
										</g>
									</svg>
								</div>
							</template>
							<v-list>
								<v-list-item v-for="(sublink, i) in link.subLocs" :key="i">
									<v-list-item-title>
										<RouterLink :to="sublink.url">{{ sublink.name }} </RouterLink>
									</v-list-item-title>
								</v-list-item>
							</v-list>
						</v-menu>
						<RouterLink :to="link.url" v-else class="mr-2">{{ link.name }}</RouterLink>
					</v-col>
				</v-row>
			</v-col>
			<v-col cols="1"></v-col>
			<v-col cols="3"></v-col>
			<v-col cols="1"></v-col>
			<v-col cols="2">
				<v-row justify="end" class="mr-5">
					<v-col cols="1" v-for="(social) in links.socials" class="mr-5">
						<v-icon icon="fa-discord"></v-icon>
						<a :href="social.url" target="_blank"><FontAwesomeIcon :icon="'fa-brands ' + social.logo" inverse size="xl" /></a>
					</v-col>
				</v-row>
			</v-col>
		</v-row>
	</div>
</template>

<style scoped>
.header {
	width: 100vw;
}

.chevron {
	display: inline-block;
	vertical-align: middle;
	fill: white;
}

.chevron {
	width: 18px;
	height: 15px;
}

.chevron__group {
	transform: translateY(0);
	transition: transform 0.1s linear;
}

.chevron__box--left,
.chevron__box--right {
	transform: rotate(0) translateY(0);
	transition: transform 0.1s linear;
}

.chevron__box--left {
	transform-origin: 1px 1px;
}

.chevron__box--right {
	transform-origin: 7px 1px;
}

.chevron--flip .chevron__box--left {
	transform: rotate(-90deg) translateY(0);
}

.chevron--flip .chevron__box--right {
	transform: rotate(90deg) translateY(0);
}

.chevron--flip .chevron__group {
	transform: translateY(3px);
}
</style>

<script setup lang="ts">
import router from "@/router"
import { onMounted } from 'vue';
let links = {
	navlinks: {
		events: {
			name: "EVENTS",
			url: "/events",
			subLocs: {
				first: {
					name: "Projekt: Community 2023",
					url: '/events/pjktcom2023'
				}
			}
		},
		new: {
			name: "EVENTS",
			url: "/events",
			subLocs: {
				first: {
					name: "Projekt: Community 2023",
					url: '/events/pjktcom2023'
				}
			}
		},
		something: {
			name: "EVENTS",
			url: "/events",
			subLocs: {
				first: {
					name: "Projekt: Community 2023",
					url: '/events/pjktcom2023'
				}
			}
		},

	},
	socials: {
		discord: {
			logo: "fa-discord",
			url: "https://discord.gg/PJKT"
		},
		youtube: {
			logo: "fa-youtube",
			url: "https://youtube.com/PJKTCOM"
		},
		twitter: {
			logo: "fa-twitter",
			url: "https://twitter.com/PJKTCOM"
		},

	}
}

onMounted(() => {
	console.log(links)
})

function redirect(url: string) {
	router.push(url)
}
</script>