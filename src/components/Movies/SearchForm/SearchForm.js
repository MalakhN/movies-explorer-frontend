import React from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm({ onFilter, isChecked, checkboxChange, handleInputChange, inputValue, }) {
  const [inputError, setInputError] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue) {
      setInputError("");
    } else if (!inputValue) {
      setInputError("Введите ключевое слово для поиска");
      return;
    }
    onFilter(inputValue, isChecked);
  };

  return (
    <section className="search">
      <form className="search__form" onSubmit={handleSubmit} noValidate>
        <input
          className="search__form-input"
          onChange={handleInputChange}
          value={inputValue || ""}
          required
          type="text"
          name="search"
          placeholder="Фильм"
          id="search"
          autoComplete="off"
        />
        <button className="search__form-submit-button" type="submit">
        </button>
        <span className={"search__form-error search__form-error_active"}>
          {inputError}
        </span>
      </form>
      <FilterCheckbox isChecked={isChecked} checkboxChange={checkboxChange} />
    </section>
  );
}

export default SearchForm;