<template>
	<div @mouseenter="fn" :class="{active:flag}">
		<slot name="subtitle"></slot>
		<div v-show="flag">
			<slot name="content"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				pro: []
			}
		},
		props: ["mark", "selected"],
		computed: {
			flag: function() {
				if(this.mark == this.selected) {
					return true;
				}
				return false;
			}
		},
		mounted() {
			this.$axios.get("../../../static/data/fruitsModel.json")
				.then(res => {
					console.log(res.data.data);
					this.pro = res.data.data;
					console.log(this.show);
					console.log(this.pro)
				}).catch(err => {
					console.log(err)
				})
		},
		methods: {
			fn() {
				this.$emit("change", this.mark);
			}
		}
	}
</script>

<style lang="less" scoped>
	/*产品模块内容*/
	.active {
		.subtitle {
			color: #fff;
			background: red;
		}
	}
</style>