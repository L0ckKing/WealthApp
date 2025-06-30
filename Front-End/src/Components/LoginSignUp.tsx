import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const handleSubmit = async (
  name: string,
  emailString: string,
  passwordString: string
) => {
  if (name === "Login") {
    // TODO: Login logic
  } else if (name === "Sign Up") {
    try {
      const body = {
        Email: emailString,
        HashedPassword: passwordString,
        Networth: 0
      };
      console.log(body);
      const response = await axios.post("http://localhost:3000/api/user", body);
      console.log("Sign-up success:", response.data);
    } catch (err) {
      console.error("Error during sign-up:", err);
    }
  } else {
    // Optional: handle unknown names
  }

  return null;
};

export function LoginSignUp({
  isOpen,
  onClose,
  name,
}: {
  isOpen: boolean;
  onClose: () => void;
  name: string;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassowrd] = useState("");
  return (
    <>
      <div className={`overlay ${isOpen ? "visible" : ""}`}>
        <div className={`info-page ${isOpen ? "visible" : ""}`}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h1 style={{ margin: "0 0 50px 0" }}>{name}</h1>
            <button
              onClick={onClose}
              style={{
                background: "none",
                border: "none",
                fontSize: "1.5rem",
                cursor: "pointer",
                lineHeight: "1",
                margin: "0 0 50px 1rem",
              }}
            >
              &times;
            </button>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="inputPassword5" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="inputPassword5"
              className="form-control"
              aria-describedby="passwordHelpBlock"
              onChange={(e) => setPassowrd(e.target.value)}
            />
            <div id="passwordHelpBlock" className="form-text">
              Your password must be 8-20 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji.
            </div>
          </div>
          <button
            type="button"
            className="btn btn-dark"
            id="validation"
            onClick={() => handleSubmit(name, email, password)}
          >
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
