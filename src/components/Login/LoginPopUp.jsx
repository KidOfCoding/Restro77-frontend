import React, { useContext, useState } from "react";
import style from "./loginPopUp.module.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../firebase/Auth";
import { ToastContainer, toast } from 'react-toastify';
const LoginPopUp = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

const googleLogin = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;

    return {
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      uid: user.uid,
      token: await user.getIdToken()
    };
  } catch (error) {
    console.error("Google login error", error);
    throw error;
  }
};
  const { URl, setToken } = useContext(StoreContext)

  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  })
const handleGoogleLogin = async () => {
   let newURl = URl
   let userData;
    try {
       userData = await googleLogin();
      // Save user data
      console.log(userData);
       data.name=userData?.name;
      data.email=userData?.email;
      setShowLogin(false);
    } catch (err) {
     // alert("Google login failed");
    }
      newURl += "/api/user/login"
    const response = await axios.post(newURl,data);
   console.log(response.data);
   
    if (response.data.success) {
      setToken(response.data.token)
      console.log(response.data.token);
      localStorage.setItem("token", response.data.token)
      setShowLogin(false)
    } else {
      toast.error('User does not exits.please sign up', {
     position: "top-center",
     autoClose: 5000,
     hideProgressBar: false,
     closeOnClick: false,
     pauseOnHover: true,
     draggable: true,
     progress: undefined,
     theme: "dark",
     });
    }
  };
  const onChangehandler = (event) => {
    const name = event.target.name
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }))
  }

  // const onLogin = async (event) => {
  //   event.preventDefault();

  //   let newURl = URl

  //   if (currState === "Login") {
  //     newURl += "/api/user/login"
  //   } else {
  //     newURl += "/api/user/register"
  //   }

  //   const response = await axios.post(newURl, data)

  //   if (response.data.success) {
  //     setToken(response.data.token)
  //     console.log(response.data.token);
      
  //     localStorage.setItem("token", response.data.token)
  //     setShowLogin(false)
  //   } else {
  //     alert(response.data.message)
  //   }

  // }

  return (
    <div className={style.LoginPopUp}>
      <form  className={style.LoginPopUpContainer}>
        <div className={style.LoginPopUpTitle}>
          <h2>{currState}</h2>
          <img
            src={assets.cross_icon}
            alt=""
            onClick={() => {
              setShowLogin(false);
            }}
          />
        </div>
        {/* <div className={style.LoginPopUpInputs}>
          {currState === "Login" ? (
            <></>
          ) : (
            <input type="text" name="name" onChange={onChangehandler} value={data.name} placeholder="Your Name" required />
          )}
          <input type="email" placeholder="Your Email" name="email" onChange={onChangehandler} value={data.email} required />
          <input type="password" placeholder="Your Password" name="password" onChange={onChangehandler} value={data.password} required />
        </div>
        <button type="submit">{currState === "Sign Up" ? "Create Account" : "Login"}</button> */}
         <button className={style.googlebtn} onClick={handleGoogleLogin}>
  <span>Continue with Google</span>
</button>
        <div className={style.LoginPopUpConditon}>
          <input type="Checkbox" required />
          <p>I agree to the terms and conditions</p>
        </div>
        {currState === "Login" ? (
          <p>
            If you don't have an account, <span onClick={() => setCurrState("Sign Up")}>Click Here To Create</span>
          </p>
        ) : (
          <p>
            Already Have an Account? <span onClick={() => setCurrState("Login")}>Login Here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
