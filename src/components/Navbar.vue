<template>
	<div class="navbar">
		<div @click="$router.push('/')">Vue 3</div>
		<div class="navbar__btns">
			<my-button @click="$router.push('/')">Main</my-button>
			<my-button style="margin-left: 20px" @click="openAuthModal">Вход</my-button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {

		};
	},
	methods: {
		openAuthModal() {
			this.$store.commit('auth/setAuthVisible', true);
			this.$store.commit('auth/setCurrModal', 'login-modal-content');
		},

	},
}
</script>

<style scoped>
.navbar {
	height: 50px;
	background-color: lightgray;
	box-shadow: 2px 2px 4px gray;
	display: flex;
	align-items: center;
	padding: 0 15px;
}

.navbar__btns {
	margin-left: auto;
}
</style>
