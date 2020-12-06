<template>
	<div>
		<div v-if="setvalue==1">
			<GoodsList :goodId="1"></GoodsList>
		</div>
		<div v-else-if="setvalue==2">
			<GoodsList :goodId="2"></GoodsList>
		</div>
		<div v-else>
			<GoodsList :goodId="0"></GoodsList>
		</div>
	</div>
</template>

<script type="text/javascript">
	
	import GoodsList from './goodsList.vue'
	export default{
		props: {
			setvalue:{
			type:String,
			default:""
		}},
		data(){
			return{
				
			}
		},
		components:{
			GoodsList
		},
	}
</script>

<style>
</style>
