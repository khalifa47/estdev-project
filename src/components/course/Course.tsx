const Course = (course: CourseProps) => {
  const { prerequisite, subject, credits, tuition, duration } = course;

  return (
    <>
      <h1>Subject: {subject}</h1>
      <h2>
        Prerequisite:{" "}
        {prerequisite?.course ? prerequisite.course.subject : "None"}
      </h2>
      <h2>Credits: {credits}</h2>
      <h2>Tuition: {tuition}</h2>
      <h2>Duration: {duration}</h2>
    </>
  );
};

export default Course;
