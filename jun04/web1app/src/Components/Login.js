import { useState } from "react";
import { setUserData } from "../reduxData/UserSlice";
import { useDispatch ,useSelector} from "react-redux";
import { Navigate } from "react-router-dom";


export default function Login(props)
{
    var dispatch = useDispatch()
    
    const loginUserInfo = useSelector(state=>state.user.value)
    var [msg,setMsg]= useState("")
        var idbox=undefined;
        var passbox=undefined;

            var users =  [
                {loginid:'admin',password : "12345",name: "Matyank Patidar"},
                {loginid:'manager',password : "54321",name: "Pankaj Gupta"},
                {loginid:'officer',password : "123",name: "Meena Sharma"},
            ]


        var login = (event)=>{
            var loginid = idbox.value
            var pass = passbox.value
           var obj= users.find(ob=>ob.loginid==loginid && ob.password==pass)
                if(obj){
                    props.setLoginStatus(true)
                    dispatch(setUserData({loginstatus:true,username:obj.name}))
                    
                }else{
                    setMsg("Login Failed !")
                }

            event.preventDefault()
        }

    return loginUserInfo.loginstatus?<Navigate to="/list"/>:<>
    <h1 className="alert alert-success text-center">Login User</h1>
    <hr/>
    <form onSubmit={login}>
            <div className="form-group">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <input type="text" ref={c => idbox = c} className="form-control" placeholder="Login Id" required />
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <input type="password" ref={c => passbox = c} className="form-control" placeholder="Password" required />
                    </div>
                </div>
            </div>
            
            <div className="form-group">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <button className="btn btn-primary">Login User</button>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <b className="text-danger"> {msg}</b>

                    </div>
                </div>
            </div>
        </form>
    </>
}