<template>
	<div>
		<!--头部-->
		<Header></Header>
		<!--导航-->
		<Shop_item></Shop_item>
		<!--产品类型名字-->
		<section class="model warp">
			<ul>
				<li>首页</li>
				<li> > </li>
				<li>专利分格</li>
				<li> > </li>
				<li>迷你果盒</li>
				<li> > </li>
				<li>迷你果盒：应季流行</li>
			</ul>
		</section>
		<!--产品规格选择-->
		<section class="selection warp">
			<div class="select_left">
				<div class="big_img"><img :src="ImgUrl"/></div>
				<div class="small_img">
					 <ul>
			            <li @mouseenter='getIndex(img.url)' v-for="img in imgUrl">
			                <img :src="img.url">
			            </li>
			        </ul>
				</div>
			</div>
			<div class="select_right">
				<h3 class="title">迷你果盒：应季流行</h3>
				<div class="price">商品价格： <span>￥16.00</span></div>
				<div class="type">
					<span>规格：</span>
					<ul>
						<li :class="{active:currIndex==0}" @click="currIndex=0">
							<img src="http://img.guocool.com/58X58//product/2017/06/19/80934ad0e13745338503c342a0481a4d.jpg"/>应季流行
						</li>
						<li :class="{active:currIndex==1}" @click="currIndex=1">
							<img src="http://img.guocool.com/58X58//product/2017/06/19/175f17cbbd6846638aedb784e0af27ad.jpg"/>特别推荐
						</li>
						<li :class="{active:currIndex==2}" @click="currIndex=2">
							<img src="http://img.guocool.com/58X58//product/2017/06/19/85f14eee1d964290b5e233a149ffe815.jpg"/>明星主打
						</li>
						<li :class="{active:currIndex==3}" @click="currIndex=3">
							<img src="http://img.guocool.com/58X58//product/2017/06/21/418376b612e84c7c80abd958be386aee.jpg"/>季节限定
						</li>
						<li :class="{active:currIndex==4}" @click="currIndex=4">
							<img src="http://img.guocool.com/58X58//product/2017/06/19/09d2f2a653d34badac1ac08e170e5152.jpg"/>特级精选
						</li>
						<li :class="{active:currIndex==5}" @click="currIndex=5">
							<img src="http://img.guocool.com/58X58//product/2017/06/19/29c0e81ce7934a989ee745633f9d82d9.jpg"/>高级赏味
						</li>
					</ul>
				</div>
				<div class="type">
					<span id="type_selec">选择品类：</span>
					<ul>
						<li :class="{active:temp==10}" @click="temp=10">福建红心柚</li>
						<li :class="{active:temp==11}" @click="temp=11">冰糖巨峰葡萄</li>
						<li :class="{active:temp==12}" @click="temp=12">甘肃花牛苹果</li>
						<li :class="{active:temp==13}" @click="temp=13">南非甜橙</li>
						<li :class="{active:temp==14}" @click="temp=14">海南千禧圣女果</li>
					</ul>
				</div>
				<div class="weight">净重：<span>120g/每盒</span></div>
				<div class="service">服务：<span>由果酷负责发货，并提供售后服务。</span></div>
				<div class="count">
					<span>数量</span>
					<div>
						<span class="reduce" @click="reduce">-</span>
						<input type="text"  value="1" v-model="count"/>
						<span class="add" @click="add">+</span>
					</div>
				</div>
				<div class="bought">
					<div class="buy"><a href="#">立即购买</a></div>
					<div class="joinCar"><a href="#"><i></i> 加入购物车</a></div>
				</div>
			</div>
		</section>
		<!--商品推荐-->
		<section class="recommend warp">
			<h5>商品推荐</h5>
			<Recommend_item></Recommend_item>
		</section>
		<!--商品介绍-->
		<section class="introduce warp">
			<h5>商品介绍</h5>
			<div>
				<img src="http://img.guocool.com/goodsdescript/2018/01/04/a1da3a789b704983bd60999a1a88e6ec.jpg"/>
				<img src="http://img.guocool.com/goodsdescript/2018/01/04/5b8eaa97fb7e45308123a27b662d25c8.gif"/>
				<img src="http://img.guocool.com/goodsdescript/2018/01/04/c5008e4469ac4864b23db1ea71d703b1.gif"/>
				<img src="http://img.guocool.com/goodsdescript/2018/01/04/a9b7ee22672e4af49ae536b7063488e1.gif"/>
				<img src="http://img.guocool.com/goodsdescript/2018/01/04/28cdd78250344f388c63adacee65639b.gif"/>
				<img src="http://img.guocool.com/goodsdescript/2018/01/04/367f84dbb64c4b1aa14372bcb1c2b703.gif"/>
				<img src="http://img.guocool.com/goodsdescript/2018/01/04/b84f48d2cc684d7ca7285b7f741fa024.gif"/>
				<img src="http://img.guocool.com/goodsdescript/2018/01/04/bd99725c179b4e17861c4fbf4ca4376b.gif"/>
				<img src="http://img.guocool.com/goodsdescript/2018/01/04/2fb73c49fc154a589b2631837dd50499.gif"/>
			</div>
		</section>
		<!--底部-->
		<Footer></Footer>
	</div>
