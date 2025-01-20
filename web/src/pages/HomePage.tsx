import { Heart, BookOpen, Brain } from "lucide-react";
import DevMind from "./devmind.jpeg";
import { useNavigate } from 'react-router-dom';  // Import the hook

const Home = () => {

  const navigate = useNavigate();  // Initialize the navigate function
  // Function to handle login button click
  const handleLoginClick = () => {
    navigate('/upload');  // Navigate to the upload page
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-sky-100 to-purple-100 flex flex-col overflow-hidden">
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 relative">
        {/* Decorative Blobs */}
        <div className="absolute -top-28 -left-32 w-96 h-96 bg-pink-300 opacity-30 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-28 -right-72 w-96 h-96 bg-purple-200 opacity-30 rounded-full filter blur-3xl"></div>

        {/* Centered Logo Section */}
        <div className="mt-12 mb-8 w-[22rem] h-[22rem] bg-gradient-to-b from-pink-200 to-pink-100 shadow-2xl rounded-full border-4 border-white flex items-center justify-center">
          <div className="w-[18rem] h-[18rem] bg-white rounded-full flex items-center justify-center overflow-hidden">
            <img
              src={DevMind}
              alt="DevMind Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Intro Text */}
        <div className="text-center max-w-3xl relative z-10">
          <h2 className="text-5xl font-extrabold text-[#A97DBC] tracking-wide">
            Learn. Communicate. Grow.
          </h2>
          <p className="text-lg text-[#A97DBC] mb-10 leading-relaxed">
            DevMind is your AI-powered partner to explore, learn, and achieve.
            Join a journey of creativity and knowledge!
          </p>

          {/* Navigation Buttons */}
          <div className="flex justify-center space-x-6 mb-12">
          <button
              className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transform transition shadow-lg hover:shadow-xl"
              onClick={handleLoginClick} // Trigger navigate on click
            >
              Login
            </button>
            <button className="bg-gradient-to-r from-pink-500 to-pink-400 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transform transition shadow-lg hover:shadow-xl">
              Sign Up
            </button>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section className=" rounded-t-3xl shadow-lg mt-auto py-8 px-6 space-y-6 overflow-y-auto">
        <h3 className="text-3xl font-bold text-[#A97DBC] mb-6 text-center">
          Features
        </h3>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white to-pink-50 p-6 rounded-xl shadow-md flex flex-col items-center hover:shadow-lg transform hover:scale-105 transition">
            <Heart className="text-[#A97DBC]" size={48} />
            <h4 className="text-lg font-semibold text-[#A97DBC]">
              Personalized Learning
            </h4>
            <p className="text-sm text-[#A97DBC] mt-2 text-center">
              Tailored content designed just for you.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white to-pink-50 p-6 rounded-xl shadow-md flex flex-col items-center hover:shadow-lg transform hover:scale-105 transition">
            <BookOpen className="text-[#A97DBC] mb-4" size={48} />
            <h4 className="text-lg font-semibold text-[#A97DBC]">
              Interactive Content
            </h4>
            <p className="text-sm text-[#A97DBC] mt-2 text-center">
              Hands-on exercises to boost understanding.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center hover:shadow-lg transform hover:scale-105 transition">
            <Brain className="text-[#A97DBC] mb-4" size={48} />
            <h4 className="text-lg font-semibold text-[#A97DBC]">Increased Comprehension</h4>
            <p className="text-sm text-[#A97DBC] mt-2 text-center">
            Targets core concepts in behavioral learning. 
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
