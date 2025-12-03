const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());

// Bo‘limlar va shifokorlar (kamida 15 ta)
const departments = {
    "Kattalar": {
        "Ayollar": ["Ginekolog", "Dermatolog", "Endokrinolog", "Reabilitolog"],
        "Erkaklar": ["Urolog", "Kardiolog", "Dermatolog", "Androlog"]
    },
    "Bolalar": {
        "Ayollar": ["Pediatr", "Dermatolog", "Nevrolog", "Oftalmolog"],
        "Erkaklar": ["Pediatr", "Nevrolog", "Oftalmolog", "Kardiolog"]
    }
};

// Har bir shifokor uchun navbat soni
let queueCounts = {};
for (const section in departments) {
    for (const gender in departments[section]) {
        departments[section][gender].forEach(doctor => {
            queueCounts[doctor] = 0;
        });
    }
}

// PostgreSQL ulanishi
const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',       // sizning username
    host: 'localhost',
    database: 'hospital_db',
    password: '1',
    port: 5432
});

// API: bo‘limlarni olish
app.get('/api/sections', (req, res) => res.json(Object.keys(departments)));

// API: genderlarni olish
app.get('/api/genders/:section', (req, res) => {
    const section = req.params.section;
    if (!departments[section]) return res.status(404).json({ error: "Bo‘lim topilmadi" });
    res.json(Object.keys(departments[section]));
});

// API: shifokorlarni olish
app.get('/api/doctors/:section/:gender', (req, res) => {
    const { section, gender } = req.params;
    if (!departments[section] || !departments[section][gender]) return res.status(404).json({ error: "Shifokor topilmadi" });
    res.json(departments[section][gender]);
});

// API: navbat olish
app.post('/api/queue', (req, res) => {
    const { doctor } = req.body;
    if (!doctor || !(doctor in queueCounts)) return res.status(400).json({ error: "Bunday shifokor mavjud emas" });

    queueCounts[doctor]++;
    res.json({ doctor, queueNumber: queueCounts[doctor] });
});

// API: barcha shifokorlar navbatlari
app.get('/api/queue', (req, res) => res.json(queueCounts));

app.listen(PORT, () => {
    console.log(`Server http://localhost:${PORT} da ishga tushdi`);
});
 