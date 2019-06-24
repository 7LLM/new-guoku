<template>
	<div>
		<!--头部-->
		<Header></Header>
		<!--导航区-->
		<Shop_item></Shop_item>
		<!--轮播区-->
		<section class="banner">
			<Banner swiperid="homeswiper" paginationtype="bullets" effecttype="fade" :autoplaytype=true :looptype=false>
				<div slot="swiper_con" class="swiper-slide">
					<img src="http://img.guocool.com/product/2018/06/20/2a2ee8051a4549e88550db03fb96cca9.jpg" />
				</div>
				<div slot="swiper_con" class="swiper-slide">
					<img src="http://img.guocool.com/product/2018/08/29/83c606b70b8e434facacd0763557f924.jpg" />
				</div>
				<div slot="swiper_con" class="swiper-slide">
					<img src="http://img.guocool.com/product/2018/04/23/b5ab0362f1c24158803d747997bdc238.jpg" />
				</div>
				<div slot="swiper_con" class="swiper-slide">
					<img src="http://img.guocool.com/product/2017/06/14/a88b9ea29b174f6296c12d86672935b6.jpg" />
				</div>
			</Banner>
		</section>
		<!--广告区-->
		<section class="advertisement">
			<img src="../../assets/logo/index_ad.jpg" />
			<div class="adv_img">
				<a href="#" @mouseover="isShow=1" @mouseout="isShow=0">
					<img src="../../assets/mallImg/index_ad1.jpg" />
					<div class="adv_mask" :class="{ active:isShow==1}">
						<b>企业日配福利</b><br />
						提供高性价比水果及下午茶配送服务<br />
						<span>Provide cost-effective fruit and afternoon tea delivery service</span>
					</div>
				</a>
				<a href="#" @mouseover="isShow=2" @mouseout="isShow=0">
					<img src="../../assets/mallImg/index_ad2.jpg" />
					<div class="adv_mask" :class="{ active:isShow==2}">
						<b>茶歇活动礼品</b><br />活动摆台，会议茶歇，节日礼品一站式服务<br />
						<span>Activity setting, conference tea break, holiday gift one-stop service</span>
					</div>
				</a>
				<a href="#" @mouseover="isShow=3" @mouseout="isShow=0">
					<img src="../../assets/mallImg/index_ad3.jpg" />
					<div class="adv_mask" :class="{ active:isShow==3}">
						<b>新零售合作</b><br />提供即食鲜果类完整产品解决方案<br />
						<span>Provide complete product solutions for the most professional and available fresh fruits</span>
					</div>
				</a>
			</div>
		</section>
		<!--产品模块-->
		<FruitsModelA>
			<div slot="title" class="produ_title"><i></i><span>》专利分格</span></div>
			<a slot="more" class="more">更多>> </a>
		</FruitsModelA>
		<FruitsModelB>
			<div slot="title" class="produ_title"><i class="i_icon2"></i><span>》彩虹果杯</span></div>
			<a slot="more" class="more">更多>> </a>
		</FruitsModelB>
		<FruitsModelC>
			<div slot="title" class="produ_title"><i class="i_icon3"></i><span>》特别定制</span></div>
			<a slot="more" class="more">更多>> </a>
		</FruitsModelC>
		<!--侧边导航-->
		<section class="side_nav" v-if="btnFlag">
			<ul>
				<li @mouseenter="currIndex=1" @mouseleave="currIndex=9">
					<a href="#"><i class="server"></i></a>
					<div class="hide" :class="{active:currIndex==1}">企业在线</div>
				</li>
				<li @mouseenter="currIndex=2" @mouseleave="currIndex=9">
					<a href="#"><i class="service"></i></a>
					<div class="hide" :class="{active:currIndex==2}">在线客服</div>
				</li>
				<li @mouseenter="currIndex=3" @mouseleave="currIndex=9">
					<a href="#"><i class="phone"></i></a>
					<div class="hide" :class="{active:currIndex==3}">400-6900-621</div>
				</li>
				<li @mouseenter="currIndex=4" @mouseleave="currIndex=9">
					<a href="#"><i class="wechat"></i></a>
					<div class="hide2" :class="{active:currIndex==4}">
						<img src="../../assets/logo/weixin.png" />
					</div>
				</li>
				<li class="toTopLi" @click="backTop">
					<a href="javascript:;"><i class="toTop"></i></a>
				</li>
			</ul>
		</section>
		<!--底部-->
		<Footer></Footer>
	</div>
</template>

