import React from "react";
import { Link } from "react-router-dom";

function SignIn() {
  return (
    <div>
      <div>
        <img src="" alt="" />
        <h4>Track, Snack, and Rack</h4>
      </div>
      <form>
        <input type="text" />
        <input type="text" />
        <a href="">Forgot your password?</a>
        <button>Sign In</button>
        <p>
          Need an Account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
