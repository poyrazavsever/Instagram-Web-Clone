import Navbar from "./components/Navbar";
import Stories from "./components/Stories";
import Contents from "./components/Contents";

function App() {
  return (
    <div className="bg-bg h-screen flex flex-col items-center gap-12">

      <Navbar/>

      <Stories />

      <Contents />

    </div>
  );
}

export default App;
