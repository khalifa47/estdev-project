import "./App.css";
import UserDisplay from "./components/UserDisplay";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import QuantumComputing from "./components/course/QuantumComputing";
import UserProvider from "./components/providers/UserProvider";

function App() {
  const course: CourseProps = {
    prerequisite: [
      {
        category: "swe",
        course: {
          prerequisite: [
            {
              category: "programming",
              course: {
                prerequisite: [
                  {
                    category: "math",
                    course: {
                      prerequisite: [],
                      subject: "Calculus",
                      credits: 4,
                      tuition: 200,
                      duration: 8,
                    },
                  },
                  {
                    category: "math",
                    course: {
                      prerequisite: [],
                      subject: "Discrete Mathematics",
                      credits: 4,
                      tuition: 180,
                      duration: 7,
                    },
                  },
                ],
                subject: "Intermediate Programming",
                credits: 4,
                tuition: 300,
                duration: 12,
              },
            },
          ],
          subject: "Advanced Software Engineering",
          credits: 5,
          tuition: 400,
          duration: 14,
        },
      },
    ],
    subject: "Quantum Computing",
    credits: 4,
    tuition: 500,
    duration: 16,
  };

  return (
    <div className="App">
      <UserProvider>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginTop: "20px",
          }}
        >
          <Register />
          <div style={{ border: "2px solid black", height: "200px" }} />
          <Login />
          <div style={{ border: "2px solid black", height: "200px" }} />
          <UserDisplay />
        </div>
        <hr />
        <QuantumComputing {...course} />
        <hr />
      </UserProvider>
    </div>
  );
}

export default App;
