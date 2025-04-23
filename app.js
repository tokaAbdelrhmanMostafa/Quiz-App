let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft;
let currentQuestions = [];

// DOM Elements
const welcomeScreen = document.getElementById('welcome-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const leaderboardScreen = document.getElementById('leaderboard-screen');
const categorySelect = document.getElementById('category');
const difficultySelect = document.getElementById('difficulty');
const startBtn = document.getElementById('start-btn');
const leaderboardBtn = document.getElementById('leaderboard-btn');
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const timerElement = document.getElementById('timer');
const scoreElement = document.getElementById('score');
const finalScoreElement = document.getElementById('final-score');
const playerNameInput = document.getElementById('player-name');
const saveScoreBtn = document.getElementById('save-score-btn');
const playAgainBtn = document.getElementById('play-again-btn');
const backBtn = document.getElementById('back-btn');
const leaderboardList = document.getElementById('leaderboard-list');

// Event Listeners
startBtn.addEventListener('click', startQuiz);
leaderboardBtn.addEventListener('click', showLeaderboard);
saveScoreBtn.addEventListener('click', saveScore);
playAgainBtn.addEventListener('click', () => showScreen(welcomeScreen));
backBtn.addEventListener('click', () => showScreen(welcomeScreen));

function showScreen(screen) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    screen.classList.add('active');
}

function startQuiz() {
    const category = categorySelect.value;
    const difficulty = difficultySelect.value;
    currentQuestions = [...questions[category][difficulty]];
    currentQuestion = 0;
    score = 0;
    timeLeft = 300; // Increased time to 5 minutes for 20 questions
    
    showScreen(quizScreen);
    updateScore();
    startTimer();
    showQuestion();
}

function startTimer() {
    if (timer) clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        timerElement.textContent = `Time: ${timeLeft}`;
        if (timeLeft <= 0) {
            endQuiz();
        }
    }, 1000);
}

function showQuestion() {
    const question = currentQuestions[currentQuestion];
    questionElement.textContent = `Question ${currentQuestion + 1}/20: ${question.question}`;
    
    answersElement.innerHTML = '';
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = answer;
        button.addEventListener('click', () => selectAnswer(index));
        answersElement.appendChild(button);
    });
}

function selectAnswer(answerIndex) {
    const question = currentQuestions[currentQuestion];
    const buttons = answersElement.querySelectorAll('.answer-btn');
    
    buttons.forEach(button => button.disabled = true);
    
    if (answerIndex === question.correct) {
        buttons[answerIndex].classList.add('correct');
        score += 10;
        updateScore();
    } else {
        buttons[answerIndex].classList.add('wrong');
        buttons[question.correct].classList.add('correct');
    }
    
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < currentQuestions.length) {
            showQuestion();
        } else {
            endQuiz();
        }
    }, 1000);
}

function updateScore() {
    scoreElement.textContent = `Score: ${score}`;
}

function endQuiz() {
    clearInterval(timer);
    finalScoreElement.textContent = `Final Score: ${score} out of 200`;
    showScreen(resultScreen);
}

function saveScore() {
    const playerName = playerNameInput.value.trim();
    if (!playerName) return;
    
    const scores = JSON.parse(localStorage.getItem('quizScores') || '[]');
    scores.push({
        name: playerName,
        score: score,
        category: categorySelect.value,
        difficulty: difficultySelect.value
    });
    
    scores.sort((a, b) => b.score - a.score);
    localStorage.setItem('quizScores', JSON.stringify(scores.slice(0, 10)));
    
    showLeaderboard();
}

function showLeaderboard() {
    const scores = JSON.parse(localStorage.getItem('quizScores') || '[]');
    leaderboardList.innerHTML = scores.map((score, index) => `
        <div class="leaderboard-item">
            <span>${index + 1}. ${score.name}</span>
            <span>${score.score} points (${score.category} - ${score.difficulty})</span>
        </div>
    `).join('');
    
    showScreen(leaderboardScreen);
}