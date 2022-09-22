import {Link, Navigate } from "react-router-dom";
// import UserService from "../services/UserService";
import UserService from "../services/UserService"
import { useState } from "react";
import { loginUser } from "../reduxdata/UserSlice";
import { useDispatch, useSelector } from "react-redux";
export default function Login() {

    const dispatch = useDispatch()
    const loginStatus = useSelector(state => state.user.value.loginstatus)
    var namebox = undefined
    var phonebox = undefined
    var emailbox = undefined
    var passbox = undefined
    var loginidbox = undefined
    var loginpassbox = undefined


    const [regMsg, setRegMsg] = useState("")
    const [loginMsg, setloginMsg] = useState("")

    const [isLoginStart, setIsLoginStart] = useState(false)
    const [isRegStart, setIsRegStart] = useState(false)

    var saveuser = (event) => {
        setIsRegStart(true)
        var ob = {
            name: namebox.value,
            phone: phonebox.value,
            email: emailbox.value,
            password: passbox.value
        }
        console.log(ob)
        UserService.registerUser(ob)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setIsRegStart(false)
                if (data.status)
                    setRegMsg("Registration Done !..")
                else
                    setRegMsg("Registration Failed !..")
            })

        event.preventDefault()
    }

    var loginuser = (event) => {
        setIsLoginStart(true)
        var ob = {
            email: loginidbox.value,
            password: loginpassbox.value
        }
        console.log(ob)
        UserService.loginUser(ob)
            .then(response => response.json())
            .then(data=> {
                console.log(data)
                setIsLoginStart(false)
                if (data.status) {
                    dispatch(loginUser({ token: data.token, loginstatus: true, username: data.username }))
                }
                else
                    setloginMsg("Login Failed !..")
            })

        event.preventDefault()
    }


    return loginStatus ? <Navigate to="/" /> : <>
        <br />
        <div className="row">
            <div className="col-lg-6 col-md-6">
                <h1 className="alert alert-danger">Registration</h1>
                <hr />
                <form onSubmit={saveuser} >
                    <div className="form-group">
                        <input type="text" ref={c => namebox = c} placeholder="Name" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <input type="text" ref={c => phonebox = c} placeholder="Phone Number" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <input type="email" ref={c => emailbox = c} placeholder="Email" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <input type="password" ref={c => passbox = c} placeholder="Password" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-success"> Save User</button>
                        &nbsp;
                        {isRegStart ? <>
                            <div class="spinner-grow spinner-grow-sm text-danger"></div>
                        </> : <>
                            <b className="text-danger">{regMsg}</b>
                        </>}
                    </div>
                </form>
            </div>
            <div className="col-lg-6 col-md-6">
                <h1 className="alert alert-danger">Login</h1>
                <hr />
                <form onSubmit={loginuser}>

                    <div className="form-group">
                        <input type="email" ref={c => loginidbox = c} placeholder="Email" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <input type="password" ref={c => loginpassbox = c} placeholder="Password" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-success"> Login User</button>
                        &nbsp;
                        {isLoginStart ? <>
                            <div class="spinner-grow spinner-grow-sm text-danger"></div>
                        </> : <>
                            <b className="text-danger">{loginMsg}</b>
                        </>}

                    </div>
                </form>
            </div>

        </div>
    </>
}