import { useDispatch, useSelector } from "react-redux";
import {
  setTitleFilter,
  selectTitleFilter,
  resetFilters,
  setAuthorFilter,
  selectAuthorFilter
} from "../../redux/slices/filterSlice";
import "./Filter.css";

const Filter = () => {
  const dispatch = useDispatch();
  const filterTitle = useSelector(selectTitleFilter);
  const filterAuthor=useSelector(selectAuthorFilter)
  const handleTitleFilterChange = (e) => {
    dispatch(setTitleFilter(e.target.value));
  };
  const handleAuthorFilterChange=(e)=>{
    dispatch(setAuthorFilter(e.target.value))
  }
  const handleResetFilters = () => {
    dispatch(resetFilters());
  };
  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            type="text"
            value={filterTitle}
            placeholder="Filter by title..."
            onChange={handleTitleFilterChange}
          />
        </div>
        <div className="filter-group">
          <input
            type="text"
            value={filterAuthor}
            placeholder="Filter by author..."
            onChange={handleAuthorFilterChange}
          />
        </div>
        <button type="button" onClick={handleResetFilters}>Reset Filters</button>
      </div>
    </div>
  );
};
export default Filter;