import "./Form.css";
import SubmitButton from "../SubmitButton/SubmitButton";

function Form(props) {
  return (
    <form className="sign__form" noValidate onSubmit={props.onSubmit}>
      <div className="sign__inputs-container">
        {props.children}
      </div>
      <SubmitButton text={props.submitButtonText}/>
    </form>
  )
}

export default Form;