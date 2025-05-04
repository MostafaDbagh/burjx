import logo from "../../assests/images/logo.png";
import { popularTags } from "../constant";
import "./index.css";
export const Search = ({ setSearch }) => {

  const handleTagClick = (tag) => {
    setSearch(tag);
  };

  return (
    <div className=" d-flex justify-content-between align-items-center flex-wrap flex-column searchContainer gap-3">
      <div className="logoSection">
        <img src={logo} alt="toma-boutique" height={100} width={200} />
      </div>
      <div className="searchSection">
        <form className="d-flex flex-wrap searchForm align-items-center">
          <div>
            <input
              type="text"
              className="form-control searchInput"
              id="inputSearch"
              placeholder="Search By Name , Keyword..."
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
          <button type="submit" className="btn mx-3 searchButton">
            Search
          </button>
        </form>

        <div className="tags-container mt-4">
          {popularTags.map((tag) => (
            <span
              key={tag}
              className="search-tag"
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
