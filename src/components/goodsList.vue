<template>
	<div name="show">
		<ul class="goodslist">
			<li v-for="goods in list">
				<img v-bind:src="goods.img">
				<p>{{ goods.goodsName }}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'show',
		data(){
			var obj=this;
			var url="";
			if(obj.goodId==1){
				url="json/bjb.json";
			}else if(obj.goodId==2){
				url="json/sj.json";
			}else{
				 url="json/bjb.json";
			 }
			this.$http.get(url).then(function(xx){
				obj.list=xx.data;
			})
			return{
				list:[]
			}
		},
		props:{
			goodId:Number
		},
		watch:{
			goodId(){
			 var obj=this;
			 var url="";
			 if(obj.goodId==1){
				 url="json/bjb.json";
			 }else if(obj.goodId==2){
				 url="json/sj.json";
			 }else{
				 url="json/bjb.json";
			 }
			 this.$http.get(url).then(function(xx){
				 obj.list=xx.data;
			 })
			 return{
				 list:[]
			 }
			}
		}
	}
</script>

<style type="text/css">
	.goodslist li{
		width: 200px;
		height: 200px;
		list-style: none;
		float: left;
		font-size: 16px;
		color: red;
		margin-bottom: 30px;
	}
	.goodslist img{
		width: 180px;
		height: 180px;
	}
</style>
