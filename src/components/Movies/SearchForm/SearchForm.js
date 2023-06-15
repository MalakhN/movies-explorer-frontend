import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search">
      <form className="search__form">
        <input
          className="search__form-input"
          required={true}
          type="text"
          name="movie"
          placeholder="Фильм"
        />
        <button className="search__form-submit-button" type="submit">
        </button>
      </form>
      <FilterCheckbox/>
    </section>
  );
}

export default SearchForm;