</template>

<script>
	import Header from "../../components/header"
	import Footer from "../../components/footer"
	import Shop_item from "../../components/shop_item"
	import Recommend_item from "../../components/recommend_item"
	export default {
		data(){
			return{
				currIndex:0,
				temp:"",
				count:1,
				imgUrl: [
	                { index:1, url: require("../../assets/detailImg/bigImg1.jpg") },
	                { index:2, url: require("../../assets/detailImg/bigImg2.jpg") },
	                { index:3, url: require("../../assets/detailImg/bigImg3.jpg") },
	                { index:4, url: require("../../assets/detailImg/bigImg4.jpg") }
	            ],
				ImgUrl:require("../../assets/detailImg/bigImg1.jpg")
			}
		},
		components:{
			Header,Footer,Shop_item,Recommend_item
		},
		methods:{
			reduce(){
				if(this.count>1){
					this.count--
				}
			},
			add(){
				this.count++;
			},
			getIndex(imgUrl){
		        this.ImgUrl = imgUrl;
		    }
		}
	}
</script>

<style lang="less" scoped>
	.warp{
		width: 1200px;
		margin: 0 auto;
	}
	/*产品类型名字*/
	.model{
		overflow: hidden;
		margin: 8px auto;
		li{
			float: left;
			margin-right: 6px;
			color: #666;
			font-size: 12px;
		}
	}
	/*产品规格选择*/
	.selection{
		display: flex;
		.select_left{
			width: 430px;
			height: 500px;
			.big_img{
				width: 430px;
				height: 430px;
				img{
					width: 100%;
					height: 100%;
				}
			}
			.small_img{
				text-align: center;
				margin-top: 6px;
				overflow: hidden;
				li{
					width: 58px;
					height: 58px;
					display: inline-block;
					margin: 0 8px;
					border: 2px solid #ccc;
				}
				li:hover{
					border-color: #000;
				}
				img{
					width: 100%;
					height: 100%;
				}
			}
		}
		.select_right{
			margin-left: 20px;
			width: 750px;
			height: 500px;
			h3{
				color: #000;
				margin: 30px 0;
			}
			.price{
				margin: 15px 0 10px 0;
				padding: 5px;
				background: gainsboro;
				span{
					color: red;
				}
			}
			.type{
				font-size: 14px;
				overflow: hidden;
				margin-bottom: 10px;
				span{
					float: left;
					line-height: 36px;
				}
				ul{
					display: inline-block;
					li{
						float: left;
						padding:  2px;
						margin-right: 5px;
						font-size: 12px;
						border: 1px solid #ccc;
						img{
							width: 30px;
							height: 30px;
							vertical-align: middle;
						}
					}
					/*点击显示红色边框*/
					.active{
						border: 1px solid red;
					}
				}
			}
			.weight{
				margin-top: 25px;
				margin-bottom: 10px;
			}
			.weight,.service{
				font-size: 14px;
				span{
					font-size: 12px;
				}
			}
			.count{
				overflow: hidden;
				margin-top: 115px;
				font-size: 14px;
				>span{
					float: left;
					margin-left: 10px;
					font-weight: bold;
				}
				div{
					float: left;
					height: 26px;
					line-height: 26px;
					margin-left: 20px;
					text-align: center;
					background: gainsboro;
					span{
						float: left;
						width: 20px;
						cursor: pointer;
					}
					input{
						float: left;
						outline: none;
						width: 40px;
						height: 22px;
						text-align: center;
					}
				}
			}
			.bought{
				margin-top: 15px;
				overflow: hidden;
				div{
					float: left;
					width: 140px;
					height: 36px;
					line-height: 36px;
					text-align: center;
					margin-left: 10px;
					a{
						display: block;
					}
				}
				.buy{
					color: #E65856;
					background: pink;
					border: 1px solid #E65856;
					a{
						color: #E65856;
					}
				}
				.joinCar{
					color: #fff;
					background-color: red;
					border: 1px solid red;
					i{
						display: inline-block;
						width: 22px;
						height: 22px;
						position: relative;
						top: 6px;
						background: url(../../assets/logo/inner.png) no-repeat 0 -60px;
					}
				}
			}
		}
	}
	#type_selec{
		line-height: 25px;
	}
	/*商品推荐*/
	.recommend{
		margin-top: 40px;
		h5{
			color: red;
			font-weight: 500;
			padding: 4px 0;
			margin-bottom: 10px;
			border-bottom: 2px solid #ccc;
		}
	}
	/*商品介绍*/
	.introduce{
		h5{
			color: red;
			font-weight: 500;
			padding: 4px 0;
			margin-bottom: 10px;
			border-bottom: 2px solid #ccc;
		}
		>div{
			text-align: center;
		}
	}
	
</style>