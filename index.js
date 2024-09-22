const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

app.use(cors());

function getFileSizeFromBase64(base64String) {
  const base64Str = base64String.split(',').pop();

  let padding = 0;
  if (base64Str.endsWith('==')) padding = 2;
  else if (base64Str.endsWith('=')) padding = 1;

  const fileSizeBytes = (base64Str.length * 3) / 4 - padding;

  const fileSizeKB = fileSizeBytes / 1024;

  return fileSizeKB.toFixed(2); 
}

function getMimeTypeFromBase64(base64String) {
  const mimeTypeMatch = base64String.match(/^data:(.*?);base64,/);
  return mimeTypeMatch ? mimeTypeMatch[1] : 'application/octet-stream';
}

app.post('/bfhl', (req, res) => {
  const { data, file_b64 } = req.body;

  const userId = 'koushik_chetlur_rajesh_11032004'; 
  const email = 'kr7972@srmist.edu.in'; 
  const rollNumber = 'RA2111003010087'; 

  const numbers = [];
  const alphabets = [];
  let highestLowercase = '';

  data.forEach(item => {
    if (!isNaN(item)) {
      numbers.push(item);
    } else if (/^[a-zA-Z]$/.test(item)) {
      alphabets.push(item);
      if (item === item.toLowerCase() && item > highestLowercase) {
        highestLowercase = item;
      }
    }
  });

  let fileValid = false;
  let fileMimeType = '';
  let fileSizeKb = 0;

  if (file_b64) {
    fileValid = true; 
    fileMimeType = getMimeTypeFromBase64(file_b64); 
    fileSizeKb = getFileSizeFromBase64(file_b64); 
  }

  const response = {
    is_success: true,
    user_id: userId,
    email: email,
    roll_number: rollNumber,
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : [],
    file_valid: fileValid,
    file_mime_type: fileMimeType,
    file_size_kb: fileSizeKb,
  };

  res.json(response);
});

app.get('/bfhl', (req, res) => {
  res.json({
    operation_code: 1,
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
