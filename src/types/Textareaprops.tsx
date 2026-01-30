export type TextareaProps = {
  bio: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  id: string;
  placeholder: string;
}