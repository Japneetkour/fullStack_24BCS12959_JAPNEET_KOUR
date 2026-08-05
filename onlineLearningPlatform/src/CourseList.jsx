import React from 'react';
// import StudentProfile from './StudentProfile';

export default function CourseList({ user, onEnroll }) {
  return (
    <>
      <p>React Basics ₹999 <button onClick={onEnroll}>Enroll</button></p>
      <p>Node.js Essentials ₹1199 <button onClick={onEnroll}>Enroll</button></p>
      <p>UI/UX Design ₹799 <button onClick={onEnroll}>Enroll</button></p>
      {/* <StudentProfile user={user} /> */}
    </>
  );
}