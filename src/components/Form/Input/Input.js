import "./Input.css";
import { useFormAndValidation } from "../../../hooks/useFormAndValidation";

function Input(props) {
  const { isValid } = useFormAndValidation();

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
      <span className={`sign__input-error-message ${isValid ? "" : "sign__input-error-message_active"}`}>
        {props.errorText}
      </span>
    </fieldset>
  )
}

export default Input;