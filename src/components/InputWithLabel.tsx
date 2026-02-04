import { type inputProps } from "../types/Inputprops";

export const InputWithLabel = ({
  name,
  onChange,
  id,
  type,
  placeholder,
  label,
  labelClassname,
  inputClassname,
}: inputProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className={labelClassname}>
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={name}
        onChange={onChange}
        className={inputClassname}
        placeholder={placeholder}
        required
      />
    </div>
  );
};
