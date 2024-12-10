import Counter from "./components/Counter";
import { AuthProvider } from "./context/AuthContext";
import BasicFunctions from "./typescript/BasicFunctions";
import BasicTypes from "./typescript/BasicTypes";
import ObjectLiterals from "./typescript/ObjectLiterals";

function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col justify-center items-center h-screen">
        <BasicTypes />
        <ObjectLiterals />
        <BasicFunctions />
        <Counter />
      </div>
    </AuthProvider>
  );
}



export default App;
