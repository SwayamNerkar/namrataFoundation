const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;
const DB_PATH = path.join(__dirname, 'database.json');

// Middlewares
app.use(cors());
app.use(express.json());

// Initialize Local JSON Database
const initializeDB = () => {
    if (!fs.existsSync(DB_PATH)) {
        const initialData = {
            volunteers: [
                {
                    name: 'Anjali Sharma',
                    email: 'anjali.sharma@gmail.com',
                    skills: 'Child Welfare & Teaching',
                    availability: 'weekends',
                    message: 'I would love to volunteer in teaching children and assisting the education camps in Nagpur rural areas.',
                    date: new Date(Date.now() - 36 * 3600 * 1000).toISOString() // 36 hours ago
                },
                {
                    name: 'Vikram Singh Patil',
                    email: 'vikram.patil@agrioutlook.com',
                    skills: 'Agriculture Development',
                    availability: 'flexible',
                    message: 'Active agronomist. Happy to guide local farmers in rainwater harvesting setup and soil testing routines.',
                    date: new Date(Date.now() - 12 * 3600 * 1000).toISOString() // 12 hours ago
                }
            ],
            donations: [
                { amount: 500, method: 'upi', date: new Date(Date.now() - 48 * 3600 * 1000).toISOString() },
                { amount: 1000, method: 'card', date: new Date(Date.now() - 24 * 3600 * 1000).toISOString() },
                { amount: 5000, method: 'upi', date: new Date(Date.now() - 4 * 3600 * 1000).toISOString() }
            ],
            contacts: []
        };
        fs.writeFileSync(DB_PATH, JSON.stringify(initialData, null, 2));
    }
};
initializeDB();

// Helper to read DB
const readDB = () => {
    try {
        const data = fs.readFileSync(DB_PATH, 'utf8');
        return JSON.parse(data);
    } catch (err) {
        console.error("Error reading db:", err);
        return { volunteers: [], donations: [], contacts: [] };
    }
};

// Helper to write DB
const writeDB = (data) => {
    try {
        fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
    } catch (err) {
        console.error("Error writing db:", err);
    }
};

// --- API ENDPOINTS ---

// Log Volunteer Application
app.post('/api/volunteers', (e, res) => {
    const { name, email, skills, availability, message } = e.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and Email are required fields.' });
    }

    const db = readDB();
    const newVolunteer = {
        name,
        email,
        skills: skills || 'General Assistance',
        availability: availability || 'Flexible',
        message: message || 'N/A',
        date: new Date().toISOString()
    };

    db.volunteers.unshift(newVolunteer); // Add to beginning of array
    writeDB(db);
    res.status(201).json({ success: true, data: newVolunteer });
});

// Log Donation Transaction
app.post('/api/donations', (e, res) => {
    const { amount, method } = e.body;
    if (!amount || amount < 100) {
        return res.status(400).json({ error: 'Minimum donation is ₹100' });
    }

    const db = readDB();
    const newDonation = {
        amount: parseInt(amount, 10),
        method: method || 'upi',
        date: new Date().toISOString()
    };

    db.donations.unshift(newDonation);
    writeDB(db);
    res.status(201).json({ success: true, data: newDonation });
});

// Log Contact Inquiries
app.post('/api/contact', (e, res) => {
    const { name, email, message } = e.body;
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    const db = readDB();
    const newContact = {
        name,
        email,
        message,
        date: new Date().toISOString()
    };

    db.contacts.unshift(newContact);
    writeDB(db);
    res.status(201).json({ success: true, data: newContact });
});

// Retrieve Admin dashboard metrics
app.get('/api/admin/data', (e, res) => {
    const db = readDB();
    res.json(db);
});

// Start Express Server
app.listen(PORT, () => {
    console.log(`Namrata Foundation API Server active on: http://localhost:${PORT}`);
});
