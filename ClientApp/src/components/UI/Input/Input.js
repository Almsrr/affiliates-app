function Input(props) {
  return (
    <div className="mb-3">
      <label htmlFor={props.input.id} className="form-label">
        {props.label}
      </label>
      <input
        className="form-control"
        {...props.input}
        onChange={props.onChange ? props.onChange : null}
      />
    </div>
  );
}

export default Input;
