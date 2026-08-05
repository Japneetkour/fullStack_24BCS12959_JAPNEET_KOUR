
import LeaveForm from './LeaveForm'
const EmployeeSection = ({ name, department, leaveBalance }) => {
  return (
    <>
        <LeaveForm name={name} department={department} leaveBalance={leaveBalance}/>
    </>
  )}
  export default EmployeeSection