/* =======================================================================
  MAGAZYN GIER HYARO'S SH0P
  Tylko ten plik edytujesz, żeby dodawać/usuwać gry!
======================================================================= */

const bazaGier = [
    {
        id: 1, 
        title: "Forza Horizon 6", 
        price: "€5.00",
        tags: ["popular"],
        soldCount: 6,
        available: "Yes",
        image: "https://store-images.s-microsoft.com/image/apps.60342.13547047233571036.013c5ec3-a5d7-4e8a-83e7-470299116376.2346f664-c01a-4b06-a92c-4819a43e8f75", 
        description: "Includes a 1-click easy installer. Jump straight into the action and play online with your friends in minutes!",
        features: ["Safe & Instant Delivery", "1-Click Easy Installer", "Online Multiplayer Enabled", "24/7 Discord Support"]
    },
    {
        id: 2,
        title: "Elden Ring", 
        price: "€7.50",
        tags: ["requested"],
        soldCount: 1,
        available: "Yes",
        requestedBy: "Skectta",
        image: "https://assets.xboxservices.com/assets/7b/54/7b54f5e4-0857-4ce3-8a18-2b8c431e8a9e.jpg?n=Elden-Ring_GLP-Page-Hero-0_1083x1222_01.jpg",
        description: "An epic action RPG adventure requested by our community. Rise, Tarnished, and be guided by grace.",
        features: ["Safe & Instant Delivery", "Game of The Year Edition", "24/7 Discord Support"]
    },
    {
        id: 3,
        title: "Hollow Knight",
        price: "€2.50",
        tags: ["requested"],
        soldCount: 1,
        available: "Yes",
        requestedBy: "Aappanada",
        image: "https://assetsio.gnwcdn.com/cobfzp.jpg?width=380&quality=85&format=jpg&auto=webp",
        description: "Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes.",
        features: ["Safe & Instant Delivery", "1-Click Easy Installer", "24/7 Discord Support"]
    },
    {
        id: 4,
        title: "LEGO® Batman™: LOTDK",
        price: "€10.00",
        tags: ["popular", "denuvo"],
        soldCount: 3,
        available: "Yes",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202508/1316/3302f35b66691aa405aee31624c0c95fe73081be8e0c75bb.png",
        description: "Game + Bypass included. Requires a short conversation with the seller to activate properly without hypervisor.",
        features: ["Guaranteed Denuvo Bypass", "Direct Seller Assistance", "24/7 Discord Support"]
    },
    {
        id: 5,
        title: "Euro Truck Simulator 2",
        price: "€10.00",
        tags: ["dlc"],
        soldCount: 0,
        available: "Yes",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202507/3015/979c621ba246797ecb02ac1143b290d080c5ae9b57d9b3b3.jpg",
        description: "Instantly unlocks all extra DLC content and map expansions for your base game.",
        features: ["Instant DLC Unlock", "Works with latest patches", "24/7 Discord Support"]
    },
    {
        id: 6,
        title: "VIP Lifetime Access",
        price: "€20.00",
        tags: ["special"],
        soldCount: 1,
        available: "Yes",
        image: "https://placehold.co/300x400/090a0c/e0a3b2?text=VIP+Lifetime",
        description: "Grants permanent access to every game added to our shop's library. <strong>Note:</strong> Games with Denuvo protection are not included in this package.",
        features: ["Instant Library Access", "Free Future Updates", "Priority VIP Support Role"]
    },
    {
        id: 7,
        title: "Subnautica 2",
        price: "€3.50",
        tags: [],
        soldCount: 2,
        available: "Yes",
        image: "https://static0.xdaimages.com/wordpress/wp-content/uploads/2025/04/subnautica-2-06-1.png",
        description: "Subnautica 2 is an underwater survival adventure game set on an all-new alien world. It is the next chapter in the Subnautica universe, developed by Unknown Worlds.",
        features: ["Safe & Instant Delivery", "1-Click Easy Installer", "24/7 Discord Support"]
    },
    {
        id: 8,
        title: "Slay the Spire 2",
        price: "€3.00",
        tags: [],
        soldCount: 1,
        available: "Yes",
        image: "https://images.g2a.com/323x433/1x1x1/slay-the-spire-2-p10000510470/68691954e7d849989d561796",
        description: "The iconic roguelike deckbuilder returns. Craft a unique deck, encounter bizarre creatures, and discover relics of immense power in Slay the Spire 2!",
        features: ["Safe & Instant Delivery", "1-Click Easy Installer", "24/7 Discord Support"]
    },
    {
        id: 9,
        title: "Raft",
        price: "€3.00",
        tags: ["requested"],
        soldCount: 1,
        available: "Yes",
        requestedBy: "Vaelicide",
        image: "https://store-images.s-microsoft.com/image/apps.32463.14102062639781722.573266e7-686b-44fb-9e48-a2585bc2170f.5424f649-5154-402f-88e5-905dae685f22",
        description: "Raft™ throws you and your friends into an epic oceanic adventure! Alone or together, players battle to survive a perilous voyage across a vast sea!",
        features: ["Safe & Instant Delivery", "1-Click Easy Installer", "24/7 Discord Support"]
    },
    {
        id: 10,
        title: "Teardown",
        price: "€3.50",
        tags: ["requested"],
        soldCount: 2,
        available: "Yes",
        requestedBy: "Aappanada",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202308/1509/f36a5012241a1abe419a16de0470a566ebe20ff6ac124704.png",
        description: "Prepare the perfect heist in a fully destructible, simulated voxel world. Tear down walls with vehicles or use explosives to create your own shortcuts.",
        features: ["Safe & Instant Delivery", "1-Click Easy Installer", "24/7 Discord Support"]
    },
    {
        id: 11,
        title: "Car Dealer Simulator",
        price: "€2.00",
        tags: ["requested"],
        soldCount: 0,
        available: "Yes",
        requestedBy: "Aappanada",
        image: "https://store-images.s-microsoft.com/image/apps.9832.13800000154456066.ce46f5af-b560-4bfb-bb18-f2baa791e9b2.a413078f-ec55-483f-b57c-130a395597f5",
        description: "Turn your dreams of selling used cars into reality! In Car Dealer Simulator, you'll learn how to run a business from its owner, Little Sam. He's a strange guy who doesn't keep track of his business.",
        features: ["Safe & Instant Delivery", "1-Click Easy Installer", "24/7 Discord Support"]
    },
    {
        id: 12,
        title: "Popular Games Pack",
        price: "€11.50",
        tags: ["special"],
        soldCount: 0,
        available: "Yes",
        image: "https://placehold.co/300x400/090a0c/e0a3b2?text=Popular+Games+Pack",
        description: "Grants access to LEGO® Batman™: Legacy of the Dark Knight and Forza Horizon 6.",
        features: ["Safe & Instant Delivery", "1-Click Easy Installer", "24/7 Discord Support"]
    },
    {
        id: 13,
        title: "The Binding of Isaac: Rebirth",
        price: "€5.00",
        tags: ["dlc"],
        soldCount: 0,
        available: "Yes",
        image: "https://m.media-amazon.com/images/M/MV5BOWY5M2EyYTgtZGE3MC00ZjgyLTk3NWEtMGRiNTAwYmRkMWRlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        description: "Instantly unlocks all extra DLC content for your base game.",
        features: ["Instant DLC Unlock", "Works with latest patches", "24/7 Discord Support"]
    },
    {
        id: 14,
        title: "Denuvo Bypass Source",
        price: "€50.00",
        tags: ["special", "denuvo"],
        soldCount: 0,
        available: "Yes",
        image: "https://placehold.co/300x400/090a0c/3b82f6?text=Denuvo+Bypass+Source",
        description: "Exclusive access to our private source for Denuvo-protected games. Unlock the secret to obtaining over 75+ premium Denuvo bypassed titles directly.",
        features: ["Access to 75+ Denuvo Games", "Direct Source Link", "Verified & Safe Provider"]
    },
    {
        id: 15,
        title: "Ultimate Games Source",
        price: "€100.00",
        tags: ["special"],
        soldCount: 0,
        available: "Yes",
        image: "https://placehold.co/300x400/090a0c/e0a3b2?text=Ultimate+Games+Source",
        description: "The ultimate library secret. Get the exact source we use to supply over 100,000+ games. Perfect for building your own massive collection or starting your own shop.",
        features: ["Access to 100,000+ Games", "Direct Source Link", "All Genres & Platforms"]
    },
    {
        id: 16,
        title: "Gothic Remake",
        price: "€5.00",
        tags: [],
        soldCount: 0,
        available: "Yes",
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202408/2610/16aadf49a4274d8dfb12049e6478e587ced71ccbc10ae96a.png",
        description: "Return to the Valley of Mines in a faithful remake of the legendary classic that shaped the RPG genre. Explore a handcrafted, organic open world that dynamically responds to your actions, guaranteeing a raw, unconstrained experience.",
        features: ["Safe & Instant Delivery", "1-Click Easy Installer", "24/7 Discord Support"]
    },
    {
        id: 17,
        title: "Stardew Valley",
        price: "€2.50",
        tags: [],
        soldCount: 0,
        available: "Yes",
        image: "https://image.api.playstation.com/cdn/UP2456/CUSA06840_00/0WuZecPtRr7aEsQPv2nJqiPa2ZvDOpYm.png",
        description: "You've inherited your grandfather's old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home?",
        features: ["Safe & Instant Delivery", "1-Click Easy Installer", "24/7 Discord Support"]
    },
    {
        id: 18,
        title: "Sons of The Forest",
        price: "€3.50",
        tags: [],
        soldCount: 0,
        available: "Yes",
        image: "https://www.tiriniti.com/wp-content/uploads/2023/02/sonsoftheforest-1652806471329.jpg",
        description: "Sent to find a missing billionaire on a remote island, you find yourself in a cannibal-infested hellscape. Craft, build, and struggle to survive, alone or with friends, in this terrifying new open-world survival horror simulator.",
        features: ["Safe & Instant Delivery", "1-Click Easy Installer", "24/7 Discord Support"]
    }
];

const konfiguracjaTagow = {
    "popular": { klasa: "badge-popular", tekst: "⭐ Popular" },
    "requested": { klasa: "badge-requested", tekst: "❤️ Requested" },
    "denuvo": { klasa: "badge-denuvo", tekst: "🛡️ Denuvo" },
    "dlc": { klasa: "badge-dlc", tekst: "🧩 DLC's" },
    "special": { klasa: "badge-special", tekst: "💎 Special" }
};

