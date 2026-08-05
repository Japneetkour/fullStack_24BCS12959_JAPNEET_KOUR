import  EmployeeSection from './EmployeeSection'
const Dashboard = ({ name, department, leaveBalance }) => {
  return (
    <>
        <EmployeeSection name={name} department={department} leaveBalance={leaveBalance}/>
    </>
  )}
  export default Dashboard