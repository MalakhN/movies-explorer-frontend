import "./Form.css";
import SubmitButton from "../SubmitButton/SubmitButton";

function Form(props) {
  const isSubmitButtonActive = props.isValid;

  return (
    <form className="sign" noValidate onSubmit={props.onSubmit}>
      <div className="sign__inputs-container">
        {props.children}
      </div>
      <SubmitButton text={props.submitButtonText} isActive={isSubmitButtonActive} />
    </form>
  )
}

export default Form;