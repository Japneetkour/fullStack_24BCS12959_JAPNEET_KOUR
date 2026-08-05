import React from 'react';
export default function Navbar({ user, enrolledCount }) {
  return (
    <>
      <p>Welcome, {user.name}</p>
      <p>Program: {user.program} Enrolled: {enrolledCount} courses</p>
      <hr />
    </>
  );
}