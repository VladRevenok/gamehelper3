const questions = [
  {
    text: "What type of gameplay do you prefer?",
    emoji: "🎮",
    options: [
      { text: "Action & Combat", emoji: "⚔️", tags: ["action", "combat"] },
      { text: "Story & Narrative", emoji: "📖", tags: ["story", "adventure"] },
      { text: "Strategy & Thinking", emoji: "🧠", tags: ["strategy"] },
      { text: "Multiplayer & Competition", emoji: "🏆", tags: ["multiplayer", "competitive"] },
    ]
  },
  {
    text: "What's your preferred game world?",
    emoji: "🌍",
    options: [
      { text: "Open World / Exploration", emoji: "🗺️", tags: ["openworld"] },
      { text: "Post-apocalyptic / Horror / Dark", emoji: "💀", tags: ["survival", "postapoc", "horror"] },
      { text: "Fantasy / Mythology", emoji: "🐉", tags: ["fantasy"] },
      { text: "Modern / Realistic / Sci-Fi", emoji: "🏙️", tags: ["modern", "realistic"] },
    ]
  },
  {
    text: "How much time do you usually play per session?",
    emoji: "⏱️",
    options: [
      { text: "Quick sessions (under 1 hour)", emoji: "⚡", tags: ["casual"] },
      { text: "Medium (1–3 hours)", emoji: "🎯", tags: ["medium"] },
      { text: "Long sessions (3+ hours)", emoji: "🌙", tags: ["long"] },
      { text: "I play all day 😅", emoji: "💀", tags: ["long", "openworld"] },
    ]
  },
  {
    text: "Do you prefer playing alone or with others?",
    emoji: "👥",
    options: [
      { text: "Solo only", emoji: "🧍", tags: ["story", "adventure"] },
      { text: "Co-op with friends", emoji: "🤝", tags: ["multiplayer"] },
      { text: "Competitive online", emoji: "⚡", tags: ["competitive", "multiplayer"] },
      { text: "Both solo and multiplayer", emoji: "🔀", tags: ["multiplayer", "story"] },
    ]
  },
  {
    text: "What's most important to you in a game?",
    emoji: "✨",
    options: [
      { text: "Stunning Graphics & Atmosphere", emoji: "🎨", tags: ["graphics"] },
      { text: "Intense Combat & Mechanics", emoji: "🔥", tags: ["action", "combat"] },
      { text: "Deep Story & Emotions", emoji: "💔", tags: ["story", "adventure"] },
      { text: "Replayability & Progression", emoji: "🔄", tags: ["competitive", "casual"] },
    ]
  },
];

