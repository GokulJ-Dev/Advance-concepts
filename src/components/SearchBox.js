const SearchBox = ({ searchText, setSearchText }) => {

  return (
    <input
      className="search-box"
      placeholder="Search Restaurants"
      type="text"
      value={searchText}
      onChange={(event) => {
        setSearchText(event.target.value);
      }}
    />
  );
};

export default SearchBox;
