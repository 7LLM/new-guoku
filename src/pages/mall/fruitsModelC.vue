<template>
	<section class="produList">
		<slot name="title"></slot>
		<slot name="more"></slot>
		<Model_itema mark="one" :selected="selected" @change="getVal">
			<span slot="subtitle" class="subtitle" id="subbtitle">特别定制</span>
			<div slot="content" class="pro_list">
				<div class="listLeft">
					<img src="../../assets/mallImg/recommend_img3.jpg" />
					<div class="mask"><a href="#">立即查看</a></div>
				</div>
				<div class="listRight">
					<div class="listRight_item" v-for="(item,index) in pro" :key="index" v-show="index>=36&&index<=41">
						<a href="#">
							<img :src="item.img_url" />
							<p class="pro_name">{{item.produ_name}}</p>
							<p class="pro_price">{{item.pro_price}}</p>
							<p class="checkBox">
								<span class="checkColor"><span class="check">立即查询</span></span>
							</p>
						</a>
					</div>
				</div>
			</div>
		</Model_itema>

		<Model_itema mark="two" :selected="selected" @change="getVal">
			<span slot="subtitle" class="subtitle">袋袋果切</span>
			<div slot="content" class="pro_list">
				<div class="listLeft">
					<img src="../../assets/mallImg/recommend_img3.jpg" />
					<div class="mask"><a href="#">立即查看</a></div>
				</div>
				<div class="listRight">
					<div class="listRight_item" v-for="(item,index) in pro" :key="index" v-show="index>=6 && index<=11">
						<a href="#">
							<img :src="item.img_url" />
							<p class="pro_name">{{item.produ_name}}</p>
							<p class="pro_price">{{item.pro_price}}</p>
							<p class="checkBox">
								<span class="checkColor"><span class="check">立即查询</span></span>
							</p>
						</a>
					</div>
				</div>
			</div>
		</Model_itema>
		<Model_itema mark="three" :selected="selected" @change="getVal">
			<span slot="subtitle" class="subtitle">水果甜品</span>
			<div slot="content" class="pro_list">
				<div class="listLeft">
					<img src="../../assets/mallImg/recommend_img3.jpg" />
					<div class="mask"><a href="#">立即查看</a></div>
				</div>
				<div class="listRight">
					<div class="listRight_item" v-for="(item,index) in pro" :key="index" v-show="index>=12 && index<=17">
						<a href="#">
							<img :src="item.img_url" />
							<p class="pro_name">{{item.produ_name}}</p>
							<p class="pro_price">{{item.pro_price}}</p>
							<p class="checkBox">
								<span class="checkColor"><span class="check">立即查询</span></span>
							</p>
						</a>
					</div>
				</div>
			</div>
		</Model_itema>
		<Model_itema mark="four" :selected="selected" @change="getVal">
			<span slot="subtitle" class="subtitle">酷卡</span>
			<div slot="content" class="pro_list">
				<div class="listLeft">
					<img src="../../assets/mallImg/recommend_img3.jpg" />
					<div class="mask"><a href="#">立即查看</a></div>
				</div>
				<div class="listRight">
					<div class="listRight_item" v-for="(item,index) in pro" :key="index" v-show="index>=18 && index<=23">
						<a href="#">
							<img :src="item.img_url" />
							<p class="pro_name">{{item.produ_name}}</p>
							<p class="pro_price">{{item.pro_price}}</p>
							<p class="checkBox">
								<span class="checkColor"><span class="check">立即查询</span></span>
							</p>
						</a>
					</div>
				</div>
			</div>
		</Model_itema>
		<Model_itema mark="five" :selected="selected" @change="getVal">
			<span slot="subtitle" class="subtitle">方砖果杯</span>
			<div slot="content" class="pro_list">
				<div class="listLeft">
					<img src="../../assets/mallImg/recommend_img3.jpg" />
					<div class="mask"><a href="#">立即查看</a></div>
				</div>
				<div class="listRight">
					<div class="listRight_item" v-for="(item,index) in pro" :key="index" v-show="index>=24 && index<=29">
						<a href="#">
							<img :src="item.img_url" />
							<p class="pro_name">{{item.produ_name}}</p>
							<p class="pro_price">{{item.pro_price}}</p>
							<p class="checkBox">
								<span class="checkColor"><span class="check">立即查询</span></span>
							</p>
						</a>
					</div>
				</div>
			</div>
		</Model_itema>
		<div class="line"></div>
	</section>
