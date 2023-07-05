import "./Input.css";

function Input(props) {
  return (
    <fieldset className="sign__fieldset">
      <div className="sign__input-container">
        <label className="sign__input-label" htmlFor={props.id}>{props.label}</label>
        <input
          className="sign__input"
          value={props.value}
          onChange={props.onChange}
          id={props.id}
          type={props.type}
          minLength={props.minLength}
          maxLength={props.maxLength}
          name={props.name}
          required={props.required}
          autoComplete={props.autoComplete}
        />
      </div>
    </fieldset>
  )
}

export default Input;