const games = [
  {
    name: "The Last of Us",
    emoji: "🌿",
    img: "https://upload.wikimedia.org/wikipedia/en/4/46/Video_game_cover_of_The_Last_of_Us.jpg",
    desc: "A masterpiece of storytelling. Survive a post-pandemic world with unforgettable characters.",
    tags: ["story", "adventure", "postapoc", "survival", "graphics", "long"],
    genre: "Action-Adventure", platform: "PS / PC"
  },
  {
    name: "Red Dead Redemption 2",
    emoji: "🤠",
    img: "https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg",
    desc: "Epic open-world Western with stunning visuals, rich story and total freedom.",
    tags: ["story", "openworld", "graphics", "long", "adventure", "realistic"],
    genre: "Open World", platform: "PS / Xbox / PC"
  },
  {
    name: "God of War Ragnarök",
    emoji: "⚡",
    img: "https://upload.wikimedia.org/wikipedia/en/e/e5/God_of_War_Ragnar%C3%B6k_cover.jpg",
    desc: "Norse mythology action with breathtaking combat and emotional father-son story.",
    tags: ["action", "combat", "fantasy", "story", "graphics", "long"],
    genre: "Action RPG", platform: "PS"
  },
  {
    name: "Counter-Strike 2",
    emoji: "🎯",
    img: "https://upload.wikimedia.org/wikipedia/en/f/f1/CS2_cover.jpg",
    desc: "The ultimate competitive FPS. Pure skill, strategy and adrenaline every round.",
    tags: ["competitive", "multiplayer", "modern", "action", "medium", "realistic"],
    genre: "FPS", platform: "PC"
  },
  {
    name: "Fortnite",
    emoji: "🏗️",
    img: "https://upload.wikimedia.org/wikipedia/en/1/1a/Fortnite_cover_art.jpg",
    desc: "Battle royale with building, constant updates and massive player base.",
    tags: ["multiplayer", "competitive", "action", "casual", "medium"],
    genre: "Battle Royale", platform: "All Platforms"
  },
  {
    name: "Black Myth: Wukong",
    emoji: "🐒",
    img: "https://upload.wikimedia.org/wikipedia/en/6/63/Black_Myth-_Wukong_cover_art.jpg",
    desc: "Stunning action RPG rooted in Chinese mythology with punishing yet rewarding combat.",
    tags: ["action", "combat", "fantasy", "graphics", "story", "long"],
    genre: "Action RPG", platform: "PS / PC"
  },
  {
    name: "The Witcher 3",
    emoji: "🧙",
    img: "https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg",
    desc: "Legendary open-world RPG with branching choices, rich lore and unforgettable characters.",
    tags: ["story", "openworld", "fantasy", "graphics", "long", "adventure"],
    genre: "RPG", platform: "All Platforms"
  },
  {
    name: "Cyberpunk 2077",
    emoji: "🏙️",
    img: "https://upload.wikimedia.org/wikipedia/en/9/9f/Cyberpunk_2077_box_art.jpg",
    desc: "Neon-drenched open-world RPG with deep story and stunning sci-fi atmosphere.",
    tags: ["openworld", "story", "adventure", "graphics", "long", "realistic"],
    genre: "Open World RPG", platform: "PS / PC"
  },
  {
    name: "Elden Ring",
    emoji: "🏹",
    img: "https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg",
    desc: "Brutal open-world soulslike with deep lore and endlessly rewarding exploration.",
    tags: ["action", "combat", "openworld", "story", "long", "fantasy"],
    genre: "Souls-like", platform: "All Platforms"
  },
  {
    name: "Minecraft",
    emoji: "⛏️",
    img: "https://upload.wikimedia.org/wikipedia/en/5/51/Minecraft_cover.png",
    desc: "Infinite sandbox where you build, survive and explore procedurally generated worlds.",
    tags: ["openworld", "action", "multiplayer", "casual", "long", "adventure"],
    genre: "Sandbox", platform: "All Platforms"
  },
  {
    name: "GTA V",
    emoji: "🚗",
    img: "https://upload.wikimedia.org/wikipedia/en/a/a5/GTA_V.png",
    desc: "Massive open-world crime epic with endless activities and thriving online mode.",
    tags: ["openworld", "story", "action", "multiplayer", "realistic", "long"],
    genre: "Open World", platform: "All Platforms"
  },
  {
    name: "Hogwarts Legacy",
    emoji: "🧙‍♀️",
    img: "https://upload.wikimedia.org/wikipedia/en/6/67/Hogwarts_Legacy.jpg",
    desc: "Explore Hogwarts in the 1800s — a beautiful open-world fantasy RPG.",
    tags: ["story", "openworld", "fantasy", "graphics", "adventure", "long"],
    genre: "Action RPG", platform: "All Platforms"
  },
  {
    name: "Baldur's Gate 3",
    emoji: "🎲",
    img: "https://upload.wikimedia.org/wikipedia/en/5/5a/Baldur%27s_Gate_3_cover.jpg",
    desc: "The deepest RPG in years — incredible story, choices that truly matter.",
    tags: ["story", "strategy", "fantasy", "long", "adventure", "graphics", "multiplayer"],
    genre: "RPG", platform: "PS / PC"
  },
  {
    name: "Hades",
    emoji: "🔱",
    img: "https://upload.wikimedia.org/wikipedia/en/c/cc/Hades_game_cover_art.jpg",
    desc: "Roguelite perfection — fast combat, amazing writing and infinite replayability.",
    tags: ["action", "combat", "fantasy", "story", "medium", "casual"],
    genre: "Roguelite", platform: "All Platforms"
  },
  {
    name: "Hollow Knight",
    emoji: "🦋",
    img: "https://upload.wikimedia.org/wikipedia/en/5/5f/Hollow_Knight_cover_art.jpg",
    desc: "Dark, atmospheric metroidvania with tight combat and breathtaking handcrafted world.",
    tags: ["action", "combat", "fantasy", "story", "medium", "long", "adventure"],
    genre: "Metroidvania", platform: "All Platforms"
  },
  {
    name: "Stardew Valley",
    emoji: "🌾",
    img: "https://upload.wikimedia.org/wikipedia/en/f/fd/Logo_of_Stardew_Valley.png",
    desc: "Peaceful farming RPG — build your farm, befriend villagers, explore caves.",
    tags: ["story", "casual", "openworld", "medium", "long", "multiplayer"],
    genre: "Simulation", platform: "All Platforms"
  },
  {
    name: "Valorant",
    emoji: "🔫",
    img: "https://upload.wikimedia.org/wikipedia/en/6/6a/Valorant_cover.jpg",
    desc: "Precise tactical shooter with unique agent abilities and ranked competitive mode.",
    tags: ["competitive", "multiplayer", "action", "modern", "medium"],
    genre: "Tactical FPS", platform: "PC"
  },
  {
    name: "Apex Legends",
    emoji: "🦅",
    img: "https://upload.wikimedia.org/wikipedia/en/f/f7/Apex_legends.jpg",
    desc: "Fast-paced battle royale with distinct legends and fluid movement system.",
    tags: ["competitive", "multiplayer", "action", "medium", "casual"],
    genre: "Battle Royale", platform: "All Platforms"
  },
  {
    name: "Dead Space",
    emoji: "👾",
    img: "https://upload.wikimedia.org/wikipedia/en/7/72/Dead_Space_remake_cover.jpg",
    desc: "Terrifying sci-fi horror — dismember necromorphs aboard a haunted space station.",
    tags: ["story", "action", "horror", "graphics", "medium", "long"],
    genre: "Horror", platform: "PS / PC"
  },
  {
    name: "Resident Evil 4",
    emoji: "🧟",
    img: "https://upload.wikimedia.org/wikipedia/en/8/8b/Resident_Evil_4_remake_cover_art.jpg",
    desc: "Masterfully remade survival horror — tense action, great pacing, iconic story.",
    tags: ["action", "story", "adventure", "graphics", "medium", "long", "horror"],
    genre: "Action Horror", platform: "All Platforms"
  },
  {
    name: "Detroit: Become Human",
    emoji: "🤖",
    img: "https://upload.wikimedia.org/wikipedia/en/e/e9/Detroit_Become_Human_cover_art.jpg",
    desc: "Cinematic narrative game where every choice shapes the fate of AI androids.",
    tags: ["story", "adventure", "graphics", "long", "realistic"],
    genre: "Narrative", platform: "PS / PC"
  },
  {
    name: "Disco Elysium",
    emoji: "🕵️",
    img: "https://upload.wikimedia.org/wikipedia/en/7/75/Disco_Elysium_cover_art.jpg",
    desc: "Unique detective RPG driven entirely by dialogue, skill checks and dark humor.",
    tags: ["story", "adventure", "strategy", "medium", "long"],
    genre: "RPG", platform: "PS / PC"
  },
  {
    name: "It Takes Two",
    emoji: "🤝",
    img: "https://upload.wikimedia.org/wikipedia/en/3/3b/It_Takes_Two_cover_art.jpg",
    desc: "Brilliant co-op adventure — constantly inventive gameplay built for two players.",
    tags: ["story", "adventure", "multiplayer", "casual", "medium", "long"],
    genre: "Co-op", platform: "All Platforms"
  },
  {
    name: "EA Sports FC 25",
    emoji: "⚽",
    img: "https://upload.wikimedia.org/wikipedia/en/7/7c/EA_Sports_FC_25_cover.jpg",
    desc: "The world's biggest football game — ultimate team, career mode and online matches.",
    tags: ["competitive", "multiplayer", "modern", "medium", "casual"],
    genre: "Sports", platform: "All Platforms"
  },
  {
    name: "Sekiro: Shadows Die Twice",
    emoji: "🗡️",
    img: "https://upload.wikimedia.org/wikipedia/en/6/6e/Sekiro_art.jpg",
    desc: "Precise, demanding samurai combat in feudal Japan — mastery feels incredible.",
    tags: ["action", "combat", "fantasy", "long", "graphics", "story"],
    genre: "Souls-like", platform: "PS / Xbox / PC"
  },
  {
    name: "Mass Effect Legendary",
    emoji: "🚀",
    img: "https://upload.wikimedia.org/wikipedia/en/5/5e/Mass_Effect_Legendary_Edition.jpg",
    desc: "Legendary sci-fi RPG trilogy — deep choices, crew bonds and galaxy-scale story.",
    tags: ["story", "adventure", "openworld", "graphics", "long", "realistic"],
    genre: "RPG", platform: "PS / Xbox / PC"
  },
  {
    name: "A Plague Tale: Requiem",
    emoji: "🐀",
    img: "https://upload.wikimedia.org/wikipedia/en/a/a8/A_Plague_Tale-_Requiem.jpg",
    desc: "Stunning emotional journey through plague-ridden medieval France — a visual masterpiece.",
    tags: ["story", "adventure", "postapoc", "graphics", "long"],
    genre: "Action-Adventure", platform: "PS / Xbox / PC"
  },
];

