// import { Link, Navigate, Route, Routes } from "react-router-dom";
// import AddEmp from "./Components/AddEmp";
// import ListDEmp from "./Components/ListDEmp";
// import ListEmp from "./Components/ListEmp";
// import { loadEmpData } from "./reduxData/EmployeeSlice";
// import { useDispatch ,useSelector } from "react-redux";
// import { useEffect, useState } from "react"; 
// import { setUserData } from "./reduxData/UserSlice";

// import Login from "./Components/Login";


// export default function App()
// {
//   const dispatch = useDispatch()
//   const [loginstatus,setLoginStatus ]=useState(false)
//   const activeEmp = useSelector(state=>state.employees.value.reduce((x,ob)=>ob.empstatus?x+1:x+0,0))
//   const deactiveEmp = useSelector(state=>state.employees.value.reduce((x,ob)=>ob.empstatus?x:x+1,0))

//   const loginUserInfo = useSelector(state=>state.user.value)
//   useEffect(()=>{
//     var data =   localStorage.getItem("empdata")
//     if(data!=null){
//       dispatch(loadEmpData(JSON.parse(data)))
//     }
//   },[])

//   var logout = ()=>{
//     dispatch(setUserData({loginstatus:false,username:undefined}))
//   }


//     if(loginstatus==true && loginUserInfo==false)
//     {
//       setLoginStatus(false)
//       return <Navigate to="/"/>
//   }else
//    return <>
//     <h1 className="alert alert-warning">Employee Record Management</h1>&nbsp;
//     {loginUserInfo.loginstatus?<>
//       <Link to="/list"> <b className="btn btn-success">Emp List</b> </Link>&nbsp;
//    <Link to="/add"> <b className="btn btn-success"> Add Employee </b> </Link>&nbsp;
//    <Link to="/deactive"> <b className="btn btn-success">Deactive</b> </Link>&nbsp;
//    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//    <b className=" text-warning">
//    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//    <span className="btn btn-warning" onClick={logout}>{loginUserInfo.username} &nbsp;&nbsp; LogOut</span>
//    </b>
//    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//    <span>
//      <b className="text-success"> Active Employee : {activeEmp}</b>
//      &nbsp;
//      &nbsp;
//      <b className="text-info"> DeActive Employee : {deactiveEmp}</b>

//    </span>
//     </>:<>
//       <b className="text-danger ">Welcome Visitor !..</b>
//     </>}
   
//     <hr/>
//     <Routes>
//     <Route path="/" element={<Login setLoginStatus={setLoginStatus}/>}/>
//       <Route path="/list" element={<ListEmp/>}/>
//       <Route path="/add" element={<AddEmp/>}/>
//       <Route path="/deactive" element={<ListDEmp/>}/>
//     </Routes>
//    </>
// }


import React from 'react'

function App() {
  return (
    <div>App</div>
  )
}

export default App
