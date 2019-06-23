<template>
	<div class="headWarp">
		<div class="filex" v-show="isShow">
			<i class="xx" @click="close"></i>
			   <el-tabs v-model="activeName" @tab-click="handleClick">
				    <el-tab-pane label="账号密码登录" name="first">
				    	
				    	<ul id="logul">
				    		<li class="logul_li">用户名/已验证手机</li>
				    		<li class="li_p">
				    			<input type="text" id="log_name"/>
				    		</li>
				    		<li class="logul_li">密码</li>
				    		<li class="li_p">
				    			<input id="log_pwd" :type="type"/>
				    		</li>
				    		<li class="link">
				    			<a href="#">忘记密码?</a>
				    			<router-link to="/resets">点击注册</router-link>
				    		</li>
				    		<li>
				    			<input type="button" id="btn" value="登 录"/>
				    		</li>
				    	</ul>
				    </el-tab-pane>
				    <el-tab-pane label="手机验证码登录" name="second">
				    	<ul id="phone_log">
				    		<li class="logul_li">
				    			已验证手机
				    		</li>
				    		<li>
				    			<input id="phone_name" type="text" />
				    		</li>
				    		<li>
				    			<Huadon></Huadon>
				    		</li>
				    		<li class="logul_li">验证码</li>
				    		<li style="margin: 10px 0;display: flex;">
				    			<input id="phone_pwd" type="text">
				    			<a id="phone_click" href="javascript:;">获取短信验证码</a>
				    		</li>
				    		<li class="link">
				    			<a href="#">忘记密码?</a>
				    			<a href="#">点击注册</a>
				    		</li>
				    		<li>
				    			<input type="button" id="btn" value="登 录"/>
				    		</li>
				    	</ul>
				    </el-tab-pane>
			  </el-tabs>
		</div>
		<header class="header">
			<div class="h_Top">
				<div class="h_Left">收藏果酷</div>
				<ul class="h_Right">
					<li>
						<a href="javascript:;" @click="login">请登录</a>
					</li>
					<li>
						<!--<a href="#">免费注册</a>-->
						<router-link to="/resets">免费注册</router-link>
					</li>
					<li>
						<!--<a href="#">我的订单</a>-->
						<router-link to="/order">我的订单</router-link>
					</li>
					<li>
						<a href="#">北京市</a><i class="icon_down"></i></li>
				</ul>
			</div>
		</header>
		<nav class="nav">
			<div class="h_Nav">
				<div class="navlist">
					<div class="logo">
						<router-link to="/home"></router-link>
					</div>
					<div class="fromNav">
						<p class="fromI"><input type="text" name="" id="" placeholder="请输入要搜索的水果" @keyup.enter="router"/></p>
						<div class="navTitle">
							<ul>
								<li v-for="(item,index) in headarr" @mouseout="fn(item)" @mouseleave="!fn(item)" :class="{active:item.ishow}">
									<a href="#">{{item.showNav}}</a>
								</li>
								<li>
									<img src="../assets/logo/phone_icon.jpg"/>
									400-6900-621
								</li>
							</ul>
						</div>
					</div>
					<div class="nCart">
						<i class="icon_cart"></i>
						<!--<a href="#">我的购物车</a>-->
						<router-link to="/shoppcar">我的购物车</router-link>
					</div>
				</div>
			</div>
		</nav>
		<div id="filter" v-show="isShow"></div>
	</div>
</template>