let currentQuestion = 0;
let collectedTags = [];

const overlay = document.getElementById('modalOverlay');
const closeBtn = document.getElementById('modalClose');
const startBtn = document.getElementById('startBtn');
const modalContent = document.getElementById('modalContent');

startBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });

function openModal() {
  currentQuestion = 0;
  collectedTags = [];
  overlay.classList.add('open');
  renderQuestion();
}

function closeModal() {
  overlay.classList.remove('open');
}

function renderQuestion() {
  const q = questions[currentQuestion];
  const progress = (currentQuestion / questions.length) * 100;

  modalContent.innerHTML = `
    <div class="modal-header">
      <div class="modal-step">Question ${currentQuestion + 1} of ${questions.length}</div>
      <div class="modal-question">${q.emoji} ${q.text}</div>
    </div>
    <div class="modal-progress">
      <div class="modal-progress-bar" style="width: ${progress}%"></div>
    </div>
    <div class="modal-options">
      ${q.options.map(opt => `
        <button class="modal-option" onclick='selectOption(${JSON.stringify(opt.tags)})'>
          <span class="opt-emoji">${opt.emoji}</span>
          <span>${opt.text}</span>
        </button>
      `).join('')}
    </div>
  `;

  setTimeout(() => {
    document.querySelectorAll('.modal-option').forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateX(-15px)';
      el.style.transition = `opacity 0.3s ${i * 0.07}s, transform 0.3s ${i * 0.07}s`;
      requestAnimationFrame(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateX(0)';
      });
    });
  }, 10);
}

