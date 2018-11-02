# vp

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

Java路线的学习到了前端部分
从网易云课堂学习vue.js框架制作网页

这是一个用vue.js框架制作的网页，用css/html/js等，还用到了swiper做一个图片的展示框，



计算属性
```
计算属性是根据依赖进行缓存的，相同的数据不会重复计算
computed: {

}
```

双向数据绑定
```
v-model
修饰符
	v-model.lazy = // 失去焦点后赋值
	trim / number
```

实时监听
```
watch: {
	msg: function(data) {
		//  监听的数据为 msg 
		//  延迟监听时间
		setTimeout(() => {

			}, 1000)
	}
}
```

Class 与 Style 绑定
```
对象语法
可以传给 v-bind:class 一个对象，以动态的切换 class, 但 isActive 为 true 的时候， active 有效
<dic v-bind:class = "{active:isActive}"></div>
```

父子组件：
```
信息传递：
	父 ==>> 子
		1. <Son :title="msg" :lifemsg="lifemsg"/>
			实时传递，父组件中数据改变时，会同步到子组件
		2. 在子组件中，定义 props: ["title", "lifemsg"]，此时，title lifemsg 就是从父组件传递过来的数据
			子组件中，可以限定获取到的数据的类型，格式如下
				props: {
					title: [String, Number],
					lifemsg: String,	// 父组件可以不传递，不传递的话就为空
					num: {
						type: Number,
						required: true	//必须传递，如果不传递会报错
					}，
					num_1: {
						type: Number,
						default: 5		// 默认值
					}
					// 传递对象
					myobj: {
						type: Object,
						default: function() {
							return {
								name: "xx",
								age: 10
							}
						}
					}
				}
		涉及到： 数据传递类型限制（验证）
					数据类型验证
					多数据类型验证
					必选项
					默认值
					obj、arr 数据类型的默认值

	子 ==>> 父
```



结构整理
```
/router/index.js
	配置路由，配置各个页面的具体路径，将 Layout 页面设置为根路径

/App.vue
	整体页面展示的加载，其中 Header 是头部，定义在 /components/header.vue 中，Footers 是尾部
	<template>
	  <div id="app" class="break">
	    <Headers />
	    <router-view/>
	    <Footers />
	  </div>
	</template>

/main.js
	*****

/pages/layout.vue
	用到的技术：
		1. v-for="(product, index) in productList"
		2. <div v-if="index%2 == 0" class="hr"></div> 当条件成立的时候，就会渲染出这个 div
		3. <a target="_blank" :href="item.url"></a>
		4. swiper 组件，用来播放图片，网址：
		5. 一个 div 中根据条件有多个 class ， :class="['index-board-' + borad.tag, {'line-last' : index%2 !== 0}]"

/pages/details.vue
	用到：
		1. 通过点击不同按钮，灵活的改变变量的值，达到改变布局的效果
		2. 首先在 router/index.js 中配置 car earth 等页面为 details 的子页面，然后跳转页面，通过 <router-view></router-view> 来加载
		3. 这个页面关键是 子页面的路由配置 和 通过改变变量的值 灵活的加载

/pages/details/car earth hill loud .vue
	这几个页面是 datails 的子页面，内容会显示在 details.vue 中
	主要编写了 car.vue 这个页面
		1. 父子页面信息的传递，包括 父 传递给 子，和 子 传递给 父。
		2. 父 ===》 子：
			a. 要在父页面的 <script> 中引入子页面：
				import Counter from "./components/Counter"
				import DownMenu from "./components/DownMenu"
				import Radios from "./components/Radios"
			b. 在 <div> 中使用
				<Counter></Counter>
			c. 在父页面中定义变量 max: 10
			d. 传递值给子页面
				<Counter :Max="max"></Counter>
				这样子页面中就需要接受 Max （Max 是子页面中的变量名称，必须一致，max 是父页面中定义的变量）
			e. 子页面接受 Max
				props: {
					max: {
						type:Number,	// 定义类型为 Number
						default:5		// 如果不传递，默认为5
					}
				}
				传递其他的类型，比如数组
				props: {
					DownDate: {
						type: Array,			// 类型为 Array
						default: function(){	// 默认值
							return[
									{
										name: "初级版",
										value: 1
									},
									{
										name: "中极版",
										value: 2
									}
							]
						}
						
					}
				}
		3. 子 ===》 父
			a. 首先在子页面中把 key - value 写入 emit
				this.$emit("counter", this.number)
			b. 在父页面中根据 key 接受
				<Counter @counter="xxxfunction" :Max="max"></Counter>
			c. methods 中定义函数
				methods: {
					xxxfunction(data) {
						// data 就是 传递过来的 value
					}
				}
			d. 还有一种写法
				<Counter @counter="getGoodInfo('counter', $event)" :Max="max"/>

				getGoodInfo(key, value) {
					// console.log(key, value)
					/**
					 * this 是当前组件
					 * 首先在 return 中定义 counter: 0
					 * this[key] 就相当于 this.counter
					 */
					this[key] = value					
				}

/pages/details/components/DownMenu.vue
	这是一个下拉菜单，用到两个 div ，第一个是显示选中的信息，第二个是点击之后弹出来的下拉信息
	<div class="selection-show" @click="showHide">
	<div class="selection-list" v-show="show">
	用到的技术：
		1. 当点击第一个 div 的时候执行 showHide 函数
			showHide() {
				// show: false
				this.show = !this.show
			}
		2. 当点击第二个 div 的时候执行 selectList 函数
			selectList(index) {
				this.nowIndex = index
				this.show = false
				this.$emit("downmenu", this.DownDate[index].value)
			}

```