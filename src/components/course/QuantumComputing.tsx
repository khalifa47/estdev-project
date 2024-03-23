import Course from "./Course";
import SWE from "./SWE";

const QuantumComputing = (course: CourseProps) => {
  const { prerequisite } = course;

  return (
    <>
      <Course {...course} />
      {prerequisite.map((p) => (
        <SWE key={p.course.subject} {...p.course} />
      ))}
    </>
  );
};

export default QuantumComputing;
