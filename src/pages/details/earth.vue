<template>
	<div>
		{{ getTotalPrice }}
		{{ number }}
	</div>
</template>
<script>

export default {
	name: "earth",
	data() {
		return {
			number: sessionStorage.getItem('number'),
		}
	},
	computed:{
		getTotalPrice(){
			return this.$store.getters.getTotalPrice
		}
	}
}
</script>

<style scoped> 
	
</style>