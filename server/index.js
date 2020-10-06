const express = require('express');
const path = require('path');

const app = express();
const PORT = 3040;

app.use(express.static(path.join(__dirname, "../public")));
// app.get('/', (req, res) => {
//   res.send('index');
// });

app.listen(PORT, () => {
  console.log(`Server running and listening on port: ${PORT}`);
});
