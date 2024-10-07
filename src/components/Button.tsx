interface ButtonProps {
  label: string;
  onClick?: () => void;
}

export function Button({ onClick, label }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}
