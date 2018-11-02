<template>
	<div class="sales-board">
		<div class="sales-board-intro">
			<h2>流量分析</h2>
			<p>是指在获得网站访问量最基本数据的情况下对有关数据进行统计、分析，送终发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并未进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的。</p>			
		</div>
		<div class="sales-board-form">
			<div class="sales-board-line">
				<div class="sales-board-line-left">
					购买数量：
				</div>
				<div class="sales-board-line-right">
					<Counter @counter="getGoodInfo('counter', $event)" :max="Counter.max" :min="Counter.min"/>
				</div>
			</div>

			<div class="sales-board-line">
				<div class="sales-board-line-left">
					产品类型：
				</div>
				<div class="sales-board-line-right">
					<DownMenu @downmenu="getGoodInfo('downmenu', $event)" :DownDate="DownMenu"/>
				</div>
			</div>

			<div class="sales-board-line">
				<div class="sales-board-line-left">
					有效时间：
				</div>
				<div class="sales-board-line-right">
					<Radios @radios="getGoodInfo('radios', $event)" />
				</div>
			</div>

			<div class="sales-board-line">
				<div class="sales-board-line-left">
					总价：
				</div>
				<div class="sales-board-line-right">
					{{ totalprice }}元
				</div>
			</div>

			<div class="sales-board-line">
				<div class="sales-board-line-left">
				</div>
				<div class="sales-board-line-right">
					<a class="button" href="">立即购买</a>
				</div>
			</div>
			
		</div>
		<div class="sales-board-des">
			<h2>产品说明</h2>
			<p>在获得网站访问量最基本数据的情况下对有关数据进行统计、分析，送终发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能</p>
			<h3>用户行为指标</h3>
			<ul>
				<li>用户行为指标主要反映了用户是如何来找网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：</li>
				<li>用户在网站的停留时间</li>
				<li>用户来源网站</li>
				<li>用户所使用的搜索引擎及其关键字</li>
				<li>在不同时段的用户访问量情况等</li>
			</ul>

			<h3>浏览网站方式</h3>
			<ul>
				<li>用户上网设备类型</li>
				<li>用户浏览器的名称和版本</li>
				<li>访问者电脑分辨率显示模式/li>
				<li>用户所使用的操作系统名称和版本</li>
				<li>用户所在地理区域分布情况等</li>
			</ul>	
		</div>
	</div>
</template>
<script>

import Counter from "./components/Counter"
import DownMenu from "./components/DownMenu"
import Radios from "./components/Radios"

export default {
	name: "car",
	data() {
		return {
			counter: 1,
			downmenu: 1,
			radios: 1,
			Counter: {
				max: 10,
				min: 2 
			},
			DownMenu: [
				{
					name: "初级版",
					value: 1
				},
				{
					name: "中极版",
					value: 2
				},
				{
					name: "高级版",
					value: 3
				}
			]
		}
	},
	components: {
		Counter,
		DownMenu,
		Radios
	},
	methods: {
		getCounterNum(data) {
			console.log(data)
		},
		getDownMenu(data) {
			console.log(data)
		},
		getRadios(data) {
			console.log(data)
		},
		getGoodInfo(key, value) {
			// console.log(key, value)
			/**
			 * this 是当前组件
			 */
			this[key] = value
			
		}
	},
	computed: {
		totalprice: function(){
			var readyData = {
				"counter": this.counter,
				"downmenu": this.downmenu,
				"radios": this.radios
			}
			console.log(readyData)
			return readyData.counter *readyData.downmenu * 2 * readyData.radios * 10			
		}
	}
	
}
</script>

<style scoped>


.buy-dialog-title {
	font-size: 16px;
	font-weight: bold;
}
.buy-dialog-btn {
	margin-top: 20px;
}
.buy-dialog-table {
	width: 100%;
	margin-bottom: 20px;
}
.buy-dialog-table td,
.buy-dialog-table th {
	border: 1px solid #e3e3e3;
	text-align: center;
	padding: 5px 0;
	list-style-type: none;
}
.buy-dialog-table th {
	background: #4fc08d;
	color: #fff;
	border: 1px solid #4fc08d;
	list-style-type: none;
}
.sales-board-des li{
	list-style-type: none;
}
.button {
	background: #4fc08d;
	color: #fff;
	/*display: inline-block;*/
	padding: 10px 20px;
	cursor: pointer;
	text-decoration:none;
}
</style>