<script>
	import Header from "../../components/header"
	import Footer from "../../components/footer"
	import Banner from "../../components/banner"
	import Shop_item from "../../components/shop_item"
	import FruitsModelA from "./fruitsModelA"
	import FruitsModelB from "./fruitsModelB"
	import FruitsModelC from "./fruitsModelC"
	
	export default {
		data(){
			return{
				isShow:0,
				currIndex: 9,
				btnFlag: false
			}
		},
		components: {
			Header,
			Footer,
			Banner,
			FruitsModelA,
			FruitsModelB,
			FruitsModelC,
			Shop_item
		},
		mounted() {
				window.addEventListener('scroll', this.scrollToTop)
			},
			destroyed() {
				window.removeEventListener('scroll', this.scrollToTop)
			},
			methods: {
				backTop() {
					let that = this
					let timer = setInterval(() => {
						let ispeed = Math.floor(-that.scrollTop / 5)
						document.documentElement.scrollTop = document.body.scrollTop = that.scrollTop + ispeed
						console.log(ispeed)
						if(that.scrollTop === 0) {
							clearInterval(timer)
						}
					}, 16)
				},
				scrollToTop() {
					let that = this
					let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
					that.scrollTop = scrollTop
					if(that.scrollTop > 200) {
						that.btnFlag = true
					} else {
						that.btnFlag = false
					}
				}
			}
	}
</script>

<style lang="less">
	/*头部*/
	
	.headWarp {
		z-index: 99;
		background: #fff;
	}
	/*导航区*/
	
	.nav2 {
		margin-top: 122px;
		padding-left: 220px;
		box-sizing: border-box;
		width: 100%;
		height: 35px;
		line-height: 35px;
		color: #fff;
		background: #FF0000;
		ul {
			overflow: hidden;
			li {
				float: left;
				margin-right: 50px;
				a {
					display: block;
					color: #fff;
					padding: 0 8px;
				}
			}
			.all_list {
				img {
					vertical-align: middle;
				}
			}
		}
	}
	/*轮播区,切换方式要改。。。*/
	
	.banner {
		.swiper-container {
			width: 100%;
			img {
				width: 100%;
			}
		}
	}
	/*广告区*/
	
	.advertisement {
		text-align: center;
		.adv_img {
			a {
				display: inline-block;
				margin-right: 5px;
				position: relative;
				transition: all 0.4s;
				.adv_mask{
					transition: all 0.4s;
					position: absolute;
					top: 0;
					left: 0;
					color: #000;
					width: 380px;
					height: 310px;
					padding-top: 30%;
					box-sizing: border-box;
					opacity: .8;
					background: #fff;
					display: none;
					span{
						color: #666;
					}
				}
			}
			div.active{
				display: block;
				transition: all 0.4s;
				animation: move 0.2s;
			}
			@keyframes move{
				0%{top: 310px;}
				20%{top: 250px;}
				40%{top: 190px;}
				60%{top: 130px;}
				80%{top: 70px;}
				100%{top: 0px;}
			}
		}
		
	}
	/*产品列表模块*/
	
	.produ_title {
		float: left;
		i {
			display: inline-block;
			width: 35px;
			height: 35px;
			background: url(../../assets/logo/icon_goods_1.png) no-repeat;
		}
		.i_icon2{
			background-image: url(../../assets/logo/icon_goods_2.png);
		}
		.i_icon3{
			background-image: url(../../assets/logo/icon_goods_4.png);
		}
		span {
			position: relative;
			top: -6px;
		}
	}
	.more{
		float: right;
		font-size: 12px;
		color: #666;
		margin-top: 20px;
	}
	
	/*侧边导航*/
	.side_nav {
		height: 100%;
		width: 40px;
		position: fixed;
		right: 0;
		top: 0;
		z-index: 6;
		background: #fff;
		ul {
			height: 60%;
			width: 40px;
			position: absolute;
			left: 0;
			bottom: 0;
			li {
				margin: 20px 0;
				position: relative;
				a {
					display: block;
					width: 40px;
					height: 40px;
					i {
						display: block;
						width: 34px;
						height: 20px;
						background: url(../../assets/logo/icon_enterprise.png) no-repeat;
					}
					.service {
						height: 26px;
						background-image: url(../../assets/logo/icon_service.png);
					}
					.phone {
						background-image: url(../../assets/logo/icon_phone.png);
					}
					.wechat {
						background-image: url(../../assets/logo/icon_weixin.png);
					}
					.toTop {
						height: 30px;
						background-image: url(../../assets/logo/icon_top.png);
					}
				}
				.hide {
					color: #fff;
					font-size: 14px;
					width: 140px;
					height: 40px;
					line-height: 40px;
					background: red;
					text-indent: 10px;
					position: absolute;
					top: 0;
					left: -100px;
					display: none;
				}
				.hide2 {
					width: 182px;
					height: 100px;
					position: absolute;
					top: -42px;
					left: -193px;
					display: none;
				}
			}
			.toTopLi {
				position: absolute;
				left: 0;
				bottom: 0;
			}
			div.active {
				display: block;
			}
		}
	}
	
	/*底部*/
	
	.footerWarp {
		position: relative;
	}
</style>