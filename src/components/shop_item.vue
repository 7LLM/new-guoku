<template>
	<div class="shop_item">
		<div class="warp item">
			<div id="shoop">
				<h3 class="all">全部商品分类 <img style="vertical-align: middle;" src="../assets/logo/nav_all_classify.png"/></h3>
				<ul class="content">
					<!--<li v-for="item in arr">
						<i></i>
						<a href="#">{{item.shoop}}</a>
						<span>></span>
					</li>-->
					<li><a href="#"><i class="demo demo1"></i>专利分格</a><span>></span></li>
					<li><a href="#"><i class="demo demo2"></i>彩虹过杯</a><span>></span></li>
					<li><a href="#"><i class="demo demo3"></i>特别定制</a><span>></span></li>
					<li><a href="#"><i class="demo demo4"></i>创意果切</a><span>></span></li>
					<li><a href="#"><i class="demo demo5"></i>节日精选</a><span>></span></li>
					<li><a href="#"><i class="demo demo6"></i>进口水果</a><span>></span></li>
					<li><a href="#"><i class="demo demo7"></i>国产水果</a><span>></span></li>
				</ul>
			</div>
			
			<ul class="list">
				<li>
					<router-link to="/home">首页</router-link>
				</li>
				<li>
					<a href="#">闪购促销</a>
				</li>
				<li>
					<a href="#">最新活动</a>
				</li>
				<li>
					<a href="#">免费试吃</a>
				</li>
			</ul>
		</div>
		
	</div>
</template>
<script>
	export default{
		data(){
			return{
				arr:[
					{shoop:"专利分格"},
					{shoop:"彩虹过杯"},
					{shoop:"特别定制"},
					{shoop:"创意果切"},
					{shoop:"节日精选"},
					{shoop:"进口水果"},
					{shoop:"国产水果"}
				]
			}
		}
		
	}
</script>
<style lang="less" scoped="scoped">
	.shop_item{
		margin-top: 140px;
		background: red;
		height: 40px;
		line-height: 40px;
	}
	.item{
		display: flex;
	}
	.list{
		display: flex;
		
	}
	.list>li:hover{
		background: #eb9621;
	
	}
	
	.list>li{
		width: 80px;
		text-align: center;
	}
	a{
		color: #fff;
	}
	.content{
		display: none;
		background: red;
		position: absolute;
		width: 200px;
		z-index: 99;
	}
	.content>li{
		display: flex;
		justify-content: space-around;
		line-height: 60px;
		height: 60px;
		z-index: 1;
		color: #fff;
	}
	.content>li a{
			display: inline-block;
	}
	.content>li .demo{
			display: inline-block;
			width: 35px;
			height: 26px;
			background: url(../assets/logo/category.png) no-repeat;
			background-position: 1px 7px;
	}
	.content>li .demo2{
		background-position: 1px -26px;
	}
	.content>li .demo3{
		background-position: 1px -53px;
	}
	.content>li .demo4{
		background-position: 1px -83px;
	}
	.content>li .demo5{
		background-position: 1px -112px;
	}
	.content>li .demo6{
		background-position: 1px -140px;
	}
	.content>li .demo7{
		background-position: 1px -167px;
	}
	.content>li:hover{
		background: #fff;
		color: #FF0000;
		.demo1{
			background-position: -30px 7px;
		}
		.demo2{
			background-position: -30px -26px;
		}
		.demo3{
			background-position: -26px -53px;
		}
		.demo4{
			background-position: -26px -83px;
		}
		.demo5{
			background-position: -26px -112px;
		}
		.demo6{
			background-position: -26px -140px;
		}
		.demo7{
			background-position: -26px -169px;
		}
	}
	.content>li:hover a{
		color: #FF0000;
		text-decoration: underline;
	}
	#shoop{
		position: relative;
	}
	.all{
			margin-right:80px;
			color: #fff;
		}
	#shoop:hover> .content{
		display: block;
	}
</style>