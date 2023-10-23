import { useFormik } from "formik";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="login-form">
        <label htmlFor="firstName">Email</label>
        <input
          id="email"
          name="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <label htmlFor="lastName">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />

        <button style={{ marginTop: 10 }} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
