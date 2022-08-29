interface CheckBoxProps {
  check: boolean;
  description: string;
}

export const CheckBox = ({ check, description, ...rest }: CheckBoxProps) => {
  return (
    <div className="ckeckbox">
      <input type="checkbox" name="public" id="checkbox-status" {...rest} />
      <label htmlFor="checkbox-status">
        {description} {check}
      </label>
    </div>
  );
};
