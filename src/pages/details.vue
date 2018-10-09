<template>
	<!-- <div class="detail-wrap">
		<div class="detail-left">
			
		</div>
		<div class="detail-right">
			
		</div>
	</div> -->
	<!-- <Table :columns="columns1" :data="data1"></Table> -->
	<Tablee />
	
</template>

<script>

import Tablee from "./tablee"
export default {
	name:"details",
	data(){
		return {
			columns1: [
                    {
                        title: 'Name',
                        key: 'name'
                    },
                    {
                        title: 'Age',
                        key: 'age'
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    }
                ],
                data1: [
                    {
                        name: 'John Brown',
                        age: 18,
                        address: 'New York No. 1 Lake Park',
                        date: '2016-10-03'
                    },
                    {
                        name: 'Jim Green',
                        age: 24,
                        address: 'London No. 1 Lake Park',
                        date: '2016-10-01'
                    },
                    {
                        name: 'Joe Black',
                        age: 30,
                        address: 'Sydney No. 1 Lake Park',
                        date: '2016-10-02'
                    },
                    {
                        name: 'Jon Snow',
                        age: 26,
                        address: 'Ottawa No. 2 Lake Park',
                        date: '2016-10-04'
                    }
                ]
		}
	},
	components: {
		Tablee
	}
}
</script>
<style>

.detail-wrap {
	width: 1200px;
	margin: 0 auto;
	overflow: hidden;
	padding-top: 20px;
}
.detail-left {
	float: left;
	width: 200px;
	text-align: center;
}
.detail-right {
	float: left;
	width: 980px;
	margin-left: 20px;
}
.product-board {
	background: #fff;
	padding: 20px 0;
}
.product-board vl {
	margin-top: 20px;
}
.product-board li {
	text-align: left;
	padding: 10px 15px;
	cursor: pointer;
}
.product-board li.active,
.product-board li.hover {
	background: #4fc08d;
	color: #fff;
}
.product-board li a {
	display: block;
}
.sales-board {
	background: #fff;
}
.sales-board-form {

}
.sales-board-intro h2 {
	font-size: 20px;
	padding: 20px;
}
.sales-board-intro p {
	background: #f7fcff;
	padding: 10px 20px;
	color: #999;
	line-height: 1.8;
}
.sales-board-form {
	padding: 30px 20px;
	font-size: 14px;
}

.sales-board-line {
	clear: both;
	padding-bottom: 20px;
}
.sales-board-line-left {
	display: inline-block;
	width: 100%;
}
.sales-board-line-right	{
	display: inline-block;
	width: 75%;
}
.sales-board-des {
	border-top: 20px solid #f0f2f5;
	padding: 15px 20px;
}
.sales-board-des p {
	line-height: 1.6;
}
.sales-board-des h2 {
	font-size: 20px;
	padding-bottom: 15px;
}
.sales-board-des h3 {
	font-size: 18px;
	font-weight: bold;
	padding: 20px 0 10px 0;
}
.sales-board-des li {
	padding: 5px 0;
}
.sales-board-table {
	width: 100%;
	margin-top: 20px;
}
.sales-board-table th {
	background: #4fc08d;
	color: #fff;
}
.sales-board-table td {
	border: 1px solid #f0f2f5;
	padding: 15px;
}

.ivu-table .demo-table-info-row td{
    background-color: #2db7f5;
    color: #fff;
}
.ivu-table .demo-table-error-row td{
    background-color: #ff6600;
    color: #fff;
}
.ivu-table td.demo-table-info-column{
    background-color: #2db7f5;
    color: #fff;
}
.ivu-table .demo-table-info-cell-name {
    background-color: #2db7f5;
    color: #fff;
}
.ivu-table .demo-table-info-cell-age {
    background-color: #ff6600;
    color: #fff;
}
.ivu-table .demo-table-info-cell-address {
    background-color: #187;
    color: #fff;
}
</style>