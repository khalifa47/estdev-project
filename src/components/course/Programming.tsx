import Course from "./Course";
import Math from "./Math";

const Programming = (course: CourseProps) => {
  const { prerequisite } = course;

  return (
    <div style={{ marginLeft: "20px" }}>
      <Course {...course} />
      {prerequisite && <Math {...prerequisite.course} />}
    </div>
  );
};

export default Programming;