</template>

<script>
	import Model_itema from "./model_itema"

	export default {
		data() {
			return {
				pro: [],
				selected: 'one'
			}
		},
		components: {
			Model_itema
		},
		methods: {
			getVal(val) {
				this.selected = val;
			}
		},
		mounted() {
			this.$axios.get("../../static/data/fruitsModel.json")
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

<style lang="less" scoped>
	/*产品模块*/
	.subtitle {
		float: left;
		cursor: pointer;
		color: #666;
		font-size: 14px;
		margin-top: 12px;
    	padding: 4px;
	}
	
	#subbtitle {
		margin-left: 26%;
	}
	/*subtitle下面的线*/
	
	.line {
		float: left;
		width: 1200px;
		border-bottom: 2px solid red;
	}
	
	.produList {
		width: 1200px;
		height: 614px;
		margin: 50px auto;
		text-align: center;
		position: relative;
	}
	
	.produList:hover {
		box-shadow: 0 2px 6px gainsboro;
	}
	
	.pro_list {
		width: 100%;
		display: flex;
		position: absolute;
		top: 42px;
		left: 0;
		.listLeft {
			width: 425px;
			height: 571px;
			border-bottom: 1px solid #DDDDDD;
			border-right: 1px solid #DDDDDD;
			position: relative;
			img {
				width: 425px;
				height: 100%;
			}
			.mask{
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				line-height: 571px;
				opacity: .8;
				background: #fff;
				display: none;
				a{
					color: #000;
					font-size: 14px;
					font-weight: 600;
					padding: 4px 10px;
					border: 1px solid red;
				}
				a:hover{
					color: #fff;
					background: red;
				}
			}
		}
		.listLeft:hover .mask{
			display: block;
		}
		.listRight {
			width: 70%;
			display: flex;
			justify-content: space-around;
			flex-wrap: wrap;
			padding: 10px 0;
			.listRight_item {
				height: 275px;
				margin-bottom: 10px;
				a {
					display: block;
					height: 239px;
					overflow: hidden;
					.pro_price {
						color: #E51E13;
						font-size: 14px;
						margin-bottom: 4px;
					}
					.pro_name {
						color: #000;
						font-size: 12px;
					}
					.checkBox {
						position: relative;
						height: 25px;
						span {
							position: absolute;
							top: 0px;
							left: 50%;
							transform: translateX(-50%);
							height: 26px;
							line-height: 26px;
							border: 1px solid transparent;
						}
						.checkColor:hover {
							background: red;
							animation: bgColor 0.2s;
							animation-fill-mode: forwards;
							.check {
								color: #fff;
							}
						}
						.check {
							top: -1px;
							color: #000;
							font-size: 14px;
							font-weight: 600;
							width: 74px;
							transform: translateX(-50%);
							text-align: center;
							border-color: #ccc;
						}
					}
				}
			}
			.listRight_item:hover a {
				box-shadow: 0 0 8px 8px gainsboro;
				animation: show 0.2s;
				transition: all 0.2s;
				/*动画会停留在最后一帧*/
				animation-fill-mode: forwards;
			}
			img {
				width: 200px;
				height: 200px;
			}
		}
	}
	
	@keyframes show {
		0% {
			height: 239px;
		}
		25% {
			height: 247px;
		}
		50% {
			height: 258px;
		}
		75% {
			height: 256px;
		}
		100% {
			height: 275px;
		}
	}
	
	@keyframes bgColor {
		0% {
			width: 0;
		}
		25% {
			width: 15px;
		}
		50% {
			width: 35px;
		}
		75% {
			width: 55px;
		}
		100% {
			width: 74px;
		}
	}
</style>