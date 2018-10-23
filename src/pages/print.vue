<template>
	<div>
		<div id="subOutputRank-print">
			打印的内容
		</div>
		<dir>
			<button @click="printContent">打印</button>
		</dir>
	</div>
</template>

<script>
export default {
	name: 'print',
	data() {
		return {

		}
	},
	methods: {
		printContent: function(e) {
		    let subOutputRankPrint = document.getElementById('subOutputRank-print');
		    console.log(subOutputRankPrint.innerHTML);
		    let newContent =subOutputRankPrint.innerHTML;
		    let oldContent = document.body.innerHTML;
		    document.body.innerHTML = newContent;
		    window.print();
		    window.location.reload();
		    document.body.innerHTML = oldContent;
		    return false;
		}
	}
}
</script>

<style scoped>
	
</style>