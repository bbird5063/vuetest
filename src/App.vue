<template>
	<navbar></navbar>
	<my-dialog v-model:show="$store.state.auth.authVisible">
		<auth-form></auth-form>
	</my-dialog>
	<div class="app">
		<router-view></router-view>
	</div>
</template>

<script>
//import PostForm from "@/components/PostForm"
//import PostList from "@/components/PostList"
import Navbar from "@/components/Navbar"
import AuthForm from '@/components/auth/AuthForm';
export default {
	components: {
		Navbar, AuthForm,
	},
	data() {
		return {
			dialodVisible: 0,
		}
	},

	methods: {
		createPost(event) {
			const newPost = {
				id: Date.now(), // id из текущей даты
				title: this.title, // получаем из модели
				body: this.body,
			}
			this.posts.push(newPost); // добавляем к массиву posts
			this.title = this.body = '';
		},
		/*inputTitle(event) { // при помощи зарегистрированого слова $event
			this.title = event.target.value;
		},*/
		inputBody(event) {
			this.body = event.target.value;
		},
	}
}
</script>

<style>
* {
	/* полное обнуление отступов */
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

.app {
	padding: 20px;
}
</style>