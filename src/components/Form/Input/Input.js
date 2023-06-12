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
          name={props.name}
          required={props.required}
          autoComplete={props.autoComplete}
        />
        <span className="sign__input-error-message"></span>
      </div>
    </fieldset>
  )
}

export default Input;