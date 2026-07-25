import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Countdown from "./components/countdown";
import Footer from "./components/footer";
import AwarenessCard from "./components/awarenessCard";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Countdown />
      <Footer />

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