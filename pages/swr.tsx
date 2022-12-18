import { StudentDetail } from '@/components/swr';
import { useState } from 'react';

export default function SWRPage() {
  const [studentList, setStudentList] = useState([1, 1, 1]);
  const handleAddStudent = () => {
    setStudentList((prev) => [...prev, 1]);
  };
  return (
    <div>
      <h1>SWR Playground</h1>
      <button onClick={handleAddStudent}>Add detail</button>
      {studentList.map((_, index) => (
        <StudentDetail key={index} studentId="lea2aa9l7x3a5v0" />
      ))}
    </div>
  );
}
