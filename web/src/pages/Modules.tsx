import { useNavigate } from 'react-router-dom';  // Import the hook
import DevMind from "./devmind.jpeg";
import {Users, Activity, BookOpen } from 'lucide-react';  // Import icons for the modules

const Modules = () => {
  const navigate = useNavigate();  // Initialize the navigate function

  // Function to navigate to the selected module's game page
  const handleModuleClick = (moduleName: string) => {
    if (moduleName == "collaboration") {
      navigate(`/emotionrecognition`);
    }
     // Replace with the actual path to the game or module details page
  };

  // Sample progress data for each module
  const progressData = {
    programming: 75,
    collaboration: 50,
    criticalThinking: 90,
    readingWriting: 30,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-sky-100 to-purple-100 flex flex-col">
      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-6 relative py-12">
        {/* Decorative Blobs */}
        <div className="absolute -top-28 -left-32 w-96 h-96 bg-pink-300 opacity-30 rounded-full filter blur-3xl"></div>
        <div className="absolute -bottom-28 -right-72 w-96 h-96 bg-purple-200 opacity-30 rounded-full filter blur-3xl"></div>
        
        {/* Logo */}
        <div className="mb-10 w-[5rem] h-[5rem] bg-gradient-to-b from-pink-200 to-pink-100 shadow-2xl rounded-full border-4 border-white flex items-center justify-center">
          <div className="w-[5rem] h-[5rem] bg-white rounded-full flex items-center justify-center overflow-hidden">
            <img
              src={DevMind}
              alt="DevMind Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        {/* Header */}
        <div className="text-center max-w-3xl relative z-10 mb-12">
          <h2 className="text-4xl font-extrabold text-[#A97DBC] tracking-wide mb-4">
            Here are your personalized learning modules!
          </h2>
          <p className="text-lg text-[#A97DBC] mb-6 leading-relaxed">
            Choose a module to begin a personalized learning experience tailored just for you.
          </p>
        </div>

        {/* Modules Grid - One module per column */}
        <div className="grid grid-cols-1 gap-6 w-full max-w-3xl">
          {/* Module 1: Programming */}

          {/* Module 2: Collaboration */}
          <div
            onClick={() => handleModuleClick('collaboration')}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center hover:shadow-lg transform hover:scale-105 transition cursor-pointer"
          >
            <Users className="text-[#A97DBC] mb-4" size={48} />
            <h4 className="text-lg font-semibold text-[#A97DBC]">Emotion Recognition</h4>
            <p className="text-sm text-[#A97DBC] mt-2 text-center">
              Learn to effectively recognise and mimic emotions.
            </p>

            {/* Progress Bar */}
            <div className="w-full mt-4">
              <p className="text-sm text-[#A97DBC] mb-2">Progress</p>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200">
                      {progressData.collaboration}%
                    </span>
                  </div>
                </div>
                <div className="flex mb-2">
                  <div className="w-full bg-gray-200 rounded-full">
                    <div
                      className="bg-pink-500 text-xs leading-none py-1 text-center text-white rounded-full"
                      style={{ width: `${progressData.collaboration}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Module 3: Critical Thinking */}
          <div
            onClick={() => handleModuleClick('critical-thinking')}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center hover:shadow-lg transform hover:scale-105 transition cursor-pointer"
          >
            <Activity className="text-[#A97DBC] mb-4" size={48} />
            <h4 className="text-lg font-semibold text-[#A97DBC]">Conversation Comprehension</h4>
            <p className="text-sm text-[#A97DBC] mt-2 text-center">
              Enhance your comprehension of conversations.
            </p>

            {/* Progress Bar */}
            <div className="w-full mt-4">
              <p className="text-sm text-[#A97DBC] mb-2">Progress</p>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200">
                      {progressData.criticalThinking}%
                    </span>
                  </div>
                </div>
                <div className="flex mb-2">
                  <div className="w-full bg-gray-200 rounded-full">
                    <div
                      className="bg-pink-500 text-xs leading-none py-1 text-center text-white rounded-full"
                      style={{ width: `${progressData.criticalThinking}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Module 4: Reading & Writing */}
          <div
            onClick={() => handleModuleClick('reading-writing')}
            className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center hover:shadow-lg transform hover:scale-105 transition cursor-pointer"
          >
            <BookOpen className="text-[#A97DBC] mb-4" size={48} />
            <h4 className="text-lg font-semibold text-[#A97DBC]">Empathetic Responses</h4>
            <p className="text-sm text-[#A97DBC] mt-2 text-center">
              Practice responding to prompts empathetically.
            </p>

            {/* Progress Bar */}
            <div className="w-full mt-4">
              <p className="text-sm text-[#A97DBC] mb-2">Progress</p>
              <div className="relative pt-1">
                <div className="flex mb-2 items-center justify-between">
                  <div>
                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200">
                      {progressData.readingWriting}%
                    </span>
                  </div>
                </div>
                <div className="flex mb-2">
                  <div className="w-full bg-gray-200 rounded-full">
                    <div
                      className="bg-pink-500 text-xs leading-none py-1 text-center text-white rounded-full"
                      style={{ width: `${progressData.readingWriting}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Modules;
