import { useState, useEffect, useMemo } from "react";
import SearchBox from "./SearchBox";
import { calculateCircumference } from "../utils/methods";
// https://api.github.com/users/GokulJ-Dev
const About = () => {
  const [details, setDetails] = useState(null);
  const [text, setText] = useState("");
  const [status, setStatus] = useState(false);
  const circumference = useMemo(() => {
    return text && calculateCircumference(text);
  }, [text]);
  console.log("Above Component Renders");
  useEffect(() => {
    fetchDetails();
  }, []);
  const fetchDetails = async () => {
    const data = await fetch("https://api.github.com/users/GokulJ-Dev");
    const json = await data?.json();
    console.log(json);
    setDetails(json);
  };

  if (details == null) return <h1>Loading!!!!!</h1>;
  return (
    <div>
      <h1>About Page</h1>
      <h3>{details?.login}</h3>
      <h3>{details?.id}</h3>
      <h3>{details?.node_id}</h3>
      <SearchBox
        searchText={text}
        setSearchText={(value) => setText(value)}
        type="number"
      />
      <h3>{circumference}</h3>
      <button
        onClick={() => {
          setStatus(!status);
        }}
      >
        Press Me
      </button>
    </div>
  );
};

export default About;
