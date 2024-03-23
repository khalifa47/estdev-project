const Course = (course: CourseProps) => {
  const { prerequisite, subject, credits, tuition, duration } = course;

  return (
    <div className="card">
      <h1>Subject: {subject}</h1>
      <h2>
        Prerequisites:{" "}
        {prerequisite?.map((p) => p.course.subject).join(", ") || "None"}
      </h2>
      <h2>Credits: {credits}</h2>
      <h2>Tuition: {tuition}</h2>
      <h2>Duration: {duration}</h2>
    </div>
  );
};

export default Course;
