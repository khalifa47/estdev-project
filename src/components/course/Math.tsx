import Course from "./Course";

const Math = (course: CourseProps) => {
  return (
    <div style={{ marginLeft: "20px" }}>
      <Course {...course} />
    </div>
  );
};

export default Math;
