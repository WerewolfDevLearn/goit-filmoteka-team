export default function signInForm() {
  return `<form class="signIn-form">
  <label for="email">
    <input type="email" name="email" class="signIn-submit-email"  placeholder ="Enter your email"/>
  </label>
    <label for="password">
      <input type="password" name="password" class="signIn-submit-password" placeholder ="Enter your pasword"/>
    </label>
    <button type="submit" name="submit" class="signIn-submit-btn">
      Sign in
    </button>
  </form>`;
}
