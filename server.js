var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
 articleOne: {
    title: 'Ananthan Unni A-Article One',
    heading : 'Article One',
    date: 'Sep 6, 2016',
    content: `
     <p>
            The Article One is about IMAD console for developing a web-app using HTML and JavaScript.
        </p>
         <p>
            The Article One is about IMAD console for developing a web-app using HTML and JavaScript.
        </p>
         <p>
            The Article One is about IMAD console for developing a web-app using HTML and JavaScript.
        </p>`
    
},
articleTwo: {
    title: 'Ananthan Unni A-Article Two',
    heading : 'Article Two',
    date: 'Sep 6, 2016',
    content: `
     <p>
            The Article One is about IMAD console for developing a web-app using HTML and JavaScript.
        </p>
         <p>
            The Article One is about IMAD console for developing a web-app using HTML and JavaScript.
        </p>
         <p>
            The Article One is about IMAD console for developing a web-app using HTML and JavaScript.
        </p>`
},
articleThree: {
    title: 'Ananthan Unni A-Article One',
    heading : 'Article One',
    date: 'Sep 6, 2016',
    content: `
     <p>
            The Article One is about IMAD console for developing a web-app using HTML and JavaScript.
        </p>
         <p>
            The Article One is about IMAD console for developing a web-app using HTML and JavaScript.
        </p>
         <p>
            The Article One is about IMAD console for developing a web-app using HTML and JavaScript.
        </p>`
}

};

function createTemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var content = data.content;
    var date = data.date;
    
    

var htmlTemplate = `
    <html>
    <head>
        <title>${title}</title>
        <meta name="viewpoint" content="width=device-width initial-scale=1" />
                <link href="/ui/style.css" rel="stylesheet" />

    </head>
    <body>
        <div class="container">
        <a href ="/">Home</a>
        <hr/>
        <h3>${heading}</h3>
        <div>
            ${date}
        </div>
      
        <div>
        ${content}
        </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    var articleName = req.params.aticleName;
    res.send(createTemplate(articles[articleName]));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});




var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
