<template>
	<div>
		<div class="title">热门推荐</div>
		<ul class="menu">									<!-- 菜单 -->
			<li @click="menu1">笔记本电脑</li>
			<li @click="menu2">手机</li>
			<li @click="menu3">服饰</li>
			<li @click="menu4">手表</li>
			<li @click="menu5">书籍</li>
			<li @click="menu6">玩具</li>
			<li @click="menu7">家电</li>
			<li @click="menu8">学习用品</li>
			<li @click="menu9">办公用品</li>
			<li @click="menu10">旅游必备</li>
			<li @click="menu11">游戏专栏</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	
	export default{
		methods:{
			menu1:function(){						
				//emit用来触发Msg的on事件，
				//通过on自定义事件接收"val"的"1"
				this.$emit("val","1");
			},
			menu2:function(){
				this.$emit("val","2");
			},
			menu3:function(){
				this.$emit("val","3");
			},
			menu4:function(){
				this.$emit("val","4");
			},
			menu5:function(){
				this.$emit("val","5");
			},
			menu6:function(){
				this.$emit("val","6");
			},
			menu7:function(){
				this.$emit("val","7");
			},
			menu8:function(){
				this.$emit("val","8");
			},
			menu9:function(){
				this.$emit("val","9");
			},
			menu10:function(){
				this.$emit("val","10");
			},
			menu11:function(){
				this.$emit("val","11");
			},
		}
	}
</script>

<style type="text/css">
	.title{
		width: 100px;
		color: red;
	}
	.menu li{
		list-style: none;						/* 去掉li前面的点 */
		height: 50px;
		margin-top: 2px;
		background-color: white;
		line-height: 50px;					/* 行高与height一致可居中 */
		cursor: pointer;						/* 鼠标指针-手型 */
	}
	
</style>