<script>
import	Huadon from "./huadon"
	export default {
		data() {
			return {
				 activeName: 'first',
		         type:"password",
		         isShow:false,
				headarr:[ 
				    {English:"HOME",showNav:'HOME',chinese:"首页",ishow:false},
				    {English:"SALES",showNav:'SALES',chinese:"闪购促销",ishow:false},
				    {English:"ACTIVITY",showNav:'ACTIVITY',chinese:"最新活动",ishow:false},
				    {English:"TASTE",showNav:'TASTE',chinese:"免费试吃",ishow:false}
				]
			}
		},
		components:{
    		Huadon
   		 },
		methods:{
			fn(item){
				if(item.showNav==item.English){
					item.showNav=item.chinese
					item.ishow=true;
				}else{
					item.showNav=item.English;
					item.ishow =false;
				}
			},
				 handleClick(tab,event) {
		      },
		      login(){
		      	this.isShow=true
		      },
		      close(){
		      	this.isShow=false
		      },
		      router(){
				this.$router.push("/seach");
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.el-tabs__nav-scroll{
	    font-size: 12px;
	    font-weight: bold;
	    text-indent: 10px;
	    background: #f5f5f5;
	}
	.el-tabs__content{
		overflow: none;
	}
	
	.filex{
		    width: 410px;
		    height: 334px;
		    position: fixed;
		    top: 50%;
		    left: 50%;
		    margin-top: -167px;
		    margin-left: -205px;
		    background: #fff;
		    border: solid 1px #c4c4c4;
		    z-index: 99999;
		    /*position: relative;*/
		    .xx{
			    position: absolute;
				width: 23px;
				height: 23px;
				background: url(../assets/logo/index.png)no-repeat 0 -72px;
				margin-top: 3px;
				margin-right: 3px;
				right: 5px;
				top: 5px;
				z-index: 199999;
			}
	}
	#filter{
		width: 100%;
		height: 2000px;
		position: absolute;
		top: 120px;
		left: 0px;
		opacity: 0.5;
		background: rgb(0, 0, 0);
		z-index: 1000;
	}
	 #phone_log{
	 	    font-size: 12px;
		    width: 270px;
		    margin: auto;
		    margin-top: 20px;
		    .logul_li{
	    	    color: #c0c0c0;
   				margin: 10px 0;
	   		 }
		    #phone_name{
		    	    width: 233px;
				    padding: 6px 30px 6px 5px;
				    border: solid 1px #e1e1e1;
				    background: url(../assets/logo/index.png)no-repeat 241px -100px;
				    margin-bottom: 13px
		    }
		    #phone_pwd{
		    	width: 133px;
				padding: 6px 30px 6px 5px;
				border: solid 1px #e1e1e1;
				background: url(../assets/logo/index.png)no-repeat 142px -126px;
		    }
		    #phone_click {
			    border: 1px solid #ddd;
			    background: #ddd;
			    padding: 6px;
			    text-align: center;
			    color: #666666;
			    
			}
			#phone_click:hover{
				color: red;
			}
			.link{
	    		margin:10px 0;
		    	a{
		    		margin-right: 10px;
		    		color: #005aa4;
		    	}
	    	}
	   		 #btn{
	    	    width: 270px;
			    height: 35px;
			    border: 0px;
			    border-top: solid 1px #f7c47b;
			    border-bottom: solid 1px #f7c47b;
			    background: #e51e13;
			    color: #fff;
			    font-size: 16px;
			    cursor: pointer
	    	}
	 }
	#logul{
		font-size: 12px;
	    width: 270px;
	    margin: auto;
	    margin-top: 20px;
	    .logul_li{
	    	    color: #c0c0c0;
   				margin-bottom: 5px
	    }
	    #log_name{
	    	width: 233px;
			padding: 6px 30px 6px 5px;
			border: solid 1px #e1e1e1;
			background: url(../assets/logo/index.png)no-repeat 241px -100px;
			margin-bottom: 8px
	    }
	    #log_pwd{
	    	width: 233px;
		    padding: 6px 30px 6px 5px;
		    border: solid 1px #e1e1e1;
		    background: url(../assets/logo/index.png)no-repeat 241px -126px;
	    }
	    .link{
	    	margin:10px 0;
	    	a{
	    		margin-right: 10px;
	    		color: #005aa4;
	    	}
	    }
	    #btn{
	    	    width: 270px;
			    height: 35px;
			    border: 0px;
			    border-top: solid 1px #f7c47b;
			    border-bottom: solid 1px #f7c47b;
			    background: #e51e13;
			    color: #fff;
			    font-size: 16px;
			    cursor: pointer
	    }
	}
	.headWarp {
		width: 100%;
		position: fixed;
		top: 0;
		z-index: 55;
		background: #FFFFFF;
		.header {
			border-bottom: 1px solid #ccc;
			height: 30px;
			font-size: 12px;
			.h_Top {
				width: 1200px;
				margin: 0 auto;
				position: relative;
				.h_Left {
					float: left;
					line-height: 30px;
					padding-left: 20px;
					&:before {
						content: '';
						display: block;
						position: absolute;
						left: 0;
						top: 3px;
						width: 20px;
						height: 20px;
						background: url(../assets/logo/index.png) left 3px;
					}
				}
			}
			.h_Right {
				float: right;
				>li {
					list-style: none;
					float: left;
					line-height: 30px;
					padding: 0 10px 0 22px;
					margin: 0 10px;
					position: relative;
					a {
						text-decoration: none;
						color: #666;
						&:hover{
							color: #FF0000;
						}
					}
					&:before {
						content: '';
						display: block;
						width: 20px;
						height: 20px;
						position: absolute;
						left: 0;
						top: 3px;
						background: url(../assets/logo/login_icon.jpg)no-repeat;
					}
					&:nth-of-type(2) {
						&:before {
							background: url(../assets/logo/register_icon.jpg)no-repeat;
						}
					}
					&:nth-of-type(3) {
						&:before {
							background: url(../assets/logo/order_icon.jpg)no-repeat;
						}
					}
					&:nth-of-type(4) {
						&:before {
							background: url(../assets/logo/city_icon.jpg)no-repeat;
						}
					}
					.icon_down {
						width: 16px;
						height: 16px;
						position: absolute;
						right: -10px;
						bottom: 0;
						background: url(../assets/logo/san_k.png)no-repeat;
					}
				}
			}
		}
	}
	
	.nav {
		height: 80px;
		padding-bottom:10px;
		.h_Nav {
			margin: 0 auto;
			width: 1200px;
			.navlist {
				display: flex;
				justify-content: space-between;
			}
			.logo {
				width: 145px;
				height: 72px;
				background: url(../assets/logo/logo.png)-61px 0 no-repeat;
				a {
					display: block;
					width: 100%;
					height: 100%;
				}
			}
		}
	}
	
	.fromNav {
		padding: 20px 0;
		position: relative;
		.fromI {
			width: 350px;
			height: 22px;
			border-radius: 10px;
			border: 1px solid #ccc;
			padding: 0 5px;
			input {
				border: 0;
				outline: none;
				width: 100%;
				text-indent: .2em;
				font-size: 12px;
				line-height:16px;
			}
		}
	}
	.navTitle {
		width: 750px;
		display: flex;
		padding-top: 20px;
		justify-content: space-between;
		align-items: center;
		position: absolute;
		left:-60%;
		top: 60%;
		font-size: 16px;
		box-sizing: border-box;
		>ul {
			display: flex;
			margin-right: 100px;
			align-items: center;
			li{
				width: 80px;
				padding: 0 5px;
				margin: 0 10px;
				text-align: center;
				a {
					color: #333;
				}
				&.active a{
					color: #FF0000;
				}
				&:nth-of-type(5){
					width:150px;
					margin-left: 173px;
					>img{
						vertical-align:-4px;
					}
				}
			}
		}
	}
	.nCart{
		margin-top: 30px;
		position: relative;
		i{
			position: absolute;
			left: -8px;
			top:1px;
			width: 30px;
			height: 25px;
			background: url(../assets/logo/index.png)left -47px no-repeat;
		}
		a{
			padding-left: 20px;
			color: #666;
			font-size: 14px;
			&:hover{
				color: #FF0000;
			}
		}
	}
</style>