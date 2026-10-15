import { Link } from "react-router";

function Login() {
  return (
  <div className="auth-container">
    <form className="auth-form">
      <h1>Welcome Back</h1>
      <p className="auth-description">
        Login to your account
      </p>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
        />
      </div>

      <div className="form-options">
        <label className="remember-me">
          <input type="checkbox" />
          Remember me
        </label>

        <a href="/forgot-password">Forgot password?</a>
      </div>

      <button type="submit" className="auth-button">
        Login
      </button>

      <p className="auth-footer">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </form>
  </div>
);
}

export default Login