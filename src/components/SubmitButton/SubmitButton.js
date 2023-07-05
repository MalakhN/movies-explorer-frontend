import "./SubmitButton.css";
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { validateEmail, validateName } from '../../utils/validators';

function SubmitButton({ text }) {
  const { values, isValid } = useFormAndValidation();
  const buttonClassName = isValid && validateEmail(values.email).activeButton && validateName(values.name).activeButton
    ? 'sign__submit-button'
    : 'sign__submit-button sign__submit-button_disabled'

  return (
    <button className={buttonClassName}>{text}</button>
  )
}

export default SubmitButton;