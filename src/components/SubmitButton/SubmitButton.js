import "./SubmitButton.css";

function SubmitButton({ text, isActive }) {
  const buttonClassName = isActive ? "sign__submit-button" : "sign__submit-button sign__submit-button_disabled"

  return (
    <button className={buttonClassName} disabled={!isActive}>{text}</button>
  )
}

export default SubmitButton;



