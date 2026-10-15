import type { FieldPath, FieldValues, UseFormRegister } from "react-hook-form";

type InputProps<T extends FieldValues> = {
  name: FieldPath<T>;
  label: string;
  register: UseFormRegister<T>;
  error?: string;
  type?: string;
  placeholder: string
};

function Input<T extends FieldValues>({
  name,
  label,
  register,
  error,
  type = "text",
  placeholder
}: InputProps<T>) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        {...register(name, { required: `${label} must be required!` })}
        placeholder={placeholder}
      />
      {error && <p>{error}</p>}
    </div>
  );
}

export default Input;
