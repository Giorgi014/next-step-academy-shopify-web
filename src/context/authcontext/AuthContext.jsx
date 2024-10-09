import { getDataUsingToken } from "components/helper/api";
import { UserInfoContext } from "context/userInfoContext/UserInfoContaxt";
import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

function AuthContextComponent({ children }) {
  const { userInfo, setUserInfo } = useContext(UserInfoContext);
  const [ isError, setIsError ] = useState({
    code:0,
    text:""
  });
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem("accessToken") === null ? false : true
  );
  useEffect(() => {
    getDataUsingToken(localStorage.getItem("accessToken")).then((resp)=>{
      if(!resp){
        setIsError({code:401,text:"Expired Token"})
        localStorage.removeItem("accessToken")
        setIsAuth(false)
        console.clear();
        
      }else{
        localStorage.getItem("accessToken") !== null &&
        setUserInfo(resp)
      }
    })
  },{});
  useEffect(() => {
    !isAuth && localStorage.removeItem("accessToken");
  }, [isAuth]);
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextComponent;
