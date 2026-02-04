export type inputProps = {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  id: string;
  type: string;
  placeholder: string
  label: string;
  checked?: boolean;
  labelClassname?: string;
  inputClassname?: string;
}