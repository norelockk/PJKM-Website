<template>
	<v-footer theme="dark">
		<column-layout class="my-8">
			<div>
				<v-row justify="center">
					<v-col cols="1" sm="3" md="3">
						<v-img src="src/assets/Logos/PJKT-01.png" width="180px" class="ma-4"></v-img>
					</v-col>
					<v-col cols="1" sm="3" md="3" v-for="item, index in footerLinkGroups" :key="index">
						<v-list theme="dark">
							<v-list-item>
								<v-list-item-title>{{ item.title }}</v-list-item-title>
							</v-list-item>
							<v-divider></v-divider>
							<v-list-item v-for="footerLink, index in item.footerLinks" :key="index"
								:to="footerLink.destination">
								<v-list-item-title>{{ footerLink.title }}</v-list-item-title>
							</v-list-item>
						</v-list>
					</v-col>
				</v-row>
				<v-row class="text-center">
					<v-col cols="12">Test App</v-col>
					<v-col cols="12">
						<v-btn v-for="icon, index in icons" :key="index" :icon="icon" color="primary">
						</v-btn>
					</v-col>
					<v-col cols="12">&copy; 2023 Projekt: Community</v-col>
				</v-row>
			</div>
		</column-layout>
	</v-footer>
</template>

<style scoped>

</style>



<script setup lang="ts">
import ColumnLayout from "./generics/ColumnLayout.vue"

class FooterLink {
	title: string;
	icon: string;
	destination: string;

	constructor(title: string, icon: string, destination: string) {
		this.title = title;
		this.icon = icon;
		this.destination = destination;
	}
}

class FooterLinkGroup {
	title: string;
	footerLinks: FooterLink[];

	constructor(title: string, links: FooterLink[]) {
		this.title = title;
		this.footerLinks = links;
	}
}


const icons: string[] = ["mdi-facebook", "mdi-twitter", "mdi-instagram", "mdi-youtube"];

const footerLinkGroups: FooterLinkGroup[] = [
	new FooterLinkGroup("Larry", [
		new FooterLink("Team1", "", ""),
		new FooterLink("Team2", "", "/about"),
		new FooterLink("Team3", "", "")
	]),
	new FooterLinkGroup("", [
		new FooterLink("Home", "", ""),
		new FooterLink("About", "", "/about"),
		new FooterLink("Events", "", "")
	]),
	new FooterLinkGroup("", [
		new FooterLink("Filler", "mdi-view-dashboard", ""),
		new FooterLink("Filler1", "mdi-account-box", "/about"),
		new FooterLink("Filler2", "mdi-cog", "")
	])
];


</script>

