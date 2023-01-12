<template>
	<RouterPage pageName="Component Testing" >
		<Calendar />
	</RouterPage>
</template>

<style scoped></style>

<script>
import Calendar from '@/components/Calendar.vue'
import RouterPage from '@/components/RouterPage.vue'
export default {
	name: 'Component',
	components: { Calendar, RouterPage },
}
</script>
