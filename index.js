const express = require('express');
const app = express();

const db = {
    1001:{
        author: 'oakley',
        title: 'my food is not yours',
        year: 2005
    },
    1002: {
        author: 'steph',
        title: 'hello world',
        year: 2017
    }
}

app.get('/books/:bookId', (req, res) => {
    let bookId = req.params.bookId;
    let bookInfo = db[bookId];

    if (!bookInfo) {
        bookInfo = {
            author: '',
            year: '',
            title: `Book ID ${bookId} not found`
        };
    }

    let respText = `
    <h1>${bookInfo.title}</h1>
    <h2>${bookInfo.author}</h2>
    <h3>${bookInfo.year}</h3>
    `;

    res.end(respText);

});


app.get('/books/:bookId/:key', (req, res) => {
    let bookId = req.params.bookId;
    let bookInfo = db[bookId];
    let key = req.params.key;

    if (!bookInfo) {
        bookInfo = {
            author: errorMsg,
            year: errorMsg,
            title: errorMsg
        };
    }

    let respText = `
    <h1>${bookInfo[key]}</h1>
    `;
    res.end(respText);
});


app.listen(3456, () => {
    console.log('Web app is listening on port 3456...');
});