type CounterProps = {
  initialCount: number;
};

type Prerequisite = {
  category: string;
  course: CourseProps;
};

type CourseProps = {
  prerequisite: Prerequisite[];
  subject: string;
  credits: number;
  tuition: number;
  duration: number;
};

interface User {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

type UserContextType = {
  user: User | null;
  setUser: (user: React.SetStateAction<User | null>) => void;
};
