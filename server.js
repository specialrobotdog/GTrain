const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;

const MTA_API_KEY = 'YOUR_MTA_API_KEY';
const MTA_STATUS_URL = 'https://api-endpoint.mta.info/Dataservice/mtagtfsfeeds/nyct%2Fgtfs';

async function getGTrainStatus() {
    try {
        const response = await fetch(MTA_STATUS_URL, { headers: { 'x-api-key': MTA_API_KEY } });
        const data = await response.text(); // The API returns GTFS data, needs parsing
        
        // You need to parse GTFS data for real implementation
        return { running: true }; // Placeholder until GTFS parsing is added
    } catch (error) {
        return { running: false };
    }
}

app.get('/status', async (req, res) => {
    const status = await getGTrainStatus();
    res.json(status);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
