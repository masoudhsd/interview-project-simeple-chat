import { FC, FormEvent } from "react";

interface IProps {
  size: string;
  text: string;
  color: string;
  onClick?: (e: FormEvent<Element>) => void;
  disable?: boolean;
}

const Button: FC<IProps> = ({
  size,
  text,
  color,
  onClick,
  disable = false,
}) => {
  return (
    <button
      className={`btn btn__${size} btn__${color}`}
      onClick={onClick}
      disabled={disable}
    >
      {text}
    </button>
  );
};
export default Button;
