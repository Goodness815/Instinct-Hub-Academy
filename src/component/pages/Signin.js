import { useState } from "react";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("false");
  const [buttonText, setButtonText] = useState("Login");

  const handleSubmit = () => {
    setLoading(true);
    setButtonText("Loading...");

    setTimeout(() => {
      console.log({ email: email, password: password });
      setButtonText("Login");
    }, 3000);
  };
  console.log(loading, buttonText);

  return (
    <div className="sign-in">
      <div className="box">
        <h1>Log In</h1>
        <p>please, use the following form to log-in: </p>

        <form onSubmit={handleSubmit}>
          <div className="input">
            <label htmlFor="Email">Email :</label>
            <input
              type="email"
              id="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="input">
            <label>Password :</label> <br />
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <div className="button">
            <button type="submit">{buttonText}</button>
          </div>
        </form>

        <div className="acct">
          <p>
            Don't have an account ? <a href="#">Sign Up</a>
          </p>
          <p>
            Forgotten your password ? <a href="#">Reset here</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
