<template>
	<div class="counter-component">
		<div class="counter-btn" @click="min"> - </div>
		<div class="counter-show">
			<input type="text" v-model="number">
		</div>
		<div class="counter-btn" @click="max"> + </div>
	</div>
</template>

<script>

export default {
	name: "counter",
	data() {
		return {
			number: 1
		}
	},
	props: {
		max: {
			type:Number,
			default:5
		},
		min: {
			type:Number,
			default:1
		}
	},
	methods: {
		min() {
			if (this.number <= this.min){
				return;
			}
			this.number--;
		},
		max() {
			if (this.number >= this.max) {
				return;
			}
			this.number++;
		}
	}
}
	
</script>

<style scoped>
.counter-component {
	position: relative;
	display: inline-block;
	overflow: hidden;
	vertical-align: middle;
}
.counter-show {
	float: left;
}
.counter-show input {
	border: none;
	border-top: 1px solid #e3e3e3;
	border-bottom: 1px solid #e3e3e3;
	height: 23px;
	line-height: 23px;
	width: 30px;
	outline: none;
	text-align: 4px;
}
.counter-btn {
	border: 1px solid #e3e3e3;
	float: left;
	height: 25px;
	line-height: 25px;
	width: 25px;
	text-align: center;
	cursor: pointer;
}
.counter-btn:hover {
	border-color: #4fc08d;
	background: #4fc08d;
	color: #fff;
}
</style>