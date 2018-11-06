<template>
	<div class="el-container">
		<el-container>
			<el-aside width="20%">Aside</el-aside>
			<el-container>
				<el-header height="15%">
					<p>账号注册</p>
				</el-header>
				<el-main>
					<div>
						<div class="board-line-left">
							<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm" style="width: 400px">
								<el-form-item label="用户名" prop="userName">
									<el-input type="info" v-model="ruleForm2.userName" autocomplete="off"></el-input>
								</el-form-item>
								<el-form-item label="手机号码" prop="phone">
									<el-input type="info" v-model="ruleForm2.phone" autocomplete="off"></el-input>
								</el-form-item>
								<el-form-item label="密码" prop="pass">
									<el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
								</el-form-item>
								<el-form-item label="确认密码" prop="checkPass">
									<el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
								</el-form-item>
								<el-form-item label="验证码" style="margin-bottom: 0px">
									<el-input v-model.number="ruleForm2.verificationCode" style="width: 58.6%"></el-input>
									<el-button type="info" @click="sendVCode" style="width: 40%">{{sendMess}}</el-button>
								</el-form-item>
								<el-form-item style="margin-bottom: 0px">
									<el-checkbox v-model="readAgreement" class="from-span">
										<span>阅读并接受</span>
										<a target="_blank" href="https://www.baidu.com">《用户协议》</a>
										<span>与</span>
										<a target="_blank" href="https://www.baidu.com">《用户规定》</a>
									</el-checkbox>
								</el-form-item>
								<el-form-item style="margin-bottom: 0px">
									<el-button style="width: 40%" type="primary" @click="submitForm">注册</el-button>
									<el-button style="width: 40%" @click="resetForm">重置</el-button>
								</el-form-item>
							</el-form>							
						</div>
						<!-- <div class="board-line-right">
							<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm" style="width: 400px">
								<el-form-item label="密码" prop="pass">
									<el-input type="password" v-model="ruleForm2.pass" autocomplete="off"></el-input>
								</el-form-item>
								<el-form-item label="确认密码" prop="checkPass">
									<el-input type="password" v-model="ruleForm2.checkPass" autocomplete="off"></el-input>
								</el-form-item>
								<el-form-item label="年龄" prop="age">
									<el-input v-model.number="ruleForm2.age"></el-input>
								</el-form-item>
								<el-form-item>
									<el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
									<el-button @click="resetForm('ruleForm2')">重置</el-button>
								</el-form-item>
							</el-form>
						</div> -->
					</div>					
				</el-main>
				<el-footer height="8%">Footer</el-footer>
			</el-container>
		</el-container>

	</div>
</template>

<script>

export default {
	name: 'register',
	data() {
		var validatePass = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请输入密码'));
			} else {
				if (this.ruleForm2.checkPass !== '') {
					this.$refs.ruleForm2.validateField('checkPass');
				}
				callback();
			}
		};
		var validatePass2 = (rule, value, callback) => {
			if (value === '') {
				callback(new Error('请再次输入密码'));
			} else if (value !== this.ruleForm2.pass) {
				callback(new Error('两次输入密码不一致!'));
			} else {
				callback();
			}
		};
		return {
			sendMess: '发送验证码',
			readAgreement: false,
			ruleForm2: {
				userName: '',
				phone: '',
				pass: '',
				checkPass: '',
				verificationCode: ''
			},
			rules2: {
				userName: [
				    {required: true, message: '用户名不能为空', trigger: 'blur'},
				    {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
				],
				phone: [
				    {required: true, message: '手机号码不能为空', trigger: 'blur'},
            		{min: 11, max: 11, message: '手机号码长度为11位数字值', trigger: 'blur'}
				],
				pass: [
					{ validator: validatePass, trigger: 'blur'}
				],
				checkPass: [
				    { validator: validatePass2, trigger: 'blur' }
				],

			}
		}
	},
	methods: {
		submitForm: function() {
			if (this.ruleForm2.userName === '') {
				this.$notify({
				  	type: 'error',
				  	message: '请填写用户名!',
				  	duration: 2000
				})
				return
			}
			if (this.ruleForm2.phone === '') {
				this.$notify({
				  	type: 'error',
				  	message: '请填写手机号!',
				  	duration: 2000
				})
				return
			}
			if (this.ruleForm2.pass === '') {
				this.$notify({
				  	type: 'error',
				  	message: '请输入密码!',
				  	duration: 2000
				})
				return
			}
			if (this.ruleForm2.pass !== this.ruleForm2.checkPass) {
				this.$notify({
				  	type: 'error',
				  	message: '密码不一致!',
				  	duration: 2000
				})
				return
			}
			if (!this.readAgreement) {
				this.$notify({
				  	type: 'error',
				  	message: '请阅读用户协议!',
				  	duration: 2000
				})
				return
			}
			var registerData = {
				userName: this.ruleForm2.userName,
				phone: this.ruleForm2.phone,
				password: this.ruleForm2.pass
			}
			this.$http.Register(registerData).then((result) => {
				if (result.c === 200) {
					this.$notify({
					  	type: 'success',
					  	message: '注册成功!',
					  	duration: 2000
					})
					this.GLOBAL.userName = this.ruleForm2.userName
					this.$router.push({name: 'Layout'})  
					// , params: {orderId: row.orderId}
				}
			})
			
		},
		resetForm: function() {
			this.ruleForm2 = ''
			this.sendMess = '发送验证码'
		},
		sendVCode: function() {
			// for (var i = 60; i >= 0; i--) {
			// 	this.sendMess = '已发送（' + i + ')'
			// 	this.sleep(1000)
			// 	console.log(i)
			// }
			this.sendMess = '已发送'
			
		}
	}
}
</script>

<style scoped>
.el-container{
	height: 550px;
	width: 100%;
	min-width: 1167px;
}
.el-header {
	background-color: #B3C0D1;
	color: #333;
	text-align: center;
	line-height: 60px;
}
.el-footer {
	background-color: #B3C0D1;
	color: #333;
	text-align: center;
	line-height: 60px;
}

.el-aside {
	background-color: #D3DCE6;
	color: #333;
	text-align: center;
	line-height: 200px;
}

.el-main {
	background-color: #E9EEF3;
	color: #333;
	text-align: center;
	line-height: 160px;
}

body > .el-container {
	margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
	line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
	line-height: 320px;
}
.board-line-left {
	display: inline;
	width: 200px;
	max-width: 300px;
}
.board-line-right	{
	display: inline;
	width: 200px
}
.from-span span {
	font-size: 5px
}
.from-span a {
	font-size: 6px;
}
	
</style>