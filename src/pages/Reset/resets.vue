<template>
	<div>
		<Header></Header>
		<Shop_item ></Shop_item>
		<div class="bjc">
			<ul id="regist">
				<li class="list" style="text-align: center;">
					<h1>用户注册</h1>
				</li>
				<li class="list">
					<span>*</span><label>手机号:</label>
					<input type="text" style="margin-left: 36px;" v-model="content"/>
				</li>
				<li class="ts" v-show="isShow">手机号码不正确</li>
				<li class="list" style="display: flex;">
					<span>*</span><label>滑动验证:</label>
					<Huadon @cl="change"></Huadon>
				</li>
				<li class="ts" v-show="b">为了您的账户安全，请拖动滑块完成验证</li>
				<li class="list">
					<span>*</span><label>手机验证:</label>
					<input type="text" class="yz"/>
					<input type="button" class="btn" :value="value" @click="time"/>
				</li>
				<li>
					<input type="checkbox" />
					我已阅读并同意<span style="color: #3f9fff;"><果酷用户注册协议></span>
				</li>
				<li style="margin-left: 20px;">
					已经是果酷会员？<span style="color: #3f9fff;">立即登录</span>
				</li>
				<li>
					<a href="javascript:;" class="reg_btn" @click="btn">立即登录</a>
				</li>
			</ul>
		</div>
		<Footer></Footer>
	</div>
</template>
<script>
	import	Footer from "../../components/footer"
	import	Header from "../../components/header"
	import	Shop_item from "../../components/shop_item"
	import	Huadon from "../../components/huadon"
	export default{
		data(){
			return{
				content:"",
				isShow:false,
				value:"获取短信验证码",
				timer:null,
				show:true,
				a:false,
				b:false,
				num:60
			}
		},
		components:{
			Footer,Header,Shop_item,Huadon
		},
		methods:{
			btn(){
				var reg=new RegExp(/^13[578]\d{8}$/)
				if(reg.test(this.content)){
					this.isShow=false
				}else{
					this.isShow=true
				}
			},
			change(val){
				this.a=val
			},
			time(){
				if(this.show){
					if(this.a){
							this.timer=setInterval(()=>{
							this.show=false
							this.b=false
							this.value=this.num--+"s重新获取验证码"
							if(this.num<0){
								this.value="获取短信验证码"
								this.num=60
								clearInterval(this.timer)
								this.show=true	
							}
						},1000)
					}else{
						this.b=true
					}
					
				}
			
			}
		}
	}
</script>
<style lang="less">
	*{
		padding: 0;
		margin: 0;
	}
	.bjc{
		background-image: url(../../assets/reset/test_cm.jpg);
    	background-size: 100%;
    	height: 700px
	}
	.reg_btn{
		width: 233px;
    	height: 50px;
       	background: rgb(229, 30, 19);
	    color: #fff;
	    display: block;
	    line-height: 50px;
	    text-align: center;
	    margin-top: 8px
	}
	#regist {
	    width: 420px;
	    height: 100%;
	    margin: auto;
	    padding: 100px 0px 40px 0px;
	    li>span{
	    	color: red;
	    }
	    li{
	    	margin: 10px 0 ;
	    }
	    .list{
	    	height: 40px;
	    	line-height: 40px;
	    	
	    	label{
	    		width: 100px;
	    	}
	    	input{
	    		width: 256px;
	    		padding-left: 10px;
	    		height: 30px;
	    		margin-left: 20px;
	    		outline: none;
	    	}
	    	.yz{
	    		width: 110px;
	    	}
	    	.btn{
	    		width: 136px;
	    		padding: 0;
	    		margin: 0;
	    		background: red;
	    		color: #fff;
	    		border: none;
	    		height: 34px;
	    	}
	    	
	    }
	    .ts{
	    	font-size: 12px;
	    	color: red;
	    	margin-left: 110px;
	    }
	}
	
</style>