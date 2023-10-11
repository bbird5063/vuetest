<template>
	<!-- Modal -->

	<!-- START LOGIN -->
	<!-- <div v-show="$store.state.auth.currModal == 'login-modal-content'" id="login-modal-content" class="modal-content"> -->
	<transition name="spab">
		<div v-show="$store.state.auth.currModal == 'login-modal-content'" id="login-modal-content"
			class="dialog__content modal-content">
			<div class="modal-header">
				<h5 class="modal-title">Вход в аккаунт</h5>
				<button type="button" @click="clearFields" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>
			<div class="modal-body">
				<form action="" method="post" id="Login-Form" role="login-modal-content">
					<div class="input-group mb-3">
						<span class="input-group-text"><i class="fa fa-user"></i></span>
						<input id="login-login" name="form[login]" type="text" class="form-control" aria-label="Username"
							aria-describedby="login-login" placeholder="Введите логин">
					</div>
					<div class="input-group mb-3">
						<span class="input-group-text"><i class="fa fa-lock"></i></span>
						<input name="form[password]" type="password" class="form-control input-lg" placeholder="Введите пароль"
							required data-parsley-length="[8, 16]" data-parsley-trigger="keyup" autocomplete="off" />
						<span class="input-group-text"><i class="fa fa-eye"></i></span>
					</div>
					<div class="checkbox">
						<input name="form[remember]" class="form-check-input" type="checkbox" value="1" id="flexCheckDefault" />
						<label class="form-check-label" for="flexCheckDefault">Запомнить меня</label>
					</div>
					<div class="d-grid gap-2">
						<button name="ok" value="1" type="submit" class="btn btn-success btn-block btn-lg">
							Вход
						</button>
					</div>
				</form>
			</div>
			<div class="modal-footer">
				<p>
					<a id="FPModal" @click.prevent="$store.commit('auth/setCurrModal', 'forgot-password-modal-content')"
						href="#">Забыли пароль?</a>
					|
					<a id="signupModal" @click.prevent="$store.commit('auth/setCurrModal', 'signup-modal-content')"
						href="#">Регистрация</a>
				</p>
			</div>
		</div>
	</transition>
	<!-- END LOGIN -->

	<!-- START SIGNUP -->
	<!-- <div v-if="$store.state.auth.currModal == 'signup-modal-content'" id="signup-modal-content" class="modal-content"> -->
	<transition name="spab">
		<div v-if="$store.state.auth.currModal == 'signup-modal-content'" id="signup-modal-content"
			class="dialog__content modal-content">
			<div class="modal-header">
				<h5 class="modal-title">
					Регистрация
				</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>
			<div class="modal-body">
				<form action="" method="post" id="Signin-Form" role="signup-modal-content">
					<div class="input-group mb-3">
						<span class="input-group-text"><i class="fa fa-user"></i></span>
						<input id="signin-login" name="form[login]" type="text" class="form-control" aria-label="Username"
							aria-describedby="login-login" placeholder="Введите логин">
					</div>
					<div class="input-group mb-3">
						<span class="input-group-text"><i class="fa fa-envelope"></i></span>
						<input name="form[email]" type="text" class="form-control" aria-label="Email" aria-describedby="login-login"
							placeholder="Введите Email" required data-parsley-type="email">
					</div>
					<div class="input-group mb-3">
						<span class="input-group-text"><i class="fa fa-lock"></i></span>
						<input name="form[password]" type="password" class="form-control input-lg" placeholder="Введите пароль"
							required data-parsley-length="[8, 16]" data-parsley-trigger="keyup" autocomplete="off" />
						<span class="input-group-text"><i class="fa fa-eye"></i></span>
					</div>
					<div class="input-group mb-3">
						<span class="input-group-text"><i class="fa fa-lock"></i></span>
						<input name="form[password2]" type="password" class="form-control input-lg" placeholder="Повторите пароль"
							required data-parsley-length="[8, 16 ]" data-parsley-trigger="keyup" autocomplete="off" />
						<span class="input-group-text"><i class="fa fa-eye"></i></span>
					</div>
					<div class="d-grid gap-2">
						<button name="ok" value="1" type="submit" class="btn btn-success btn-block btn-lg">
							Создать аккаунт
						</button>
					</div>
				</form>
			</div>
			<div class="modal-footer">
				<p>
					Имеете аккаунт?
					<a id="signupModal" @click.prevent="$store.commit('auth/setCurrModal', 'login-modal-content')" href="#">
						Войти в аккаунт</a>
				</p>
			</div>
		</div>
	</transition>
	<!-- END SIGNUP -->

	<!-- START FORGOT PASSWORD -->
	<!-- <div v-show="$store.state.auth.currModal == 'forgot-password-modal-content'" id="forgot-password-modal-content" class="modal-content"> -->
	<transition name="spab">
		<div v-show="$store.state.auth.currModal == 'forgot-password-modal-content'" id="forgot-password-modal-content"
			class="dialog__content modal-content">
			<div class="modal-header">
				<h5 class="modal-title">Установка доступа</h5>
				<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
			</div>
			<div class="modal-body">
				<form action="" method="post" role="forgot-password-modal-content">
					<div class="input-group mb-3">
						<span class="input-group-text"><i class="fa fa-user"></i></span>
						<input id="forgot-login" name="form[login]" type="text" class="form-control" aria-label="Username"
							aria-describedby="login-login" placeholder="Введите логин">
					</div>
					<div class="input-group mb-3">
						<span class="input-group-text"><i class="fa fa-envelope"></i></span>
						<input name="form[email]" type="text" class="form-control" aria-label="Email" aria-describedby="login-login"
							placeholder="Введите Email" required data-parsley-type="email">
					</div>
					<div class="d-grid gap-2">
						<button name="ok" value="1" type="submit" class="btn btn-success btn-block btn-lg">
							Отправить
						</button>
					</div>
				</form>
			</div>
			<div class="modal-footer">
				<p>
					Вспомнили пароль?
					<a id="signupModal" @click.prevent="$store.commit('auth/setCurrModal', 'login-modal-content')" href="#">
						Войти в аккаунт</a>
				</p>
			</div>
		</div>
	</transition>
	<!-- END FORGOT PASSWORD -->
</template>

<script>
// import axios from 'axios';
// import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
export default {

	data() {
		return {
			isLoading: false,
		}
	},


	methods: {},

};
</script>

<style scoped>
.dialog__content {
	/* типа само окно: белое */
	/*margin: auto;*/
	background: white;
	border-radius: 12px;
	min-height: 50px;
	min-width: 300px;
	padding: 20px;
}



.spab-item {
	display: inline-block;
	margin-right: 10px;
}

.spab-enter-active,
.spab-leave-active {
	transition: all 0.4s ease;
}

.spab-enter-from,
.spab-leave-to {
	opacity: 0;
	transform: translateY(-130px);
}

.spab-move {
	transition: transform 0.4s ease;
}
</style>
