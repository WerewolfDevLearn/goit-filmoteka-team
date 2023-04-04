export default function signInForm() {
  return `<button class="close-btn">
	<img src="./images/close.svg" alt="" />
</button>
<form class="auth__form" id="signup">
	<h1 class="form__title">Sign Up</h1>
	<div class="signup-form__message-error"></div>
	<div class="form__input-group">
		<input
			type="email"
			name="email"
			class="form__input"
			placeholder="E-mail"
		/>
		<svg class="email-icon">
							<use href="./images/icons.svg#icon-email"></use>
						</svg>
	</div>
	<div class="form__input-group">
		<input
			type="password"
			name="password"
			class="form__input"
			placeholder="Password"
		>
		<svg class="password-icon">
							<use href="./images/icons.svg#icon-password"></use>
						</svg>
		<svg class="show-password-icon">
			<use href="./images/icons.svg#icon-not-show-password"></use>
		</svg>
	</div>
	<button class="form__btn-submit" type="submit">Sign Up</button
	><button class="login-with-google-btn" type="button">
		Sign Up with Google
	</button>
	<p class="form__text">
		Already have account? <a
			href="#"
			class="form__link"
			id="linkSigninAccount"
			>Log In</a
		>
	</p>
	</form>`;
}
