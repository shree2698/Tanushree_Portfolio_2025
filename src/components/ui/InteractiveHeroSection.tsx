import React, { useState, useEffect, useRef } from 'react';
import { Code2, Sparkles, X, Play, RotateCcw } from 'lucide-react';

const InteractiveHeroSection = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [sparkleColors, setSparkleColors] = useState<any>([]);
  const [gameState, setGameState] = useState('idle'); // idle, playing, won
  const [score, setScore] = useState(0);
  const [targetCode, setTargetCode] = useState('');
  const [userInput, setUserInput] = useState('');
  const [timeLeft, setTimeLeft] = useState(30);
  const canvasRef = useRef(null);
  const experienceInYears = 5;

  // Code snippets for the typing game
  const codeSnippets = [
    'const hello = () => "Hello World!";',
    'function fibonacci(n) { return n <= 1 ? n : fibonacci(n-1) + fibonacci(n-2); }',
    'const quickSort = arr => arr.length <= 1 ? arr : [...quickSort(arr.slice(1).filter(x => x <= arr[0])), arr[0], ...quickSort(arr.slice(1).filter(x => x > arr[0]))];',
    'const debounce = (func, delay) => { let timeoutId; return (...args) => { clearTimeout(timeoutId); timeoutId = setTimeout(() => func.apply(null, args), delay); }; };',
    'const memoize = fn => { const cache = {}; return (...args) => { const key = JSON.stringify(args); return cache[key] || (cache[key] = fn(...args)); }; };'
  ];

  // Generate random sparkle positions and colors
  const generateSparkles = () => {
    const colors = ['#60A5FA', '#F472B6', '#34D399', '#FBBF24', '#A78BFA'];
    const newSparkles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 10 + 5,
      delay: Math.random() * 2
    }));
    setSparkleColors(newSparkles);
  };

  // Handle sparkle click
  const handleSparkleClick = () => {
    generateSparkles();
    setTimeout(() => {
      document.body.style.background = '';
    }, 2000);
  };

  // Start coding game
  const startGame = () => {
    const randomCode = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
    setTargetCode(randomCode);
    setUserInput('');
    setScore(0);
    setTimeLeft(30);
    setGameState('playing');
  };

  // Reset game
  const resetGame = () => {
    setGameState('idle');
    setScore(0);
    setUserInput('');
    setTargetCode('');
    setTimeLeft(30);
  };

  // Handle typing
  const handleTyping = (e:any) => {
    const value = e.target.value;
    setUserInput(value);
    
    // Calculate accuracy
    let correct = 0;
    for (let i = 0; i < Math.min(value.length, targetCode.length); i++) {
      if (value[i] === targetCode[i]) correct++;
    }
    
    const accuracy = value.length > 0 ? (correct / value.length) * 100 : 0;
    setScore(Math.round(accuracy));
    
    // Check if completed
    if (value === targetCode) {
      setGameState('won');
    }
  };

  // Timer effect
  useEffect(() => {
    let timer :any;
    if (gameState === 'playing' && timeLeft > 0) {
      timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    } else if (timeLeft === 0 && gameState === 'playing') {
      setGameState('idle');
    }
    return () => clearTimeout(timer);
  }, [timeLeft, gameState]);

  // Initialize sparkles
  useEffect(() => {
    generateSparkles();
  }, []);

  // Animated code rain effect
  useEffect(() => {
    const canvas:any = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    const chars = '01{}[]();<>+-*=/.,:;|&%$#@!?abcdefghijklmnopqrstuvwxyz';
    const drops:any = [];
    
    for (let i = 0; i < canvas.width / 20; i++) {
      drops[i] = 1;
    }
    
    function draw() {
      ctx.fillStyle = isDarkMode ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = isDarkMode ? '#60A5FA' : '#3B82F6';
      ctx.font = '15px monospace';
      
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * 20, drops[i] * 20);
        
        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }
    
    const interval = setInterval(draw, 100);
    return () => clearInterval(interval);
  }, [isDarkMode]);

  const openFullscreen = () => {
    setIsFullscreen(true);
    startGame();
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    resetGame();
  };

  return (
    <div className="relative">
      {/* Main Hero Section */}
      <div className="relative lg:order-2 order-1">
        <div className="relative aspect-square max-w-lg mx-auto">
          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-500" />
          
          {/* Sparkle Background */}
          {sparkleColors.map((sparkle:any) => (
            <div
              key={sparkle.id}
              className="absolute rounded-full animate-ping cursor-pointer"
              style={{
                left: `${sparkle.x}%`,
                top: `${sparkle.y}%`,
                width: `${sparkle.size}px`,
                height: `${sparkle.size}px`,
                backgroundColor: sparkle.color,
                animationDelay: `${sparkle.delay}s`,
                opacity: 0.6,
              }}
              onClick={handleSparkleClick}
            />
          ))}

          {/* Main Interactive Container */}
          <div 
            className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-gray-200/20 shadow-2xl cursor-pointer group"
            onClick={openFullscreen}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
            
            {/* Animated Code Rain Background */}
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full opacity-30"
            />
            
            {/* Interactive Code Display */}
            <div className="absolute inset-0 flex items-center justify-center z-20 p-8">
              <div className="text-center space-y-4">
                <div className="text-6xl font-mono text-blue-400 group-hover:text-purple-400 transition-colors duration-300">
                  {'</>'}
                </div>
                <div className="text-lg text-white/80 font-medium">
                  Interactive Code Challenge
                </div>
                <div className="text-sm text-white/60">
                  Click to start coding!
                </div>
                <div className="flex items-center justify-center space-x-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play className="w-4 h-4 text-green-400" />
                  <span className="text-green-400 text-sm">Click to Play</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-4 right-4 z-30 p-2 bg-black/20 backdrop-blur-sm rounded-full border border-white/10">
              <Code2 className="w-4 h-4 text-blue-400 animate-pulse" />
            </div>
            <div 
              className="absolute bottom-4 left-4 z-30 p-2 bg-black/20 backdrop-blur-sm rounded-full border border-white/10 cursor-pointer hover:bg-purple-500/20 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                handleSparkleClick();
              }}
            >
              <Sparkles className="w-4 h-4 text-purple-400 animate-pulse delay-300" />
            </div>
          </div>

          {/* Experience Badge */}
          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-30">
            <div className="px-6 py-3 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-full shadow-lg backdrop-blur-sm">
              <div className="text-center">
                <div className="text-xl font-bold text-blue-500">{experienceInYears}+</div>
                <div className="text-xs text-gray-600 dark:text-gray-400 uppercase tracking-wide">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Game Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="w-full max-w-4xl bg-gray-900 rounded-2xl border border-gray-700 shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <div className="flex items-center space-x-4">
                <Code2 className="w-6 h-6 text-blue-400" />
                <h2 className="text-xl font-bold text-white">Code Typing Challenge</h2>
                {gameState === 'playing' && (
                  <div className="flex items-center space-x-4 text-sm">
                    <span className="text-green-400">Score: {score}%</span>
                    <span className="text-yellow-400">Time: {timeLeft}s</span>
                  </div>
                )}
              </div>
              <button
                onClick={closeFullscreen}
                className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* Game Content */}
            <div className="p-6 min-h-[400px]">
              {gameState === 'idle' && (
                <div className="text-center space-y-6">
                  <div className="text-6xl">🎮</div>
                  <h3 className="text-2xl font-bold text-white">Ready to Code?</h3>
                  <p className="text-gray-400 max-w-md mx-auto">
                    Type the code snippet as fast and accurately as possible. Test your coding speed and accuracy!
                  </p>
                  <button
                    onClick={startGame}
                    className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors flex items-center space-x-2 mx-auto"
                  >
                    <Play className="w-4 h-4" />
                    <span>Start Challenge</span>
                  </button>
                </div>
              )}

              {gameState === 'playing' && (
                <div className="space-y-6">
                  <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                    <h4 className="text-sm text-gray-400 mb-2">Type this code:</h4>
                    <pre className="text-green-400 font-mono text-lg leading-relaxed">
                      {targetCode}
                    </pre>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm text-gray-400">Your input:</label>
                    <textarea
                      value={userInput}
                      onChange={handleTyping}
                      className="w-full h-32 bg-gray-800 border border-gray-700 rounded-lg p-4 text-white font-mono resize-none focus:border-blue-500 focus:outline-none"
                      placeholder="Start typing the code here..."
                      autoFocus
                    />
                  </div>

                  <div className="flex justify-center">
                    <button
                      onClick={resetGame}
                      className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors flex items-center space-x-2"
                    >
                      <RotateCcw className="w-4 h-4" />
                      <span>Reset</span>
                    </button>
                  </div>
                </div>
              )}

              {gameState === 'won' && (
                <div className="text-center space-y-6">
                  <div className="text-6xl">🎉</div>
                  <h3 className="text-2xl font-bold text-green-400">Congratulations!</h3>
                  <p className="text-gray-400">
                    You completed the challenge with {score}% accuracy!
                  </p>
                  <div className="flex justify-center space-x-4">
                    <button
                      onClick={startGame}
                      className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                    >
                      Try Again
                    </button>
                    <button
                      onClick={closeFullscreen}
                      className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveHeroSection;