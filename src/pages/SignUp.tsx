import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div>
      <div>
        <img src="" alt="" />
        <h4>Track, Snack, and Rack</h4>
      </div>
      <form>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <button>Sign Up</button>
        <p>
          Already have an account? <Link to="/">Sign In</Link>
        </p>
      </form>
    </div>
  );
}

export default SignUp;
