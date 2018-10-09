<template>
	<div>
		<table border="1" cellspacing="0" width=850px>
			<!-- <tr><td>ni</td><td>ni</td><td>ni</td><td>ni</td><td>ni</td><td>ni</td><td>ni</td><td>ni</td><td>ni</td><td>ni</td><td>ni</td><td>ni</td></tr> -->
			<tr> <th colspan="12">代开增值税发票缴纳税款申请表</th></tr>
			<tr>
				<td colspan="12">
					<p>
						<span>代开人声明：</span>
					</p>
					<p>
						<span>&emsp;&emsp;本次缴纳税款申请单提供的开票信息真实、完整、准确，符合有关法律法规，现申请代开增值税普通发票。</span>
					</p>
					<br>
					<table border="0" cellspacing="0" width=850px>
						<tr>
							<td width="80px"></td>
							<td width="80px"></td>
							<td width="180px"></td>
							<td>代开人（盖章）：</td>
							<td><input type="text" style="border: none; width: 150px"></td>
							<td><input type="text" style="border: none; width: 35px; text-align: center;">年</td>
							<td><input type="text" style="border: none; width: 35px; text-align: center;">月</td>
							<td><input type="text" style="border: none; width: 35px; text-align: center;">日</td>
							<td width="90px"></td>
						</tr>
					</table>
				</td>
			</tr>
			<tr>
				<th colspan="2" rowspan="3">购买方<br>信息</th>
				<td colspan="2">名称</td>
				<td colspan="2"><input type="text" v-model="buyer_name" style="border: none; width: 100%"></td>
				<td colspan="2">纳税人识别号</td>
				<td colspan="4"><input type="text" v-model="buyer_id" style="border: none; width: 100%"></td>
			</tr>
			<tr>
				<td colspan="2">地址</td>
				<td colspan="2"><input type="text" v-model="buyer_address" style="border: none; width: 100%"></td>
				<td colspan="2">开户银行</td>
				<td colspan="4"><input type="text" v-model="buyer_bank" style="border: none; width: 100%"></td>
			</tr>
			<tr>
				<td colspan="2">电话</td>
				<td colspan="2"><input type="text" v-model="buyer_telephone" style="border: none; width: 100%"></td>
				<td colspan="2">银行账号</td>
				<td colspan="4"><input type="text" v-model="buyer_bank_id" style="border: none; width: 100%"></td>
			</tr>
			<tr>
				<th colspan="2" rowspan="3">销售方<br>信息</th>
				<td colspan="2">名称</td>
				<td colspan="2"><input type="text" v-model="seller_name" style="border: none; width: 100%"></td>
				<td colspan="2">纳税人识别号</td>
				<td colspan="4"><input type="text" v-model="seller_id" style="border: none; width: 100%"></td>
			</tr>
			<tr>
				<td colspan="2">地址</td>
				<td colspan="2"><input type="text" v-model="seller_address" style="border: none; width: 100%"></td>
				<td colspan="2">开户银行</td>
				<td colspan="4"><input type="text" v-model="seller_bank" style="border: none; width: 100%"></td>
			</tr>
			<tr>
				<td colspan="2">电话</td>
				<td colspan="2"><input type="text" v-model="seller_telephone" style="border: none; width: 100%"></td>
				<td colspan="2">银行账号</td>
				<td colspan="4"><input type="text" v-model="seller_bank_id" style="border: none; width: 100%"></td>
			</tr>
			<tr>
				<th colspan="4">代开人信息</th>
				<th colspan="8">
					<div>
						<form>	
							<label>自然人<input type="checkbox" name="info" style="vertical-align: middle;display: inline-block;"></label>
							&emsp;&emsp;&emsp;&emsp;&emsp;    							
							<label>其他纳税人<input type="checkbox" name="info" style="vertical-align: middle;display: inline-block;"></label>
						</form>
					</div>
				</th>
			</tr>
			<tr>
				<th colspan="4">减免税标识（代开普通发票，符合条件填写）</th>
				<th colspan="8">
					<div>
						<form>	
							<label>是<input type="checkbox" name="tag" style="vertical-align: middle;display: inline-block;"></label>
							&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;    							
							<label>否<input type="checkbox" name="tag" style="vertical-align: middle;display: inline-block;"></label>
						</form>
					</div>
				</th>
			</tr>
			<tr>
				<th colspan="4">减免税种</th>
				<th colspan="4">减免税类型</th>
				<th colspan="4">减免税原因</th>
			</tr>
			<tr>
				<th colspan="4" height=20px><input type="text" v-model="waiver_tax_name" style="border: none; width: 100%"></th>
				<th colspan="4"><input type="text" v-model="waiver_tax_type" style="border: none; width: 100%"></th>
				<th colspan="4"><input type="text" v-model="waiver_tax_reason" style="border: none; width: 100%"></th>
			</tr>
			<tr>
				<th colspan="2">货物或应税劳务、服务名称</th>
				<th colspan="2" width="16.67%">规格类型（服务类型）</th>
				<th colspan="1" width="8.33%">计量单位</th>
				<th colspan="1" width="8.33%">数量</th>
				<th colspan="2" width="16.67%">单价</th>
				<th colspan="2" width="16.67%">不含税销售额</th>
				<th colspan="1" width="8.33%">征收税</th>
				<th colspan="1" width="8.33%">税额</th>				
			</tr>
			<tr>
				<th colspan="2" height="20px"><input type="text" v-model="service_name_1" style="border: none; width: 100%"></th>
				<th colspan="2"><input type="text" v-model="service_type_1" style="border: none; width: 100%"></th>
				<th colspan="1"><input type="text" v-model="service_units_1" style="border: none; width: 100%"></th>
				<th colspan="1"><input type="text" v-model="service_count_1" style="border: none; width: 100%"></th>
				<th colspan="2"><input type="text" v-model="service_price_1" style="border: none; width: 100%"></th>
				<th colspan="2"><input type="text" v-model="service_volume_1" style="border: none; width: 100%"></th>
				<th colspan="1"><input type="text" v-model="service_tax_1" style="border: none; width: 100%"></th>
				<th colspan="1"><input type="text" v-model="service_amount_1" style="border: none; width: 100%"></th>				
			</tr>
			<tr>
				<th colspan="2" height="20px"></th>
				<th colspan="2"></th>
				<th colspan="1"></th>
				<th colspan="1"></th>
				<th colspan="2"></th>
				<th colspan="2"></th>
				<th colspan="1"></th>
				<th colspan="1"></th>				
			</tr>
			<tr>
				<th colspan="2" height="20px"></th>
				<th colspan="2"></th>
				<th colspan="1"></th>
				<th colspan="1"></th>
				<th colspan="2"></th>
				<th colspan="2"></th>
				<th colspan="1"></th>
				<th colspan="1"></th>				
			</tr>
			<tr>
				<th colspan="2" height="20px"></th>
				<th colspan="2"></th>
				<th colspan="1"></th>
				<th colspan="1"></th>
				<th colspan="2"></th>
				<th colspan="2"></th>
				<th colspan="1"></th>
				<th colspan="1"></th>				
			</tr>
			<tr>
				<th colspan="2">税收合计（大写）</th>
				<th colspan="4"><input type="text" v-model="tax_uppercase" style="border: none; width: 100%"></th>
				<th colspan="2">税收合计（小写）</th>
				<th colspan="4"><input type="text" v-model="tax_lowercase" style="border: none; width: 100%"></th>			
			</tr>
			<tr>
				<th colspan="2">受理税务机关</th>
				<td colspan="10">
					<table border="0" cellspacing="1" style="width: 100%">
						<tr>
							<td colspan="2">税收完税凭证号：</td>
							<td colspan="7"><input type="text" style="border: none; width: 100%"></td>
						</tr>
						<tr>
							<td width="60px">发票代码：</td>
							<td colspan="8"><input type="text" style="border: none; width: 100%"></td>
						</tr>
						<tr>
							<td>发票号码：</td>
							<td colspan="8"><input type="text" style="border: none; width: 100%"></td>
						</tr>
						<tr>
							<td width="70px"></td>
							<td width="30px"></td>
							<td width="180px"></td>
							<td>经办人（签字）：</td>
							<td><input type="text" style="border: none; width: 100px"></td>
							<td><input type="text" style="border: none; width: 35px; text-align: center;">年</td>
							<td><input type="text" style="border: none; width: 35px; text-align: center;">月</td>
							<td><input type="text" style="border: none; width: 35px; text-align: center;">日</td>
							<td width="30px"></td>
						</tr>
					</table>
				</td>
			</tr>
			<tr>
				<th colspan="2">收件地址</th>
				<td colspan="10">
					<table border="0" cellspacing="0">
						<tr>
							<td>收件人：</td>
							<td><input type="text" style="border: none; width: 200px;"></td>
						</tr>
						<tr>
							<td>地址：</td>
							<td><input type="text" style="border: none; width: 400px"></td>
						</tr>
						<tr>
							<td>邮编：</td>
							<td><input type="text" style="border: none; width: 100px"></td>
						</tr>
						<tr>
							<td>电话：</td>
							<td><input type="text" style="border: none; width: 100px"></td>
						</tr>
					</table>
				</td>
			</tr>
		</table>
	</div>
</template>

<script>
export default {
	name: "tablee",
	data() {
		return {
			buyer_name: "王二",
			buyer_address: "浙江省杭州市下城区国投大厦7楼",
			buyer_telephone: 12345678900,
			buyer_id: "1111",
			buyer_bank: "招商银行",
			buyer_bank_id: "111",
			seller_name: "赵四",
			seller_address: "浙江省杭州市下城区国投大厦6楼",
			seller_telephone: 18900909090,
			seller_id: "2222",
			seller_bank: "瑞丰银行",
			seller_bank_id: "222",

			waiver_tax_name: null,
			waiver_tax_type: null,
			waiver_tax_reason: null, 

			service_name_1: "伪装网",
			service_type_1: "",
			service_units_1: "批", 
			service_count_1: 1,
			service_price_1: null,
			service_volume_1: 500,
			service_tax_1: null,
			service_amount_1: null,

			tax_uppercase: null,
			tax_lowercase: null

		}
	}
}
</script>

<style>
	
</style>