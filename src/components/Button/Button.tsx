interface ButtonProps {
  icon: string;
  actionOnClick: () => void;
}

const Button = ({ icon, actionOnClick }: ButtonProps): JSX.Element => {
  return (
    <button
      type="button"
      className="button button--delete"
      onClick={actionOnClick}
    >
      {icon}
    </button>
  );
};

export default Button;
