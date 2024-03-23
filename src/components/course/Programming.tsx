import Course from "./Course";
import Math from "./Math";

const Programming = (course: CourseProps) => {
  const { prerequisite } = course;

  return (
    <div style={{ marginLeft: "20px" }}>
      <Course {...course} />
      <div className="grid">
        {prerequisite.map((p) => (
          <Math key={p.course.subject} {...p.course} />
        ))}
      </div>
    </div>
  );
};

export default Programming;
