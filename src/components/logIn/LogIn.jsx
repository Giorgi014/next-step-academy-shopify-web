import { FaUnlock } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import "./LogIn.css";
import { IoCloseSharp } from "react-icons/io5";
import { useContext, useEffect, useState } from "react";
import { getDataUsingToken, getToken } from "components/helper/api";
import { UserInfoContext,AuthContext,AuthWindowContext,ThemeContext } from "context";

function LogIn() {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const { isWinOpen, setIsWinOpen } = useContext(AuthWindowContext);
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const { userInfo, setUserInfo } = useContext(UserInfoContext);
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });
  const authUser = () => {
    getToken(loginInfo)
      .then((res) => {
        localStorage.setItem("accessToken", res);
        getDataUsingToken(res).then((data) => {
          setIsAuth(true);
          setUserInfo(data);
        });
      })
      .finally(() => setIsWinOpen(false));
  };
  return (
    <div className={isDark ? "login dark" : "login"}>
      <div className="container">
        <button className="close-btn" onClick={() => setIsWinOpen(false)}>
          <IoCloseSharp />
        </button>
        <p className="header">
          <FaUnlock fontSize={18} />
          Login
          <FaUnlock fontSize={18} />
        </p>
        <div className="input">
          <FaUser className="icon" />
          <input
            type="text"
            placeholder="Your username here...(atuny0)"
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, username: e.target.value })
            }
          />
        </div>
        <div className="input">
          <RiLockPasswordFill className="icon" />
          <input
            type="password"
            placeholder="Your password here...(9uQFF1Lh)"
            onChange={(e) =>
              setLoginInfo({ ...loginInfo, password: e.target.value })
            }
          />
        </div>
        <button className="login-btn" onClick={authUser}>
          Submit
        </button>
        <p>Register</p>
      </div>
    </div>
  );
}

export default LogIn;
