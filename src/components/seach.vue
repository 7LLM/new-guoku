<template>
	<div>
		<Header></Header>
		<section>
			<div class="da_List">
				<div id="box">
					<div class="da_left">
						<div class="da_ti_le">
							<h4>人气商品</h4>
						</div>
						<Item>
							<div slot="currImg" class="glc_lt_gds"><img src="../assets/logo/Fruits18.jpg" /></div>
							<div slot="des" class="glc_lt_gds_des">
								<p>智利进口车厘子4斤</p>
								<span>￥258.00</span>
							</div>
						</Item>
						<Item>
							<div slot="currImg" class="glc_lt_gds"><img src="../assets/logo/Fruits18.jpg" /></div>
							<div slot="des" class="glc_lt_gds_des">
								<p>智利进口车厘子4斤</p>
								<span>￥258.00</span>
							</div>
						</Item>
						<Item>
							<div slot="currImg" class="glc_lt_gds"><img src="../assets/logo/Fruits18.jpg" /></div>
							<div slot="des" class="glc_lt_gds_des">
								<p>智利进口车厘子4斤</p>
								<span>￥258.00</span>
							</div>
						</Item>
						<Item>
							<div slot="currImg" class="glc_lt_gds"><img src="../assets/logo/Fruits18.jpg" /></div>
							<div slot="des" class="glc_lt_gds_des">
								<p>智利进口车厘子4斤</p>
								<span>￥258.00</span>
							</div>
						</Item>
						<Item>
							<div slot="currImg" class="glc_lt_gds"><img src="../assets/logo/Fruits18.jpg" /></div>
							<div slot="des" class="glc_lt_gds_des">
								<p>智利进口车厘子4斤</p>
								<span>￥258.00</span>
							</div>
						</Item>
					</div>
					<div class="da_right">
						<div class="da_top">
							<ul class="da_ti_rt">
								<li :class="{active:item.flag}" @click="fn(item)" v-for="(item,index) in temp">{{item.title}}</li>
								<!--<li :class="{active:this.flag}" @click="fn"></li>
								<li :class="{active:this.flag}" @click="fn"></li>
								<li :class="{active:this.flag}" @click="fn"></li>-->
							</ul>
						</div>
						
						<Item v-for="(item,index) in arr" :key='index'>
							<div slot="currImg" class="currImg"><img :src="item.img_url" /></div>
							<div slot="des" class="da_des">
								<span>{{item.price}}</span><span class="icon_inner"></span>
								<p class="title">{{item.title}}</p>
								<p>规格：{{item.spece}}g/杯</p>
								<p>原产地：{{item.address}}</p>
							</div>
							<div slot="number" class="da_bottom">
								<div class="shu">
									<span class="jian">-</span>
									<input type="text" name="" id="" value="1" />
									<span class="jia">+</span>
								</div>
								<div class="grgp_car">
								  <a href="#">加入购物车</a>
								</div>
							</div>
						</Item>
					</div>
				</div>
				<div style="text-align: right; margin: 10px;">
					<el-pagination
					  background
					  layout="prev, pager, next"
					  :total="100">
					</el-pagination>
				</div>
			</div>
		</section>
		<Footer></Footer>
	</div>
</template>
<script>
	import Header from './header'
	import Footer from './footer'
	import Item from './item'
	export default {
		components: {
			Header,
			Footer,
			Item
		},
		data() {
			return {
				arr: [],
				temp:[
				    {title:"综合",flag:true},
				    {title:"新品",flag:false},
				    {title:"数量",flag:false},
				    {title:"价格",flag:false}
				]
			}
		},
		methods: {
			getval() {
				this.$axios.get("../../static/data/datail.json")
					.then(res => {
						console.log(res.data.datail)
						this.arr = res.data.datail
					})
					.catch(err => {
						console.log(err)
					})
			},
			fn(item){
				item.flag=!item.flag;
			}
		},
		mounted() {
			this.getval();
		}
	}
</script>
<style lang="less">
.da_ti_le{
	background: #FF0000;
	color: #fff;
	text-align: center;
	line-height: 35px;
}
.da_top{
	height:35px;
	background: #f5f5f5;
	border: 1px solid #ddd;
	.da_ti_rt{
		display: flex;
		height:100%;
		margin-left: 8px;
		margin-top:5px;
		>li{
			width: 66px;
			height: 23px;
			line-height:23px;
			background: #fff;
			border: 1px solid #ccc;
			position: relative;
			text-align: center;
			&:after{
				content: '';
				display: block;
				width: 20px;
				height: 20px;
				position: absolute;
				right: 0;
				top: 0;
				background:url(../assets/logo/inner.png) 6px -81px no-repeat;
			}
			&:nth-of-type(4){
				&:after{
				   background-position: 6px -118px;
				}
			}
			&.active{
				background: #FF0000;
			}
			&:not(:first-child){
				border-left: none;
			}
		}
	}
}

</style>