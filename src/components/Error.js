import { useRouteError } from "react-router-dom";

const Error = () => {
  const errMsg = useRouteError();
  console.log(errMsg);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1> {errMsg.data}</h1>

      <h3>{errMsg.statusText}</h3>
    </div>
  );
};

export default Error;
