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