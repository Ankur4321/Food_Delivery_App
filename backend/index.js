const express = require('express');
const app = express();
const port = 5000;
const YourModel = require("./models"); // Replace 'YourModel' with the actual name of your model
const YourModel1 = require("./model1");

require("./db");

app.use(express.json());

app.get('/', async (req, res) => {
  try {
    const data = await YourModel.find({});
    console.log(data);
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post("/", async (req, res) => {
  try {
    // Assuming the request body contains the data to be added
    const newData = req.body;

    // Create a new instance of your Mongoose model
    const newItem = new YourModel(newData);

    // Save the new item to the database
    await newItem.save();

    res.status(201).json({ message: 'Data added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



//FOR FOOD CATEGORY
app.get('/', async (req, res) => {
  try {
    const data1 = await YourModel1.find();
    res.json(data1);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post("/foodcateg", async (req, res) => {
  try {
    // Assuming the request body contains the data to be added
    const newData1 = req.body;

    // Create a new instance of your Mongoose model
    const newItem1 = new YourModel1(newData1);

    // Save the new item to the database
    await newItem1.save();

    res.status(201).json({ message: 'Data added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.use(express.json())
// may be wrong
app.use('/api',require("./Routes/CreatUser"))



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

