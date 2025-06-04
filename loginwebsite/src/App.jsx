import { useState } from "react";

function App() {
  const [loginState, setLoginState] = useState(true);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  function submitHandler(e) {
    e.preventDefault();
    console.log(user);
  }
  return (
    <section className="container">
      <form className="login-form" onSubmit={submitHandler}>
        {!loginState && (
          <div className="input-form">
            <input
              name="firstName"
              type="text"
              value={user.firstName}
              required
              onChange={(e) =>
                setUser((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
            <label>firstName</label>
          </div>
        )}
        {!loginState && (
          <div className="input-form">
            <input
              type="text"
              name="lastName"
              required
              value={user.lastName}
              onChange={(e) =>
                setUser((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
            <label>LastName</label>
          </div>
        )}
        <div className="input-form">
          <input
            type="email"
            name="email"
            required
            value={user.email}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
          />
          <label>Email</label>
        </div>
        <div className="input-form">
          <input
            id="password"
            name="password"
            type="password"
            required
            value={user.password}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
          />
          <label htmlFor="password">Password</label>
        </div>
        <button>{loginState ? "Login" : "Register"}</button>
        {loginState && (
          <div className="register">
            <p>
              not have an account?{" "}
              <button onClick={() => setLoginState(false)}>Register</button>
            </p>
          </div>
        )}
      </form>
    </section>
  );
}

export default App;
