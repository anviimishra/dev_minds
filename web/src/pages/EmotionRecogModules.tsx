import React, { useState, useRef, useEffect } from 'react';
import Webcam from 'react-webcam';
import { Camera, Loader2, TimerIcon, Medal, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';
import happy from "./happy.jpeg"
import sad from "./sad.jpeg"
import { useNavigate } from 'react-router-dom';

interface EmotionImage {
  emotion: string;
  src: string;
}

const emotionImages: EmotionImage[] = [
  { emotion: "happy", src: happy },
  { emotion: "sad", src: sad },
  { emotion: "angry", src: "/api/placeholder/400/400" },
  { emotion: "surprised", src: "/api/placeholder/400/400" },
  { emotion: "confused", src: "/api/placeholder/400/400" }
];

const EmotionRecognition = () => {
  const [currentEmotion, setCurrentEmotion] = useState<EmotionImage | null>(null);
  const [gameState, setGameState] = useState<'waiting' | 'showing' | 'recording' | 'results'>('waiting');
  const [score, setScore] = useState(0);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [timer, setTimer] = useState<number>(0);
  const webcamRef = useRef<Webcam | null>(null);
  const navigate = useNavigate();

  // Use the browser's ReturnType<typeof setInterval> for timerRef
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      stopRecording();
    };
  }, []);

  const startRound = () => {
    setGameState('showing');
    setTimer(3);

    // Cycle through emotions in the correct order
    const currentIndex = emotionImages.findIndex(emotion => emotion.emotion === currentEmotion?.emotion);
    const nextEmotion = emotionImages[(currentIndex + 1) % emotionImages.length];
    setCurrentEmotion(nextEmotion);

    const countDown = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          clearInterval(countDown);
          setGameState('recording');
          setTimer(5);
          startRecordingCountdown();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    timerRef.current = countDown;
  };

  const startRecordingCountdown = () => {
    const recordingTimer = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          clearInterval(recordingTimer);
          checkEmotion();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    timerRef.current = recordingTimer;
  };

  const checkEmotion = () => {
    setIsCorrect(true);
    setScore(prev => prev + 1);
    stopRecording();
    setGameState('results');
  };

  const stopRecording = () => {
    if (webcamRef.current) {
      const video = webcamRef.current.video as HTMLVideoElement;
      if (video && video.srcObject) {
        const stream = video.srcObject as MediaStream;
        stream.getTracks().forEach(track => track.stop());
      }
    }
  };

  const goToNextEmotion = () => {
    // Move to the next emotion in the list
    const currentIndex = emotionImages.findIndex(emotion => emotion.emotion === currentEmotion?.emotion);
    const nextEmotion = emotionImages[(currentIndex + 1) % emotionImages.length];
    setGameState('showing');
    setCurrentEmotion(nextEmotion);
    setIsCorrect(null);
    setTimer(3);
    startRound();
  };

  const backToModules = () => {

    navigate("/my-modules")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-sky-100 to-purple-100 flex flex-col overflow-hidden relative">
    {/* My Modules Button */}
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
          <div className="text-center space-y-4">
            <h2 className="text-5xl font-extrabold text-[#A97DBC] tracking-wide">
              Emotion Mimicking Game
            </h2>
            <div className="flex items-center justify-center space-x-4">
              <Medal className="text-[#A97DBC]" size={24} />
              <p className="text-xl text-[#A97DBC]">Score: {score}</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl transition-all duration-300 hover:shadow-2xl">
            {gameState === 'waiting' && (
              <div className="text-center space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/rules" className="w-full">
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-lg hover:scale-105 transform transition shadow-lg hover:shadow-xl">
                      Game Rules
                    </button>
                  </Link>
                  <button
                    onClick={startRound}
                    className="w-full px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-400 text-white rounded-lg hover:scale-105 transform transition shadow-lg hover:shadow-xl"
                  >
                    Start Game
                  </button>
                </div>
              </div>
            )}

            {gameState === 'showing' && currentEmotion && (
              <div className="text-center space-y-6">
                <div className="flex items-center justify-center space-x-2">
                  <TimerIcon className="text-[#A97DBC]" size={24} />
                  <p className="text-xl font-bold text-[#A97DBC]">{timer}s</p>
                </div>
                <div className="w-72 h-72 mx-auto rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img
                    src={currentEmotion.src}
                    alt={currentEmotion.emotion}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}

            {gameState === 'recording' && (
              <div className="text-center space-y-6">
                <div className="flex items-center justify-center space-x-2">
                  <TimerIcon className="text-[#A97DBC]" size={24} />
                  <p className="text-xl font-bold text-[#A97DBC]">{timer}s</p>
                </div>
                <div className="w-72 h-72 mx-auto relative rounded-xl overflow-hidden shadow-lg">
                  <Webcam ref={webcamRef} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4">
                    <Camera className="text-white w-6 h-6" />
                  </div>
                </div>
              </div>
            )}

            {gameState === 'results' && isCorrect !== null && (
              <div className="text-center space-y-6">
                <p className="text-2xl font-bold text-[#A97DBC]">
                  {isCorrect ? "Great job! You matched the emotion!" : "Not quite right. Try again!"}
                </p>
                <button
                  onClick={goToNextEmotion}
                  className="px-8 py-4 bg-gradient-to-r from-pink-400 to-pink-500 text-white rounded-lg hover:scale-105 transform transition shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                >
                  <RefreshCw className="w-5 h-5" />
                  <span>Next Emotion</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default EmotionRecognition;
