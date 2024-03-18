import styles from "./Button.module.css";

interface ButtonProps {
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: string;
}

const Button = ({ className, onClick, children }: ButtonProps) => {
  return (
    <button className={`${styles.customBtn} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
