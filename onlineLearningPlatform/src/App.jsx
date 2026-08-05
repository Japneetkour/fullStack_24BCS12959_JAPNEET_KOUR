import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Dashboard from './Dashboard'
import StudentProfile from './StudentProfile'
import { UserContext } from './Context/UserContext'
import './App.css'

function App() {
  const user = {
    name: "Karan Mehta",
    email: "karan@gmail.com",
    program: "Web Development"
  };

  const [enrolledCount, setEnrolledCount] = useState(0);

  useEffect(() => {
    console.log("Enrollment updated. Total courses: " + enrolledCount);
  }, [enrolledCount]);

  return (
    <>
      <h2>SKILLNEST - ONLINE LEARNING PLATFORM</h2>
      <UserContext.Provider value={user}>
        <Navbar user={user} enrolledCount={enrolledCount} />
        <Dashboard user={user} onEnroll={() => setEnrolledCount(enrolledCount + 1)} />
        <StudentProfile />
      </UserContext.Provider>
    </>
  )
}

export default App