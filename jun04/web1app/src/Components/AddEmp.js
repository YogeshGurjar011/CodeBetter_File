import { useDispatch } from "react-redux";
import { addEmp } from "../reduxData/EmployeeSlice";
import { useState,useEffect } from "react";
export default function AddEmp() {
    const dispatch = useDispatch()
    const [msg, setMsg] = useState("")
    var id = undefined;
    var name = undefined;
    var age = undefined;
    var salary = undefined;

    useEffect(()=>{
        if(msg.length>0){
            setTimeout(()=>setMsg(""),5000)
        }
    },[msg])

    var save = (event) => {
        var ob = {
            empid: id.value, empname: name.value,
            empage: age.value, empsalary: salary.value, empstatus: true
        }
        dispatch(addEmp(ob))
        setMsg("Employee Save Successfully ! ")

        event.preventDefault();
    }

    return <>
        <h1 className="alert alert-success text-center">Add New Employee </h1>
        <hr />

        <form onSubmit={save}>
            <div className="form-group">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <input type="text" ref={c => id = c} className="form-control" placeholder="Employee Id" required />
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <input type="text" ref={c => name = c} className="form-control" placeholder="Employee Name" required />
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <input type="number" ref={c => age = c} className="form-control" placeholder="Employee Age" required />
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <input type="text" ref={c => salary = c} className="form-control" placeholder="Employee Salary" required />
                    </div>
                </div>
            </div>
            <div className="form-group">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <button className="btn btn-primary">Save Employee</button>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <b className="text-danger">{msg} </b>
                    </div>
                </div>
            </div>
        </form>
    </>
}