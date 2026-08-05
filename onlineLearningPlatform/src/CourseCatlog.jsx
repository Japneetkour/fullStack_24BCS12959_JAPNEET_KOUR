import React from 'react';
import CourseList from './CourseList';
export default function CourseCatlog({ user, onEnroll }) {
  return (
    <>
      <h3>COURSE CATALOG</h3>
      <CourseList user={user} onEnroll={onEnroll} />
    </>
  );
}