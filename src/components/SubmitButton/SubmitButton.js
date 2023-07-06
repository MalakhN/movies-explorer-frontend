import "./SubmitButton.css";
import { useFormAndValidation } from '../../hooks/useFormAndValidation';

function SubmitButton({ text }) {
  const { values, isValid } = useFormAndValidation();

  return (
    <button className={`sign__submit-button ${isValid ? "" : "sign__submit-button_disabled"}`}>{text}</button>
  )
}

export default SubmitButton;