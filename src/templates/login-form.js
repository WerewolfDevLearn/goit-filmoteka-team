export default function logInForm() {
  return `<form class="login-form">
    <label for="email">
      Email
      <input type="email" name="email" class="login-email-field" placeholder="Enter your email" />
    </label>
    <label for="password">
      Password
      <input
        type="password"
        name="password"
        class="login-password-field"
        placeholder="Enter your password"
      />
    </label>
    <div class="login-btn-wrap">
      <button type="submit" name="submit" class="login-submit-btn">
        Log in
      </button>
      <button type="button" name="login-google" class="login-google-btn">
        Log in with Google
      </button>
    </div>
  </form>`;
}
