<template>
	<div class="table-content">
	    <div style="text-align:center;border:1px dotted #000000;">
	        <span>代开增值税发票缴纳税款申报单</span>
	    </div>
	    <div style="border-left:1px dotted #000000;border-right:1px dotted #000000;">
	        <span>代开人声明：</span><br />
	        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本次缴纳税款申报单提供的开票信息真实、完整、准确，符合有关法律法规，现申请代开增值税普通发票。</span>
	    </div>
	    <div style="text-align:right;border-left:1px dotted #000000;border-right:1px dotted #000000;padding:30px 0px 10px 0px;">
	        <span>代开人（签章）：&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
	        <input style="border: none;text-align: center;width:50px;" type="text" /><span>年</span>
	        <input style="border: none;text-align: center;width:50px;" type="text" /><span></span><span>月</span>
	        <input style="border: none;text-align: center;width:50px;" type="text" /><span></span><span>日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
	    </div>
	    <div style="width: 100%">
	        <table>
	            <tr>
	                <td rowspan="3">购买方信息</td>
	                <td class="t-l">名称</td>
	                <td colspan="2">长兴启源文化科技有限公司</td>
	                <td class="t-l">纳税人识别</td>
	                <td colspan="3">1111111111111111</td>
	            </tr>
	            <tr>
	                <td class="t-l">地址</td>
	                <td colspan="2"><input style="border: none;text-align: center;border: none;text-align: center;width:140px;" type="text" /></td>
	                <td class="t-l">开户银行</td>
	                <td colspan="3"><input style="border: none;text-align: center;width:300px;" type="text" /></td>
	            </tr>
	            <tr>
	                <td class="t-l">电话</td>
	                <td colspan="2"><input style="border: none;text-align: center;width:140px;" type="text" /></td>
	                <td class="t-l">银行账号</td>
	                <td colspan="3"><input style="border: none;text-align: center;width:300px;" type="text" /></td>
	            </tr>

	            <tr>
	                <td rowspan="3">销售方信息</td>
	                <td class="t-l">名称</td>
	                <td colspan="2"><input style="border: none;text-align: center;width:140px;border: none;text-align: center;" type="text" /></td>
	                <td class="t-l">纳税人识别</td>
	                <td colspan="3"><input style="border: none;text-align: center;width:350px;" type="text" /></td>
	            </tr>
	            <tr>
	                <td class="t-l">地址</td>
	                <td colspan="2"><input style="border: none;text-align: center;width:140px;" type="text" /></td>
	                <td class="t-l">开户银行</td>
	                <td colspan="3"><input style="border: none;text-align: center;width:300px;" type="text" /></td>
	            </tr>
	            <tr>
	                <td class="t-l">电话</td>
	                <td colspan="2"><input style="border: none;text-align: center;width:140px;" type="text" /></td>
	                <td class="t-l">银行账号</td>
	                <td colspan="3"><input style="border: none;text-align: center;width:300px;" type="text" /></td>
	            </tr>
	            <tr>
	                <td colspan="2">代开人类型</td>
	                <td colspan="6">
	                    <span>自然人</span><input type="checkbox" />
	                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
	                    <span>其他纳税人</span><input type="checkbox" />
	                </td>
	            </tr>
	            <tr>
	                <td colspan="2">减免税标识（代开普通<br />发票，符合条件填写）</td>
	                <td colspan="6">
	                    <span>是</span><input type="checkbox" />
	                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
	                    <span>否</span><input type="checkbox" />
	                </td>
	            </tr>
	            <tr>
	                <td colspan="2">减免税种</td>
	                <td colspan="3">减免税类型</td>
	                <td colspan="3">减免原因</td>
	            </tr>
	            <tr style="height: 25px;">
	                <td colspan="2"><input style="border: none;text-align: center;width:240px;" type="text" /></td>
	                <td colspan="3"><input style="border: none;text-align: center;width:280px;" type="text" /></td>
	                <td colspan="3"><input style="border: none;text-align: center;width:300px;" type="text" /></td>
	            </tr>
	            <tr>
	                <td width="120px;">货物或应税<br />劳务、服务名称</td>
	                <td width="120px;">规格型号<br />（服务类型）</td>
	                <td width="60px;">计量<br />单位</td>
	                <td width="80px;">数量</td>
	                <td width="140px;">单价</td>
	                <td width="100px;">不含税<br />销售额</td>
	                <td width="100px;">征收税</td>
	                <td width="100px;">税额</td>
	            </tr>
	            <!--可循环这个tr-->
	            <tr>
	                <td><input style="border: none;text-align: center;width:120px;" type="text" /></td>
	                <td><input style="border: none;text-align: center;width:120px;" type="text" /></td>
	                <td><input style="border: none;text-align: center;width:60px;" type="text" /></td>
	                <td><input style="border: none;text-align: center;width:80px;" type="text" /></td>
	                <td><input style="border: none;text-align: center;width:140px;" type="text" /></td>
	                <td><input style="border: none;text-align: center;width:100px;" type="text" /></td>
	                <td><input style="border: none;text-align: center;width:100px;" type="text" /></td>
	                <td><input style="border: none;text-align: center;width:100px;" type="text" /></td>
	            </tr>

	            <tr>
	                <td>价税合计（大写）</td>
	                <td class="t-l" colspan="3"><input style="border: none;text-align: center;width:260px;" type="text" /></td>
	                <td>价税合计（小写）</td>
	                <td class="t-l" colspan="3"><input style="border: none;text-align: center;width:300px;" type="text" /></td>
	            </tr>

	            <tr>
	                <td>受理税务机关</td>
	                <td class="t-l" colspan="7">
	                    <div>
	                        <span>税收完税凭证号：</span><span><input style="border: none;text-align: center;width:260px;" type="text" /></span>
	                    </div>
	                    <div>
	                        <span>发票代码：</span><span><input style="border: none;text-align: center;width:308px;" type="text" /></span>
	                    </div>
	                    <div>
	                        <span>发票号码：</span><span><input style="border: none;text-align: center;width:308px;" type="text" /></span>
	                    </div>
	                    <div style="padding-left:250px;">
	                        <span>经办人（签字）</span>
	                        <input style="border: none;text-align: center;width:100px;" type="text" />
	                        &nbsp;&nbsp;&nbsp;&nbsp;
	                        <input style="border: none;text-align: center;width:50px;" type="text" /><span>年</span>
	                        <input style="border: none;text-align: center;width:50px;" type="text" /><span></span><span>月</span>
	                        <input style="border: none;text-align: center;width:50px;" type="text" /><span></span><span>日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
	                    </div>

	                </td>
	            </tr>

	            <tr>
	                <td rowspan="4">收件地址</td>
	                <td class="t-l" colspan="7">
	                    <div>
	                        <span>收件人：</span><span><input style="border: none;text-align: center;width:260px;" type="text" /></span>
	                    </div>
	                    <div>
	                        <span>地址：</span><span><input style="border: none;text-align: center;width:276px;" type="text" /></span>
	                    </div>
	                    <div>
	                        <span>邮编：</span><span><input style="border: none;text-align: center;width:276px;" type="text" /></span>
	                    </div>
	                    <div>
	                        <span>电话：</span><span><input style="border: none;text-align: center;width:276px;" type="text" /></span>
	                    </div>
	                </td>
	            </tr>
	        </table>
	    </div>
	    <div>
	        <span class="btn">确认修改并提交</span>
	    </div>
	</div>
</template>

<script>
	
</script>

<style>
	.table-content {
	    width: 880px;
	    margin: 0 auto;
	}

	table tr th,
	table tr td {
	    border: 1px solid #151515;
	    min-height: 25px;
	    line-height: 25px;
	    text-align: center;
	}

	table {
	    border-color: #000000;
	    border-collapse: collapse;
	}

	.t-l {
	    text-align: left;
	}
	.btn{
	    display: block;
	    margin: 15px auto;
	    width: 260px;
	    text-align: center;
	    height: 40px;
	    line-height: 40px;
	    background-color: #cccccc;
	}
	input{
	    height: 18px;
	}
</style>