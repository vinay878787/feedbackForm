import { GoogleLogin } from "@react-oauth/google";
import { useGoogleLogin } from "@react-oauth/google";
import styles from "./Welcome.module.css";
import { useNavigate } from "react-router-dom";
function Welcome() {
  const navigate = useNavigate();
  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => console.log(tokenResponse),
  });

  return (
    <div className={styles.formWrapper}>
      <div className={styles.formContainer}>
        <div className={styles.formSubContainer}>
          <h1>Welcome to Feedify</h1>
          <p>simplifed feedbacks</p>
        </div>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
            navigate("/form");
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
      </div>
    </div>
  );
}

export default Welcome;
