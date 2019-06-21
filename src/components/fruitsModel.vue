<template>
	<div>
		<section class="produList">
			<div>专利分格</div>
			<el-tabs v-model="activeName" @tab-click="handleClick">
				<el-tab-pane label="专利分格" name="a">
					<Model_itema>
						<div class="listLeft" slot="listLeft"><img src="../assets/mallImg/recommend_img1.jpg" /></div>
					</Model_itema>
				</el-tab-pane>
				<el-tab-pane label="超级果盒" name="b">
					<Model_itemb>
						<div class="listLeft" slot="listLeft"><img src="../assets/mallImg/recommend_img1.jpg" /></div>
					</Model_itemb>
				</el-tab-pane>
				<el-tab-pane label="三分果盒" name="c">
					<Model_itemc>
						<div class="listLeft" slot="listLeft"><img src="../assets/mallImg/recommend_img1.jpg" /></div>
					</Model_itemc>
				</el-tab-pane>
				<el-tab-pane label="两分果盒" name="d">
					<Model_itemd>
						<div class="listLeft" slot="listLeft"><img src="../assets/mallImg/recommend_img1.jpg" /></div>
					</Model_itemd>
				</el-tab-pane>
				<el-tab-pane label="两分果盒" name="e">
					<Model_iteme>
						<div class="listLeft" slot="listLeft"><img src="../assets/mallImg/recommend_img1.jpg" /></div>
					</Model_iteme>
				</el-tab-pane>
			</el-tabs>
		</section>
		<section class="produList">
			<div>彩虹果杯</div>
			<el-tabs v-model="activeName" @tab-click="handleClick">
				<el-tab-pane label="彩虹果杯" name="a">
					<Model_itemf>
						<div class="listLeft" slot="listLeft"><img src="../assets/mallImg/recommend_img2.jpg" /></div>
					</Model_itemf>
				</el-tab-pane>
				<el-tab-pane label="大型果杯" name="b">
					<Model_itemb>
						<div class="listLeft" slot="listLeft"><img src="../assets/mallImg/recommend_img2.jpg" /></div>
					</Model_itemb>
				</el-tab-pane>
				<el-tab-pane label="中型果杯" name="c">
					<Model_itemc>
						<div class="listLeft" slot="listLeft"><img src="../assets/mallImg/recommend_img2.jpg" /></div>
					</Model_itemc>
				</el-tab-pane>
				<el-tab-pane label="标准果杯" name="d">
					<Model_itemd>
						<div class="listLeft" slot="listLeft"><img src="../assets/mallImg/recommend_img2.jpg" /></div>
					</Model_itemd>
				</el-tab-pane>
				<el-tab-pane label="迷你果杯" name="e">
					<Model_iteme>
						<div class="listLeft" slot="listLeft"><img src="../assets/mallImg/recommend_img2.jpg" /></div>
					</Model_iteme>
				</el-tab-pane>
			</el-tabs>
		</section>
	</div>
</template>

<script>
	import Model_itema from "../pages/mall/model_itema"
	import Model_itemb from "../pages/mall/model_itemb"
	import Model_itemc from "../pages/mall/model_itemc"
	import Model_itemd from "../pages/mall/model_itemd"
	import Model_iteme from "../pages/mall/model_iteme"
	import Model_itemf from "../pages/mall/model_itemf"
	export default {
		data() {
			return {
				pro: [],
				activeName: 'a'
			}
		},
		components: {
			Model_itema,
			Model_itemb,
			Model_itemc,
			Model_itemd,
			Model_iteme,
			Model_itemf
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			}
		}
	}
</script>

<style lang="less" scoped>
	/*产品模块*/
	
	.produList {
		width: 1200px;
		margin: 50px auto;
		text-align: center;
	}
	
	.produList:hover {
		box-shadow: 0 0 6px gainsboro;
	}
</style>