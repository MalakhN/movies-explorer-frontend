import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <div className="filter-checkbox">
      <div className="filter-checkbox__container">
        <input className="filter-checkbox__switcher" type="checkbox" id="switch" />
        <label className="filter-checkbox__label" htmlFor="switch"></label>
      </div>
      <span className="filter-checkbox__text">Короткометражки</span>
    </div>
  )
}

export default FilterCheckbox;