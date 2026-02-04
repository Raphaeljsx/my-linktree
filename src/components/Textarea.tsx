import { type TextareaProps } from "../types/Textareaprops";

export const Textarea = ({
  name,
  bio,
  onChange,
  id,
  placeholder,
}: TextareaProps) => {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={id}
        className="cursor-pointer font-bold"
      >
        {name}
      </label>
      <textarea
        id={id}
        resize-none="true"
        value={bio}
        onChange={onChange}
        className="border border-neutral-400 py-2 px-3 rounded"
        placeholder={placeholder}
        required
      />
    </div>
  );
};
