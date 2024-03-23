import "./App.css";
import Context from "./components/Context";
import Counter from "./components/Counter";
import Form from "./components/Form";
import QuantumComputing from "./components/course/QuantumComputing";

function App() {
  const course: CourseProps = {
    prerequisite: {
      category: "swe",
      course: {
        prerequisite: {
          category: "programming",
          course: {
            prerequisite: {
              category: "math",
              course: {
                prerequisite: null,
                subject: "Calculus",
                credits: 4,
                tuition: 200,
                duration: 8,
              },
            },
            subject: "Intermediate Programming",
            credits: 4,
            tuition: 300,
            duration: 12,
          },
        },
        subject: "Advanced Software Engineering",
        credits: 5,
        tuition: 400,
        duration: 14,
      },
    },
    subject: "Quantum Computing",
    credits: 4,
    tuition: 500,
    duration: 16,
  };

  return (
    <div className="App">
      <Counter initialCount={397} />
      <hr />
      <QuantumComputing {...course} />
      {/* <Context />
      <br />
      <Form /> */}
    </div>
  );
}

export default App;
