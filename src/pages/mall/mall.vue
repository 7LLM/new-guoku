<template>
	<div>
		<!--头部-->
		<Header></Header>
		<!--导航区-->
		<Shop_item></Shop_item>
		<!--<nav class="nav2">
			<ul>
				<li class="all_list"><a href="#">全部商品分类 <img src="../../assets/logo/nav_all_classify.png"/></a></li>
				<li><a href="#">首页</a></li>
				<li><a href="#">闪购促销</a></li>
				<li><a href="#">最新活动</a></li>
				<li><a href="#">免费试吃</a></li>
			</ul>
		</nav>-->
		<!--轮播区-->
		<section class="banner">
			<Banner swiperid="homeswiper" paginationtype="bullets" effecttype="coverflow" :autoplaytype=true :looptype=false>
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
			<img src="../../assets/logo/index_ad.jpg"/>
			<div class="adv_img">
				<a href="#"><img src="../../assets/mallImg/index_ad1.jpg"/></a>
				<a href="#"><img src="../../assets/mallImg/index_ad2.jpg"/></a>
				<a href="#"><img src="../../assets/mallImg/index_ad3.jpg"/></a>
			</div>
		</section>
		<!--产品模块-->
		<section class="produList">
			<FruitsModel></FruitsModel>
		</section>
		<!--底部-->
		<Footer></Footer>
	</div>
</template>

<script>
	import Header from "../../components/header"
	import Footer from "../../components/footer"
	import Banner from "../../components/banner"
	import FruitsModel from "../../components/fruitsModel"
	import Shop_item from "../../components/shop_item"
	export default {
		components:{
			Header,Footer,Banner,FruitsModel,Shop_item
		}
  }
</script>

<style lang="less">
	/*头部*/
	.headWarp{
		z-index: 99;
		background: #fff;
	}
	/*导航区*/
	.nav2{
		margin-top: 122px;
		padding-left: 220px;
		box-sizing: border-box;
		width: 100%;
		height: 35px;
		line-height: 35px;
		color: #fff;
		background: #FF0000;
		ul{
			overflow: hidden;
			li{
				float: left;
				margin-right: 50px;
				a{
					display: block;
					color: #fff;
					padding: 0 8px;
				}
			}
			.all_list{
				img{
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
	.advertisement{
		text-align: center;
		.adv_img{
			a{
				display: inline-block;
				margin-right: 5px;
			}
		}
	}
	/*产品列表模块*/
	.produList{
		width: 1200px;
		margin: 0 auto;
		text-align: center;
	}
	.produ_title{
		height: 35px;
		line-height: 35px;
		border-bottom: 3px solid #E51E13;
		>div{
			float: left;
			&::before{
				content: '';
				display: inline-block;
				clear: both;
				width: 35px;
				height: 35px;
				background: url(../../assets/logo/icon_goods_1.png) no-repeat;
			}
			span{
				position: relative;
    			bottom: 11px;
    			color: #616161;
			}
		}
		.subtitle{
			overflow: hidden;
			float: left;
			margin-left: 25%;
			li{
				float: left;
				margin-right: 10px;
			}
		}
	}
	/*底部*/
	.footerWarp{
		position: relative;
	}
</style>