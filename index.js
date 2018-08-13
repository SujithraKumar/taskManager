var express = require("express");

var app = express();

app.use(express.static(__dirname + '/public'));

var lists = [
   {
    id: 1,
    listName: "Doing",
    cardTitles:[
     {"title" :"Tasks"},
    {"title" :"assignments"},
    {"title" :"Training"}
    ]
  },
 {
    id: 2,
    listName: "Done",
    cardTitles:[
    {"title" :"practice"},
    {"title" :"dancing"},
    {"title" :"purchasing"}
    ]
  },
 {
    id: 3,
    listName: "Hold",
    cardTitles:[
    {"title" :"parade"},
    {"title" :"gym"},
    {"title" :"swimming"}
    ]
  },
 {
    id: 4,
    listName: "Deleted",
    cardTitles:[
     {"title" :"Gardening"},
    {"title" :"golf"},
   ]
  }
];

app.get('/', function(req,res){
res.sendFile(__dirname + '/public/app/index.html');

});

app.get("/lists", function(req, res) {
  res.json(lists);
});


console.log("Server is starting at localhost:3000");
app.listen(process.env.PORT || 3000);
