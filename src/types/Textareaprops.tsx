export type TextareaProps = {
  name: string;
  bio: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  id: string;
  placeholder: string;
}