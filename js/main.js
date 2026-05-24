// GameGuides - Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
    renderGameGrid();
    renderLatestGuides();
    renderFooterGames();
    setupSearch();
});

function renderGameGrid() {
    const grid = document.getElementById('gameGrid');
    if (!grid) return;
    
    grid.innerHTML = GAMES.map(game => `
        <a href="games/${game.id}/" class="game-card">
            <div class="game-card-img">${game.icon}</div>
            <div class="game-card-body">
                <h3>${game.name}</h3>
                <div class="genre">${game.genre}</div>
                <div class="desc">${game.desc.substring(0, 80)}...</div>
            </div>
        </a>
    `).join('');
}

function renderLatestGuides() {
    const container = document.getElementById('latestGuides');
    if (!container) return;
    
    const allGuides = [];
    GAMES.forEach(game => {
        game.guides.forEach(guide => {
            allGuides.push({
                ...guide,
                gameName: game.name,
                gameId: game.id
            });
        });
    });
    
    // Sort by date descending, take latest 12
    allGuides.sort((a, b) => new Date(b.date) - new Date(a.date));
    const latest = allGuides.slice(0, 12);
    
    container.innerHTML = latest.map(guide => `
        <a href="games/${guide.gameId}/${guide.slug}.html" class="article-card">
            <span class="game-tag">${guide.gameName}</span>
            <h3>${guide.title}</h3>
            <div class="date">${formatDate(guide.date)} · ${guide.category}</div>
        </a>
    `).join('');
}

function renderFooterGames() {
    const footerList = document.getElementById('footerGames');
    if (!footerList) return;
    
    footerList.innerHTML = GAMES.slice(0, 8).map(game => `
        <li><a href="games/${game.id}/">${game.name}</a></li>
    `).join('');
}

function setupSearch() {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    
    if (!searchBtn || !searchInput) return;
    
    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        if (!query) return;
        
        const results = [];
        GAMES.forEach(game => {
            if (game.name.toLowerCase().includes(query)) {
                results.push({ type: 'game', game: game });
            }
            game.guides.forEach(guide => {
                if (guide.title.toLowerCase().includes(query)) {
                    results.push({ type: 'guide', guide: guide, game: game });
                }
            });
        });
        
        displaySearchResults(query, results);
    }
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') performSearch();
    });
}

function displaySearchResults(query, results) {
    const main = document.querySelector('main');
    const existingResults = document.getElementById('searchResults');
    if (existingResults) existingResults.remove();
    
    const resultsHTML = `
        <section id="searchResults" class="games-section">
            <div class="container">
                <h2>Search Results for "${escapeHtml(query)}"</h2>
                <p style="color: var(--text-muted); margin-bottom: 20px;">${results.length} result${results.length !== 1 ? 's' : ''} found</p>
                ${results.length === 0 ? '<p>No results found. Try different keywords.</p>' : `
                <div class="guide-grid">
                    ${results.map(r => {
                        if (r.type === 'game') {
                            return `
                            <a href="games/${r.game.id}/" class="guide-card">
                                <div class="category">🎮 Game</div>
                                <h3>${r.game.name}</h3>
                                <div class="meta">${r.game.genre} · ${r.game.platforms}</div>
                            </a>`;
                        } else {
                            return `
                            <a href="games/${r.game.id}/${r.guide.slug}.html" class="guide-card">
                                <div class="category">📖 Guide</div>
                                <h3>${r.guide.title}</h3>
                                <div class="meta">${r.game.name} · ${r.guide.category}</div>
                            </a>`;
                        }
                    }).join('')}
                </div>`}
            </div>
        </section>
    `;
    
    main.insertAdjacentHTML('beforeend', resultsHTML);
    document.getElementById('searchResults').scrollIntoView({ behavior: 'smooth' });
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}