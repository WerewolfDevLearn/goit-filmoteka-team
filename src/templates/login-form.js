export default function logInForm() {
  return `<button class="close-btn">
  <img src="./images/close.svg" alt="" />
</button>
<form class="auth__form" id="login">
  <h1 class="form__title">Log In</h1>
  <div class="login-form__message-error"></div>
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
    <div class="form__input-error-message is-hidden">Invalid email</div>
  </div>
  <div class="form__input-group">
    <input
      type="password"
      name="password"
      class="form__input"
      placeholder="Password"
    />
    <svg class="password-icon">
      <use href="./images/icons.svg#icon-password"></use>
    </svg>
    <svg class="show-password-icon">
<use href="./images/icons.svg#icon-not-show-password"></use>
</svg>
</div>
  <button class="form__btn-submit" type="submit">Log In</button>
  <button class="login-with-google-btn" type="button">
    Log In with Google
  </button>
  <p class="form__text">
    Don't have account?
    <a href="#" class="form__link" id="linkCreateAccount"
      >Create account</a
    >
  </p>
</form>`;
}
