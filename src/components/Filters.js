import { components } from "react-select";
import { MultiSelect } from "react-multi-select-component";

const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <input
          type="checkbox"
          checked={props.isSelected}
          onChange={() => null}
        />{" "}
        <label>{props.label}</label>
      </components.Option>
    </div>
  );
};

const Filters = ({ options, onChange, value }) => {
  return (
    <MultiSelect
      disableSearch={true}
      isMulti={true}
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      components={{
        Option,
      }}
      hasSelectAll={true}
      value={value}
      onChange={onChange}
      options={options}
      className="filter-dropdown"
    />
  );
};

export default Filters;
