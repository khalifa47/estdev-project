type CounterProps = {
  initialCount: number;
};

type Prerequisite = {
  category: string;
  course: CourseProps;
};

type CourseProps = {
  prerequisite: Prerequisite | null;
  subject: string;
  credits: number;
  tuition: number;
  duration: number;
};
