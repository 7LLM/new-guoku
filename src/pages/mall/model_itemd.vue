<template>
	<div class="pro_list">
		<slot name="listLeft"></slot>
		<div class="listRight">
			<div class="listRight_item" v-for="(item,index) in pro" :key="index" v-show="index>=18 && index<=23">
				<a href="#">
					<img :src="item.img_url" />
					<p class="pro_name">{{item.produ_name}}</p>
					<p class="pro_price">{{item.pro_price}}</p>
				</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				pro:[]
			}
		},
		mounted() {
			this.$axios.get("../../../static/data/fruitsModel.json")
				.then(res => {
					console.log(res.data.data);
					this.pro = res.data.data;
					console.log(this.show);
					console.log(this.pro)
				}).catch(err => {
					console.log(err)
				})
		}
	}
</script>

<style lang="less" scoped="scoped">
	/*产品模块内容*/
	.pro_list {
		width: 100%;
		display: flex;
		.listLeft {
			width: 425px;
			height: 548px;
			border-bottom: 1px solid #DDDDDD;
			border-right: 1px solid #DDDDDD;
			img {
				width: 425px;
				height: 548px;
			}
		}
		.listRight {
			width: 70%;
			display: flex;
			justify-content: space-around;
			flex-wrap: wrap;
			padding: 10px 0;
			.listRight_item {
				margin-bottom: 10px;
				a {
					display: block;
					.pro_price {
						color: #E51E13;
						font-size: 14px;
					}
					.pro_name {
						color: #000;
						font-size: 12px;
					}
				}
			}
			.listRight_item:hover{
				box-shadow: 0 0 8px 8px gainsboro;
			}
			img {
				width: 200px;
				height: 200px;
			}
		}
	}
</style>