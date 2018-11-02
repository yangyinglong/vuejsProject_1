<!-- login.vue -->
<template>
	<div>
		<div v-if="this.GLOBAL.loginStatus === 0">
			<b type="text" @click="dialogFormVisible = true">
				<p>{{this.GLOBAL.userName}}</p>
			</b>

			<el-dialog width="20%" title="登录" :visible.sync="dialogFormVisible" center>
				<div>
					<el-form :model="loginform" ref="loginform" class="demo-ruleForm">
					  <el-form-item>
					    <el-input v-model="loginform.name" autocomplete="off" placeholder="用户名或手机号码" clearable></el-input>
					  </el-form-item>
					  <el-form-item>
					    	<el-input type="password" v-model="loginform.pass" autocomplete="off" placeholder="用户名或手机号码" clearable></el-input>
					  </el-form-item>
					</el-form>
				</div>

				<div style="width: 200px; margin:0 auto">
				    <div style="float: left">
				        <el-checkbox v-model="loginform.rememberPassword">记住密码</el-checkbox>
				    </div>
				    <router-link to="/forgetPass" >
				        <div style="float: right" @click="dialogFormVisible = false">忘记密码</div>
				    </router-link>
				</div>
			  
			  	<div style="height: 50px"></div>
			  	<div slot="footer" class="dialog-footer">
			  	  	<!-- <el-button @click="dialogFormVisible = false">取 消</el-button> -->
			  	  	<el-button type="primary" style="width: 70%" @click="loginData">确 定</el-button>
			  	</div>
			</el-dialog>
		</div>
		<div v-else>
			
		</div>
		
	</div>
</template>

<script>

export default {
	name: 'Login',
	data() {
		return {
			dialogFormVisible: false,
			loginform: {
				name: '',
				pass: '',
				rememberPassword: false
			},
		}
	},
	methods: {
		loginData: function() {
			var loginFormData = {
				phone: this.loginform.name,
				password: this.loginform.pass
			}
			this.$http.Login(loginFormData).then((result) => {
				if (result.c === 200) {
					this.$notify({
					  	type: 'success',
					  	message: '欢迎您，' + result.r + '!',
					  	duration: 2000
					})
					sessionStorage.setItem('userName', result.r)
					this.GLOBAL.userName = result.r
					this.dialogFormVisible = false
					console.log(sessionStorage.getItem('userName'))
				}
				else if (result.c === 401) {
					this.$notify({
					  	type: 'error',
					  	message: '密码错误!',
					  	duration: 2000
					})
				}
				else {
					this.$notify({
					  	type: 'error',
					  	message: '没有此用户!',
					  	duration: 2000
					})
					this.dialogFormVisible = false
				}
				
			})
		}
	}
}
</script>

<style scoped>
.content {
	display: inline-block;
	text-align: center;
	vertical-align: middle;
	horiz-align: center;
	white-space: nowrap;
	margin: 0;
}
</style>