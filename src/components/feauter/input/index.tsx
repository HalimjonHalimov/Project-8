import { useForm, type SubmitHandler } from "react-hook-form";

type Input = {
  name: string;
  email: string;
  password: string;
};

const Input = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = (data) => console.log(data);
  console.log(watch());

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true })} />
      {errors.name && <span>This field is required</span>}
      <input {...register("email", { required: true })} />
      {errors.email && <span>This field is required</span>}
      <input {...register("password", { required: true })} />
      {errors.password && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
};

export default Input;
