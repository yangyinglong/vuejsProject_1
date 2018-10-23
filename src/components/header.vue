<template>
	<div class="app-head">
		<div class="app-head-inner">
			<router-link to="/"><img src="../assets/logo.png" alt=""></router-link>			
			<span>尚学堂旗下品牌：云数学院|速学院|百战程序员|优效学院线上培训-优效聚名师，学习更有效</span>
			<div class="head-nav">
				<ul class="nav-list">
					<li>
						<Login />
					</li>
					<li class="nav-pile">|</li>
					<li>注册</li>
					<li class="nav-pile">|</li>
					<li>关于</li>
				</ul>
			</div>

		</div>
	</div>
</template>

<script>

import Login from "./user/login"
export default{
	name:"header",
	data(){
		return{

		}
	},
	components: {
		Login
	}
}
</script>
<style scoped>

.app-head {
	background: #363636;
	color: #b2b2b2;
	height: 90px;
	line-height: 90px;
	width: 100%;
}
.app-head-inner {
	width: 1200px;
	margin: 0 auto;
}
.app-head-inner span{
	position: relative;;
	top: -20px;
}
.app-head-inner img {
	width: 50px;
	margin-top: 20px;
}
.head-nav {
	float: right;
}
.head-nav ul {
	overflow: hidden;
}
.head-nav li {
	cursor: pointer;
	float: left;
	list-style: none;
}
.nav-pile {
	padding: 0 10px;
}
.head-logo {
	float: left;
}
</style>