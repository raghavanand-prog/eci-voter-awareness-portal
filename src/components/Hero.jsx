import { useState,useEffect } from "react";
import axios from "axios";
function Hero() {
  const [buttonText, setButtonText] = useState("Register to Vote");
  const [count, setCount] = useState(0);
  const [quote,setQuote]= useState("");
 const [loading,setLoading]= useState(true);
 const [name, setName] = useState("");
const [age, setAge] = useState("");
const [email, setEmail] = useState("");
useEffect(() => {
  setLoading(true);
  axios
    .get("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
      console.log(response.data);
      setQuote(response.data.title);
      setLoading(false);
    })
    .catch((error) => {
      console.error(error);
      setLoading(false);
    });
}, []);
const handleSubmit = (e) => {
  e.preventDefault();

  const voter = {
    name,
    age,
    email,
  };

  localStorage.setItem(
    "voterData",
    JSON.stringify(voter)
  );
console.log(localStorage.getItem("voterData"));
  

  alert(`Thank you ${name}! Your registration interest has been submitted.`);

  setName("");
  setAge("");
  setEmail("");
};

  return (
    <section className="min-h-screen bg-slate-100 flex flex-col items-center justify-center px-6">

      <h1 className="text-4xl font-bold text-blue-800 text-center">
        Election Commission of India
      </h1>

      <h2 className="text-2xl font-semibold text-gray-600 text-center mt-2">
        Voter Awareness Portal
      </h2>

      <p className="text-lg text-gray-700 mt-4 text-center max-w-3xl">
        Every vote matters. Your vote is your voice.
        Participate in the democratic process and make a difference
        in shaping the future of our nation.
      </p>
      <h2 className="text-xl font-semibold mt-6">
    Today's Awareness Message
</h2>

{loading ? (
    <p className="mt-2 text-gray-500">
        Loading today's awareness message...
    </p>
) : (

    <p className="mt-2 text-gray-700">
        {quote}
    </p>
)}

      <button
        onClick={() => setButtonText("Registration Started ✅")}
        className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        {buttonText}
      </button>

      <h2 className="text-2xl font-bold mt-10">
        People Who Pledged to Vote
      </h2>

      <p className="text-5xl font-bold text-green-700 mt-3">
        {count}
      </p>

      <button
        onClick={() => setCount(count + 1)}
        className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
      >
        I Pledge to Vote
      </button>

 <form
  className="mt-10 w-full max-w-md"
  onSubmit={handleSubmit}
>
  <h2 className="text-2xl font-bold mb-4">
    Voter Registration Interest
  </h2>

  <input
    type="text"
    placeholder="Enter your name"
    value={name}
    onChange={(e) => setName(e.target.value)}
    className="w-full p-2 border border-gray-300 rounded mb-4"
  />

  <input
    type="number"
    placeholder="Enter your age"
    value={age}
    onChange={(e) => setAge(e.target.value)}
    className="w-full p-2 border border-gray-300 rounded mb-4"
  />

  <input
    type="email"
    placeholder="Enter your email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="w-full p-2 border border-gray-300 rounded mb-4"
  />

  <button
    type="submit"
    className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition"
  >
    Submit
  </button>
</form>
  

    </section>
  );
}

export default Hero;