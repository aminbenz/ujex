import { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Radius } from '../../../../../types';

interface InputProps {
  id?: string;
  label?: string;
  name?: string;
  radius?: Radius;
  placeholder?: string;
  type?: string;
  height?: string | number;
  width?: string | number;
  // onChange?: any;
  value?: string;
  minLength?: number;
  maxLength?: number;
  required?: boolean;
  hidden?: boolean;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  className?: any;
  style?: any;
  onChange?: any;
  // cols?: number | number;
  // rows?: string | number;
}

export const Input = ({
  label,
  type,
  height,
  width,
  style,
  leftIcon,
  className,
  radius = 'xs',
  rightIcon,
  id,
  ...rest
}: InputProps) => {
  const [showPasscode, setShowPasscode] = useState(false);

  const Input = type !== 'textarea' ? 'input' : 'textarea';

  const classes = `${className ? className : `input-container br-${radius}`}`;
  const styles = {
    style: {
      height,
      width,
      ...style,
    },
  };

  return (
    <label htmlFor={id || label}>
      {label}
      <div className={classes} {...styles}>
        {leftIcon && <span aria-label={label}>{leftIcon}</span>}
        <Input
          type={
            type === 'password' ? (showPasscode ? 'text' : 'password') : type
          }
          id={id || label}
          {...rest}
        />
        {rightIcon && <span aria-label={label}>{rightIcon}</span>}
        {type === 'password' && (
          <span
            aria-label={label}
            onClick={() => setShowPasscode(!showPasscode)}
          >
            {!showPasscode ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </span>
        )}
      </div>
    </label>
  );
};
