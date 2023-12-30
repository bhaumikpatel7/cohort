// creating http server

// const express = require("express")

// const app = express();

// function sum(n){
//     let ans = 0;
//     for (let i = 0; i < n; i++) {
//         ans = ans + i;
//     } return ans;
// }

// app.get('/',(req,res) => {
//     const n = req.query.n;
//     const ans = sum(n);
//     res.send("hi your ans is "+ ans);
// })

// app.listen(3000);

//----------------------------------------------------------------------------------------------------------------------------------

const express = require("express");
const app = express();

var users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];
app.use(express.json());
app.get("/", (req, res) => {
  const johnKidneys = users[0].kidneys;
  const numberOfKineys = johnKidneys.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < johnKidneys.length; i++) {
    if (johnKidneys[i].healthy) {
      numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
    }
  }

  const numberOfUnhealthyKidneys = numberOfKineys - numberOfHealthyKidneys;
  res.json({
    numberOfKineys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Done",
  });
});

app.put("/", (req, res) => {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
});

app.delete("/", (req, res) => {
  // only if only 1 bad healthy kidney is there to do ihis
  if (isThereAtleastOneUnhealthyKidney()) {
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++) {
      if (users[0].kidneys[i].healthy)
        newKidneys.push({
          healthy: true,
        });
    }
    users[0].kidneys = newKidneys;
    res.json({ msg: "done" });
  }
  else{
    res.status(411).json({
        msg:"you have no bad kidneys"
    })
  }
});

function isThereAtleastOneUnhealthyKidney() {
  let alteastOneUnhealthyKidney = false;
  for (let i = 0; i < users[0].kidneys.length; i++) {
    if (!users[0].kidneys[i].healthy) {
      alteastOneUnhealthyKidney = true;
    }
  }
  return alteastOneUnhealthyKidney;
}

app.listen(3000);
