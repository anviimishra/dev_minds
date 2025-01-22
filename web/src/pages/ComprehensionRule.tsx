
import { Link } from 'react-router-dom';
import { PlayCircle, AlertCircle, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const CompRules = () => {
const navigate = useNavigate();
const backToModules = () => {

    navigate("/my-modules")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-sky-100 to-purple-100 flex flex-col overflow-hidden relative">
        <div className="absolute top-4 left-4">
        <button
          className="px-4 py-2 bg-gradient-to-r from-pink-500 to-pink-400 text-white rounded-lg shadow-md hover:scale-105 transform transition hover:shadow-lg"
          onClick={backToModules}
        >
          My Modules
        </button>
      </div>
      {/* Decorative Blobs */}
      <div className="absolute -top-28 -left-32 w-96 h-96 bg-pink-300 opacity-30 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-28 -right-72 w-96 h-96 bg-purple-200 opacity-30 rounded-full filter blur-3xl"></div>

      <main className="flex-grow flex flex-col items-center justify-center px-6 py-12 relative z-10">
        <div className="max-w-3xl w-full space-y-8">
          {/* Header Section */}
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-extrabold text-[#A97DBC] tracking-wide">
              Game Rules
            </h2>
            <p className="text-lg text-[#A97DBC] leading-relaxed">
              Master the art of conversation comprehension with these simple steps
            </p>
          </div>

          {/* Rules Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Rule 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="flex flex-col items-center text-center space-y-4">
                <AlertCircle className="text-[#A97DBC]" size={48} />
                <h3 className="text-xl font-semibold text-[#A97DBC]">Observe</h3>
                <p className="text-[#A97DBC]">
                  Watch the video clip played in 
                </p>
              </div>
            </div>

            {/* Rule 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="flex flex-col items-center text-center space-y-4">
                <PlayCircle className="text-[#A97DBC]" size={48} />
                <h3 className="text-xl font-semibold text-[#A97DBC]">Mimic</h3>
                <p className="text-[#A97DBC]">
                  Copy the emotion with your facial expressions for 5 seconds
                </p>
              </div>
            </div>

            {/* Rule 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300">
              <div className="flex flex-col items-center text-center space-y-4">
                <CheckCircle className="text-[#A97DBC]" size={48} />
                <h3 className="text-xl font-semibold text-[#A97DBC]">Review</h3>
                <p className="text-[#A97DBC]">
                  Get instant feedback on your emotional expression
                </p>
              </div>
            </div>
          </div>

          {/* Start Button */}
          <div className="text-center">
            <Link to="/emotionrecognition">
              <button className="bg-gradient-to-r from-pink-400 to-pink-500 text-white px-12 py-4 rounded-full font-semibold hover:scale-105 transform transition shadow-lg hover:shadow-xl text-lg">
                Start Playing
              </button>
            </Link>
          </div>

          {/* Additional Info */}
          <div className="bg-white/80 p-6 rounded-xl shadow-md mt-8">
            <p className="text-center text-[#A97DBC] leading-relaxed">
              Practice makes perfect! The more you play, the better you'll become at recognizing and expressing emotions.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CompRules;