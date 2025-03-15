import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((res) => setMessage(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900 text-white text-2xl">
      {message}
    </div>
  );
}

export default App;
