import React from "react";
import { useUser } from "./Context/UserContext";

// export default function StudentProfile({ user }) {
//   return (
//     <>
//       <h4>Student Details</h4>
//       <p>Name: {user.name}</p>
//       <p>Email: {user.email}</p>
//       <p>Program: {user.program}</p>
//     </>
//   )
// }

export default function StudentProfile() {
  const user = useUser();
  return (
    <>
      <h4>Student Details</h4>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Program: {user.program}</p>
    </>
  )
}