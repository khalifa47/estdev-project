import Course from "./Course";
import SWE from "./SWE";

const QuantumComputing = (course: CourseProps) => {
  const { prerequisite } = course;

  return (
    <>
      <Course {...course} />
      {prerequisite && <SWE {...prerequisite.course} />}
    </>
  );
};

export default QuantumComputing;
