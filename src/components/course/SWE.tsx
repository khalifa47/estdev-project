import Course from "./Course";
import Programming from "./Programming";

const SWE = (course: CourseProps) => {
  const { prerequisite } = course;

  return (
    <div style={{ marginLeft: "20px" }}>
      <Course {...course} />
      {prerequisite && <Programming {...prerequisite.course} />}
    </div>
  );
};

export default SWE;
