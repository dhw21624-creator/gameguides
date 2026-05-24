// GameGuides - Game Data & Guide Database
const GAMES = [
    {
        id: "genshin-impact",
        name: "Genshin Impact",
        icon: "🌟",
        genre: "Open World RPG",
        platforms: "PC / PS5 / Mobile",
        desc: "Explore the vast world of Teyvat, master elemental combat, and build the ultimate team of characters.",
        guides: [
            { title: "Beginner's Guide 2026 – Getting Started in Teyvat", category: "Beginner", date: "2026-05-20", slug: "beginners-guide-2026" },
            { title: "Best Characters Tier List – S-Rank Picks", category: "Tier List", date: "2026-05-18", slug: "best-characters-tier-list" },
            { title: "Artifact Guide – How to Build Perfect Sets", category: "Build", date: "2026-05-15", slug: "artifact-build-guide" },
            { title: "Spiral Abyss Floor 12 Complete Guide", category: "Endgame", date: "2026-05-12", slug: "spiral-abyss-floor-12-guide" },
            { title: "Primogem Farming – 10 Best Methods", category: "Farming", date: "2026-05-10", slug: "primogem-farming-guide" },
            { title: "Elemental Reactions Explained", category: "Mechanics", date: "2026-05-08", slug: "elemental-reactions-guide" }
        ]
    },
    {
        id: "minecraft",
        name: "Minecraft",
        icon: "⛏️",
        genre: "Sandbox / Survival",
        platforms: "PC / Console / Mobile",
        desc: "Build, explore, and survive in the world's most popular sandbox game. Master crafting, redstone, and more.",
        guides: [
            { title: "Minecraft Beginner's Guide 2026 – Day One Survival", category: "Beginner", date: "2026-05-22", slug: "beginners-guide-2026" },
            { title: "Best Seeds 2026 – Top 20 World Seeds", category: "Seeds", date: "2026-05-19", slug: "best-seeds-2026" },
            { title: "Redstone Guide – Beginner to Advanced Tutorial", category: "Tutorial", date: "2026-05-16", slug: "redstone-tutorial" },
            { title: "Nether Update Guide – Everything New", category: "Update", date: "2026-05-14", slug: "nether-update-guide" },
            { title: "Enchanting Guide – Best Enchantment Combos", category: "Mechanics", date: "2026-05-11", slug: "enchanting-guide" }
        ]
    },
    {
        id: "valorant",
        name: "Valorant",
        icon: "🎯",
        genre: "Tactical FPS",
        platforms: "PC",
        desc: "Riot's tactical shooter with unique agent abilities. Master aim, map control, and agent combos.",
        guides: [
            { title: "Valorant Beginner's Guide 2026", category: "Beginner", date: "2026-05-21", slug: "beginners-guide-2026" },
            { title: "Best Agents Tier List – Meta Picks", category: "Tier List", date: "2026-05-17", slug: "best-agents-tier-list" },
            { title: "Aim Training Guide – Improve Your Headshot %", category: "Training", date: "2026-05-13", slug: "aim-training-guide" },
            { title: "Map Guide: Ascent – Callouts & Strategies", category: "Map Guide", date: "2026-05-09", slug: "ascent-map-guide" }
        ]
    },
    {
        id: "cs2",
        name: "Counter-Strike 2",
        icon: "🔫",
        genre: "Tactical FPS",
        platforms: "PC",
        desc: "The legendary FPS reimagined. Learn competitive tactics, smoke lineups, and weapon mastery.",
        guides: [
            { title: "CS2 Beginner's Guide 2026", category: "Beginner", date: "2026-05-20", slug: "beginners-guide-2026" },
            { title: "Best Settings for CS2 – Max FPS & Visibility", category: "Settings", date: "2026-05-16", slug: "best-settings-guide" },
            { title: "Dust2 Complete Map Guide", category: "Map Guide", date: "2026-05-12", slug: "dust2-map-guide" },
            { title: "Weapon Guide – All Guns Ranked", category: "Weapons", date: "2026-05-08", slug: "weapon-guide" }
        ]
    },
    {
        id: "roblox",
        name: "Roblox",
        icon: "🎮",
        genre: "Sandbox / Multi-Genre",
        platforms: "PC / Mobile / Console",
        desc: "Millions of user-created games. Find guides for the most popular Roblox experiences.",
        guides: [
            { title: "Roblox Beginner's Guide 2026", category: "Beginner", date: "2026-05-22", slug: "beginners-guide-2026" },
            { title: "How to Make a Roblox Game – Step by Step", category: "Tutorial", date: "2026-05-19", slug: "how-to-make-game" },
            { title: "Best Roblox Games to Play in 2026", category: "List", date: "2026-05-15", slug: "best-games-2026" },
            { title: "Blox Fruits Complete Guide", category: "Game Guide", date: "2026-05-10", slug: "blox-fruits-guide" }
        ]
    },
    {
        id: "fortnite",
        name: "Fortnite",
        icon: "🏗️",
        genre: "Battle Royale",
        platforms: "PC / Console / Mobile",
        desc: "The battle royale phenomenon. Master building, landing spots, and weapon loadouts.",
        guides: [
            { title: "Fortnite Beginner's Guide 2026", category: "Beginner", date: "2026-05-18", slug: "beginners-guide-2026" },
            { title: "Best Landing Spots – Chapter 5 Map", category: "Map Guide", date: "2026-05-14", slug: "best-landing-spots" },
            { title: "Build Tutorial – Fast Building Techniques", category: "Tutorial", date: "2026-05-11", slug: "build-tutorial" }
        ]
    },
    {
        id: "league-of-legends",
        name: "League of Legends",
        icon: "⚔️",
        genre: "MOBA",
        platforms: "PC",
        desc: "The world's biggest MOBA. Climb the ranked ladder with champion guides and macro strategies.",
        guides: [
            { title: "LoL Beginner's Guide 2026", category: "Beginner", date: "2026-05-23", slug: "beginners-guide-2026" },
            { title: "Best Champions to Climb Ranked", category: "Tier List", date: "2026-05-20", slug: "best-champions-ranked" },
            { title: "Rune Setup Guide – Perfect Your Pages", category: "Mechanics", date: "2026-05-17", slug: "rune-setup-guide" }
        ]
    },
    {
        id: "clash-of-clans",
        name: "Clash of Clans",
        icon: "🏰",
        genre: "Strategy",
        platforms: "Mobile",
        desc: "Build your village, train troops, and dominate clan wars with the best attack strategies.",
        guides: [
            { title: "Clash of Clans Beginner's Guide 2026", category: "Beginner", date: "2026-05-21", slug: "beginners-guide-2026" },
            { title: "Best Attack Strategies – TH15+ Meta", category: "Strategy", date: "2026-05-18", slug: "best-attack-strategies" },
            { title: "Town Hall Upgrade Priority Guide", category: "Upgrade", date: "2026-05-14", slug: "th-upgrade-guide" }
        ]
    },
    {
        id: "pubg-mobile",
        name: "PUBG Mobile",
        icon: "🪂",
        genre: "Battle Royale",
        platforms: "Mobile",
        desc: "The definitive mobile battle royale. Best settings, map guides, and weapon comparisons.",
        guides: [
            { title: "PUBG Mobile Beginner's Guide 2026", category: "Beginner", date: "2026-05-19", slug: "beginners-guide-2026" },
            { title: "Best Sensitivity Settings", category: "Settings", date: "2026-05-16", slug: "best-sensitivity-settings" },
            { title: "Erangel Map Guide – Best Loot Spots", category: "Map Guide", date: "2026-05-13", slug: "erangel-map-guide" }
        ]
    },
    {
        id: "candy-crush",
        name: "Candy Crush Saga",
        icon: "🍬",
        genre: "Puzzle",
        platforms: "Mobile",
        desc: "Match your way through thousands of levels with tips, tricks, and booster strategies.",
        guides: [
            { title: "Candy Crush Tips & Tricks 2026", category: "Tips", date: "2026-05-20", slug: "tips-and-tricks-2026" },
            { title: "Boosters Explained – How to Use Them", category: "Mechanics", date: "2026-05-15", slug: "boosters-explained" },
            { title: "Hardest Levels Guide – Solutions Inside", category: "Level Guide", date: "2026-05-10", slug: "hardest-levels-guide" }
        ]
    },
    {
        id: "clash-royale",
        name: "Clash Royale",
        icon: "👑",
        genre: "Card Battle",
        platforms: "Mobile",
        desc: "Real-time card battles. Find the best decks, counter strategies, and arena guides.",
        guides: [
            { title: "Clash Royale Beginner's Guide 2026", category: "Beginner", date: "2026-05-22", slug: "beginners-guide-2026" },
            { title: "Best Decks 2026 – Top Meta Decks", category: "Deck", date: "2026-05-17", slug: "best-decks-2026" },
            { title: "Card Upgrade Priority Guide", category: "Upgrade", date: "2026-05-12", slug: "card-upgrade-guide" }
        ]
    },
    {
        id: "honkai-star-rail",
        name: "Honkai: Star Rail",
        icon: "🚂",
        genre: "Turn-Based RPG",
        platforms: "PC / Mobile",
        desc: "Ride the Astral Express through the galaxy. Character builds, team comps, and relic farming.",
        guides: [
            { title: "Honkai: Star Rail Beginner's Guide 2026", category: "Beginner", date: "2026-05-23", slug: "beginners-guide-2026" },
            { title: "Best Characters Tier List", category: "Tier List", date: "2026-05-20", slug: "best-characters-tier-list" },
            { title: "Relic Guide – Best Sets for Every Character", category: "Build", date: "2026-05-15", slug: "relic-build-guide" }
        ]
    }
];