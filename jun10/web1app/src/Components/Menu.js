import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../reduxdata/UserSlice";

export default function Menu() {
  const user = useSelector(state => state.user.value)
  const dispatch = useDispatch()
  var logout = () => {
    dispatch(loginUser({ token: undefined, loginStatus: false, username: undefined }))
  }

  return <>
    <header class="header_section">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container">
          <a class="navbar-brand" href="index.html">
            <span>
              Apna Shop
            </span>
          </a>

          <div class="navbar-collapse" id="">
            <div class="container">
              <div class=" mr-auto flex-column flex-lg-row align-items-center">
                <ul class="navbar-nav justify-content-between ">
                  <div class="d-none d-lg-flex">
                    <li class="nav-item">
                      <a class="nav-link" href="fruit.html">
                        Customer Number :+91 01125532553</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="service.html">
                        apnashop@codebetter.in
                      </a>
                    </li>
                  </div>
                  <div class=" d-none d-lg-flex">
                    <li class="nav-item">
                      <Link class="nav-link" to="/">
                        Home
                      </Link>
                    </li>
                    {user.loginstatus ? <>
                      <li class="nav-item">
                        <b class="nav-link  text-info">
                          {user.username}
                          <br />
                          <span onClick={logout}
                            style={{ cursor: 'pointer' }}>(Logout)</span>
                        </b>
                      </li>
                    </> : <>
                      <li class="nav-item">
                        <Link class="nav-link" to="/login">
                          Login / Register
                        </Link>
                      </li>
                    </>}


                  </div>
                </ul>
              </div>
            </div>


          </div>
        </nav>
      </div>
    </header>
  </>
}