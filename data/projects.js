/* Every project on the site. To add one: copy an entry, drop its thumbnail (800x500 jpg) into img/projects/. */
window.CATEGORIES = [
  { id: "ml",     label: "Machine learning & AI" },
  { id: "vision", label: "Vision & audio" },
  { id: "apps",   label: "Apps & games" }
];

window.PROJECTS = [
  { id: "pawlytics", title: "Pawlytics", cat: "ml", featured: true,
    blurb: "Multimodal dog-health assistant: Bio_ClinicalBERT, YAMNet and EfficientNet-B0 behind an Express + Flask app.",
    tags: ["PyTorch", "TensorFlow", "Flask", "Node.js", "MongoDB"],
    repo: "pawlytics", img: "pawlytics" },

  { id: "creature", title: "Mountain-climbing creature", cat: "ml",
    blurb: "Genetic algorithm that evolves virtual creatures to climb a mountain in a PyBullet physics simulation.",
    tags: ["Python", "PyBullet", "Genetic algorithms"],
    repo: "artificial-intelligence-mountain-climbing-creature", img: "artificial-intelligence-mountain-climbing-creature" },

  { id: "fake-news", title: "Fake-news detection", cat: "ml",
    blurb: "Naive Bayes + TF-IDF vs Word2Vec + logistic regression: 94% vs 97% accuracy.",
    tags: ["scikit-learn", "NLTK", "gensim"],
    repo: "fake-news-detection", img: "fake-news-detection" },

  { id: "house-prices", title: "House-price prediction", cat: "ml",
    blurb: "Under-fitting vs over-fitting vs a tuned neural network with dropout and early stopping.",
    tags: ["TensorFlow", "Keras"],
    repo: "machine-learning-house-prices", img: "machine-learning-house-prices" },

  { id: "loan", title: "Loan approval", cat: "ml",
    blurb: "Decision tree and KNN written from scratch, PCA and nested cross-validation.",
    tags: ["scikit-learn", "PCA"],
    repo: "machine-learning-loan-approval", img: "machine-learning-loan-approval" },

  { id: "movies", title: "Movie revenue prediction", cat: "ml",
    blurb: "Cleaning, statistics and linear / polynomial regression on 9,700 TMDb movies.",
    tags: ["pandas", "scikit-learn"],
    repo: "movie-revenue-prediction", img: "movie-revenue-prediction" },

  { id: "scraping", title: "Web scraping & text analysis", cat: "ml",
    blurb: "Scrapes eight online articles about virtual reality and compares them: word frequencies, bigrams, word cloud.",
    tags: ["BeautifulSoup", "NLTK"],
    repo: "web-scraping-text-analysis", img: "web-scraping-text-analysis" },

  { id: "traffic", title: "Traffic car tracking", cat: "vision",
    blurb: "Detects, tracks and counts cars in traffic-camera footage with frame differencing, background subtraction and Kalman filters.",
    tags: ["OpenCV", "Python"],
    repo: "traffic-car-tracking", img: "traffic-car-tracking" },

  { id: "speech", title: "Speech-recognition assistant", cat: "vision",
    blurb: "Offline English / Spanish / Italian recognition for an airport assistant, with noise filtering and word-error-rate evaluation.",
    tags: ["Vosk", "Python"],
    repo: "speech-recognition-assistant", img: "speech-recognition-assistant" },

  { id: "stego", title: "Audio steganography", cat: "vision",
    blurb: "Finds a code hidden near 19 kHz and hides a message in the least significant bits of a sound.",
    tags: ["SciPy", "Vosk"],
    repo: "audio-steganography", img: "audio-steganography" },

  { id: "compression", title: "Media compression tools", cat: "vision",
    blurb: "Lossless audio compression with Rice coding built from scratch, plus an automatic film format checker and converter.",
    tags: ["Python", "ffmpeg"],
    repo: "media-compression-tools", img: "media-compression-tools" },

  { id: "web-audio", title: "Web audio apps", cat: "vision",
    blurb: "Real-time effects processor, audio CAPTCHA, music visualiser and a voice-controlled visualiser in the browser.",
    tags: ["p5.js", "Web Audio", "Meyda"],
    repo: "web-audio-apps", demo: "https://ziadelh.github.io/web-audio-apps/", img: "web-audio-apps" },

  { id: "webcam", title: "Webcam image processing", cat: "vision",
    blurb: "Live colour channels, thresholding, HSV / YUV conversion and face detection with filters.",
    tags: ["p5.js"],
    repo: "webcam-image-processing", demo: "https://ziadelh.github.io/webcam-image-processing/", img: "webcam-image-processing" },

  { id: "snooker", title: "Snooker", cat: "apps",
    blurb: "Browser snooker with Matter.js physics, three game modes and a guided tutorial.",
    tags: ["p5.js", "Matter.js"],
    repo: "snooker-game", demo: "https://ziadelh.github.io/snooker-game/", img: "snooker-game" },

  { id: "platformer", title: "Platformer", cat: "apps",
    blurb: "Side-scrolling platformer with platforms, coins, enemies, lives and a scrolling camera.",
    tags: ["p5.js"],
    repo: "platformer-game", demo: "https://ziadelh.github.io/platformer-game/", img: "platformer-game" },

  { id: "drawing", title: "Drawing app", cat: "apps",
    blurb: "Eight tools, a colour palette, undo, cut & paste and save-to-image.",
    tags: ["p5.js"],
    repo: "drawing-app", demo: "https://ziadelh.github.io/drawing-app/", img: "drawing-app" },

  { id: "porsche", title: "Porsche fan site", cat: "apps",
    blurb: "Six-page site with slideshow, racing news, engine history and a 911 showcase.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    repo: "porsche-website", demo: "https://ziadelh.github.io/porsche-website/", img: "porsche-website" },

  { id: "vet", title: "Vet clinic app", cat: "apps",
    blurb: "Accounts, appointment booking with Google Maps, and a pet shop with cart and memberships.",
    tags: ["Node.js", "Express", "SQLite"],
    repo: "vet-clinic-app", img: "vet-clinic-app" },

  { id: "blog", title: "Blog app", cat: "apps",
    blurb: "Blogging tool with author and reader views, likes, comments and drafts.",
    tags: ["Node.js", "Express", "SQLite"],
    repo: "blog-app", img: "blog-app" },

  { id: "crypto", title: "Crypto trading simulator", cat: "apps",
    blurb: "Console exchange with candlestick plots and bar charts built from a 1M-row order book.",
    tags: ["C++"],
    repo: "crypto-trading-simulator", img: "crypto-trading-simulator" },

  { id: "dj", title: "DJ mixing app", cat: "apps",
    blurb: "Two-deck mixer with waveforms, volume faders and a searchable track library.",
    tags: ["C++", "JUCE"],
    repo: "dj-mixing-app", img: "dj-mixing-app" }
];
