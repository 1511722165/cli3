<template>
  <div class="main">
		<div class="left">
			<Left @val="getval"></Left>
		</div>
		<div class="right">
			<div class="top">
				<img src="../../public/img/title.jpg">
			</div>
			<div class="buttom">
				<Right :setvalue="value"></Right>
			</div>
		</div>
	</div>
</template>


<script type="text/javascript">
	//组件的引用和注册
	import Left from '../components/Left.vue'
	import Right from '../components/Right.vue'
	export default{
		value :"",
		components:{
			//注册<Xx></Xx>
			Left,
			Right
		},
		methods:{
			getval(val){
				this.value=val;	
			}
		},
		data () {
      return {
        value: ""
      }
	}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css">
	*{
		padding: 0;
		margin: 0;
	}
	.left,.right{
		background-color: lightgrey;
		height: 500px;
	}
	.left{
		width: 100px;
		float: left;
		margin-right: 10px;
	}
	.right{
		width: 1000px;
		float: left;
		margin-left: 10px;
	}
	.main{								
		width: 1200px;
		margin: 20px auto;	/* 上下留白20px,auto水平居中 */	
	}
	.top img{
		height: 200px;
		width: 1000px;
	}
	/* 高度一般不设定,应该让内容将它撑起来 */
	/* left页面单独在components设定 */
</style>