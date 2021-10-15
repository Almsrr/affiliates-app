function Select(props) {
  return (
    <div className="mb-3">
      <label htmlFor={props.select.id} className="form-label">
        {props.label}
      </label>
      <select
        {...props.select}
        className="form-select"
        onChange={props.onChange ? props.onChange : null}
      >
        {props.options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
