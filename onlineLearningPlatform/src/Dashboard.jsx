import React from 'react';
import CourseCatlog from './CourseCatlog';
export default function Dashboard({ user, onEnroll }) {
  return (
    <>
      <CourseCatlog user={user} onEnroll={onEnroll} />
    </>
  )
}