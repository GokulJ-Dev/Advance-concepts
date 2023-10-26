const SearchBox = ({ searchText, setSearchText, type = "text" }) => {
  return (
    <input
      className="search-box"
      type={type}
      value={searchText}
      onChange={(event) => {
        setSearchText(event.target.value);
      }}
    />
  );
};

export default SearchBox;
