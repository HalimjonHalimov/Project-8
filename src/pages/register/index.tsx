import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { Input } from "../../components";

type RegisterForm = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>();

  const onsubmit = (data: RegisterForm) => console.log(data);

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit(onsubmit)}>
        <h1>Create Account</h1>
        <p className="auth-description">Sign up to get started</p>

        <Input<RegisterForm>
          name="username"
          label="Username"
          type="text"
          register={register}
          error={errors.username?.message}
          placeholder="Enter your Username"
        />
        <Input<RegisterForm>
          name="email"
          label="Email"
          type="email"
          register={register}
          error={errors.email?.message}
          placeholder="Enter your Email"
        />
        <Input<RegisterForm>
          name="password"
          label="Password"
          type="password"
          register={register}
          error={errors.password?.message}
          placeholder="Create a password"
        />
        <Input<RegisterForm>
          name="confirmPassword"
          label="Confirm Password"
          type="password"
          register={register}
          error={errors.confirmPassword?.message}
          placeholder="Confirm your password"
        />

        <button type="submit" className="auth-button">
          Create Account
        </button>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}

export default Register;
