import { useSelector } from "react-redux"
import { changeEmpStatus } from "../reduxData/EmployeeSlice";
import { useDispatch } from "react-redux";
export default function ListDEmp()

{
    const dispatch=useDispatch()
    const deactiveRecords = useSelector(state=>state.employees.value.filter(ob=>!ob.empstatus))
    var active = (event)=>{
        var id= event.target.getAttribute('data-id');
        var name= event.target.getAttribute('data-name');
       var msg ="Are You Sure to Active " + name + "?"
        var status = window.confirm(msg )
        if(status){
             dispatch(changeEmpStatus({empid:id,status:true}))
        }
     }
    return <>
    <h1 className="alert alert-success text-center">DeActive Records </h1>
    <hr/>
    <table className="table table-striped table-bordered">
        <thead>
            <tr>
                <th>S.No</th>
                <th>Employee ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Salary</th>
                <th>Operationb</th>
            </tr>
        </thead>
        <tbody>
            {deactiveRecords.map((rec,index)=><tr key={index}>
                <td>{index+1}</td>
                <td>{rec.empid}</td>
                <td>{rec.empname}</td>
                <td>{rec.empage}</td>
                <td>{rec.empsalary}</td>
                <td className="text-center">
                    <button onClick={active} data-id={rec.empid}
                    data-name={rec.empname} className="btn btn-success">Active</button>
                </td>
            </tr>)}
        </tbody>
    </table>
    </>
}