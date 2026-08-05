import Dashboard from './Dashboard'
import './App.css'

function App() {
  
  const employees = [
    { name: 'raj', department: 'engineering', leaveBalance: 20 },
    { name: 'simran', department: 'cse', leaveBalance: 22 },
    { name: 'rahul', department: 'ait', leaveBalance: 19 },
  ];
  return (
    <>
      <h1>Employee list</h1>
      <h3>Dashboard</h3>
      <h3>EmployeeSection</h3>
      <h3>Leave Form</h3>
      {employees.map((employee) => (
        <Dashboard name={employee.name} department={employee.department} leaveBalance={employee.leaveBalance} key={employee.name}/>
      ))}
    </>
  )
}

export default App
