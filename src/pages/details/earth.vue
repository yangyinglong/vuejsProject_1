<template>
	<div>
		{{ getTotalPrice }}
	</div>
</template>
<script>

export default {
	name: "earth",
	data() {
		return {

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