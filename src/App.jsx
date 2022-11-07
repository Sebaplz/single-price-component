import "./App.css";

function App() {
  return (
    <main className="grid min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="md:col-span-2 md:p-16 p-5">
          <h1 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-bold text-[#17aaa8]">
            Join our community
          </h1>
          <h2 className="xl:text-4xl lg:text-3xl md:text-3xl text-xl font-bold py-5 text-[#bfe005]">
            30-day, hassle-free money back guarantee
          </h2>
          <p className="xl:text-4xl lg:text-3xl md:text-2xl text-xl text-[#8DA3C9]">
            Gain access to our full library of tutorials along with expert code
            reviews. <br />
            Perfect for any developers who are serious about honing their
            skills.
          </p>
        </div>
        <div className="bg-[#17aaa8] md:p-16 p-5 text-white">
          <p className="xl:text-4xl lg:text-3xl md:text-2xl text-xl">
            Monthly Subscription
          </p>
          <p className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl py-5">
            $29 <span className="text-[#d3dde4] text-xl">per month</span>
          </p>
          <p className="pb-10 xl:text-4xl lg:text-2xl text-xl">
            Full access for less than $1 a day
          </p>
          <button className="bg-[#C8EC27] w-full h-14 rounded-lg shadow xl:text-2xl text-xl">
            Sign Up
          </button>
        </div>
        <div className="bg-[#19C2BF] md:p-16 p-5 text-white">
          <p className="xl:text-4xl lg:text-3xl md:text-2xl text-xl pb-5">
            Why Us
          </p>
          <p className="text-[#E2EFF8] xl:text-2xl lg:text-xl text-base">
            Tutorials by industry experts <br />
            Peer &amp; expert code review <br />
            Coding exercises <br />
            Access to our GitHub repos <br />
            Community forum <br />
            Flashcard decks <br />
            New videos every week
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
