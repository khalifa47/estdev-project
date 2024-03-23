import Course from "./Course";
import Programming from "./Programming";

const SWE = (course: CourseProps) => {
  const { prerequisite } = course;

  return (
    <div style={{ marginLeft: "20px" }}>
      <Course {...course} />
      {prerequisite.map((p) => (
        <Programming key={p.course.subject} {...p.course} />
      ))}
    </div>
  );
};

export default SWE;
