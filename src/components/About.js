import { useState, useEffect } from "react";
// https://api.github.com/users/GokulJ-Dev
const About = () => {
  const [details, setDetails] = useState(null);
  const [count, setCount] = useState(0);

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
      <h3>Count={count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default About;
