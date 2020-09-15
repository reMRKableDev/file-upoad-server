const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb://mrk:remrkable93@lon5-c14-0.mongo.objectrocket.com:43658,lon5-c14-2.mongo.objectrocket.com:43658,lon5-c14-1.mongo.objectrocket.com:43658/FILE-UPLOADER DATABASE?replicaSet=4d098817c9414f909beb74dd4e8a264a",
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((x) =>
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  )
  .catch((err) => console.error("Error connecting to mongo", err));
