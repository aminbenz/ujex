interface ListProps {
  label: string;
  value: string;
}

interface SelectProps {
  list: ListProps[];
  label?: string;
  selectedValue?: string | number;
  onChange?: any;
}

const DropDawn = ({ list, label, selectedValue, ...reset }: SelectProps) => {
  return (
    <>
      {label && <label htmlFor="standard-select">{label}</label>}
      <select {...reset} id="standard-select">
        {list.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
        <span className="focus"></span>
      </select>
    </>
  );
};

export default DropDawn;
