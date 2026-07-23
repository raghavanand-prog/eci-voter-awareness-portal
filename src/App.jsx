import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AwarenessCard from "./components/AwarenessCard";

function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <div className="flex justify-center gap-6 my-10 flex-wrap">
        <AwarenessCard
          title="Your Vote Matters"
          description="Every vote helps shape the future of our nation."
        />

        <AwarenessCard
          title="Check Your Voter ID"
          description="Verify your voter details before election day."
        />

        <AwarenessCard
          title="Know the Election Rules"
          description="Learn the voting process and election guidelines."
        />
      </div>
    </>
  );
}

export default App;