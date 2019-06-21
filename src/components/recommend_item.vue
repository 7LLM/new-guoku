<template>
	<div>
		<ul>
			<li v-for="(item,index) in pro" :key="index">
				<a href="#">
					<img :src="item.img_url"/>
					<p class="pro_name">{{item.produ_name}}</p>
					<p class="pro_price">{{item.pro_price}}</p>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				pro: []
			}
		},
		mounted() {
			this.$axios.get("../../static/data/recommend_item.json")
				.then(res => {
					console.log(res.data.data);
					this.pro = res.data.data;
				}).catch(err => {
					console.log(err)
				})
		}
	}
</script>

<style lang="less" scoped>
	ul{
		overflow: hidden;
		margin-left: 8%;
		padding: 20px 0 30px 0;
		li{
			float: left;
			text-align: center;
			margin-right: 15px;
			a{
				display: block;
			}
			img{
				width: 150px;
				height: 150px;
				border: 1px solid #ccc;
			}
			.pro_name{
				color: #666;
				font-size: 12px;
			}
			.pro_price{
				font-size: 14px;
				color: #CD1200;
			}
		}
	}
</style>