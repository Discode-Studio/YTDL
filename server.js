const express = require('express');
const ytdl = require('ytdl-core');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/download', async (req, res) => {
    const url = req.body.url;
    if (!ytdl.validateURL(url)) {
        return res.status(400).send('Invalid URL');
    }

    res.header('Content-Disposition', 'attachment; filename="video.mp4"');
    ytdl(url, { format: 'mp4' }).pipe(res);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