function selectOption(tags) {
  collectedTags.push(...tags);
  currentQuestion++;

  if (currentQuestion >= questions.length) {
    showResult();
  } else {
    modalContent.style.opacity = '0';
    modalContent.style.transform = 'translateX(20px)';
    modalContent.style.transition = 'opacity 0.25s, transform 0.25s';
    setTimeout(() => {
      modalContent.style.transition = 'none';
      modalContent.style.transform = 'translateX(-20px)';
      renderQuestion();
      requestAnimationFrame(() => {
        modalContent.style.transition = 'opacity 0.3s, transform 0.3s';
        modalContent.style.opacity = '1';
        modalContent.style.transform = 'translateX(0)';
      });
    }, 250);
  }
}

function showResult() {
  const scored = games.map(game => {
    const score = collectedTags.reduce((acc, tag) => acc + (game.tags.includes(tag) ? 1 : 0), 0);
    return { ...game, score };
  }).sort((a, b) => b.score - a.score);

  const top = scored.slice(0, 3).filter(g => g.score > 0);
  const medals = ['🥇', '🥈', '🥉'];

  modalContent.innerHTML = `
    <div class="result-screen">
      <div class="result-label">🎯 Your top picks</div>
      ${top.map((game, i) => `
        <div class="result-game-block ${i === 0 ? 'result-top' : ''}">
          <div class="result-rank">${medals[i]}</div>
          <div class="result-game-img-wrap">
            <img
              src="${game.img}"
              alt="${game.name}"
              onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
            >
            <div class="result-game-emoji-fallback" style="display:none">${game.emoji}</div>
          </div>
          <div class="result-game-body">
            <div class="result-title">${game.name}</div>
            <div class="result-desc">${game.desc}</div>
            <div class="result-tags">
              <span class="result-tag">${game.genre}</span>
              <span class="result-tag">${game.platform}</span>
            </div>
          </div>
        </div>
      `).join('')}
      <div class="result-actions">
        <button class="btn-primary" onclick="closeModal()" style="font-size:0.8rem;padding:0.7rem 1.5rem;">Done ✓</button>
        <button class="btn-secondary" onclick="restartQuiz()">Try Again ↺</button>
        <a href="all-games.html"><button class="btn-secondary">All Games →</button></a>
      </div>
    </div>
  `;
}

function restartQuiz() {
  currentQuestion = 0;
  collectedTags = [];
  modalContent.style.opacity = '0';
  setTimeout(() => {
    renderQuestion();
    modalContent.style.transition = 'opacity 0.3s';
    modalContent.style.opacity = '1';
  }, 200);
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
