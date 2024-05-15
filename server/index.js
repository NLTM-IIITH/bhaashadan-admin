const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');
const port = 3525;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const languages = [ "all", "assamese", "bangla", "english", "gujarati", "hindi", "kannada", "malayalam", "manipuri", "marathi", "oriya", "punjabi", "tamil", "telugu", ];

const years = [2021, 2022, 2023, 2024];

const monthlySubmissionCounts = {};

languages.forEach(language => {
    monthlySubmissionCounts[language] = {};
    years.forEach(year => {
      monthlySubmissionCounts[language][year] = new Array(12).fill(0);
    });
});

const fetchSubmissions = async () => {
    try {
      const response = await axios.get('http://bhasha.iiit.ac.in/crowd/api/submissions/');
      const submissions = response.data;
  
      submissions.forEach(submission => {
        const date = new Date(submission.upload_date);
        const year = date.getFullYear();
        const month = date.getMonth();
        const language = submission.language;
  
        monthlySubmissionCounts[language][year][month]++;
        monthlySubmissionCounts['all'][year][month]++;
      });
      return monthlySubmissionCounts;
    } catch (error) {
      console.error(error);
    }
};


app.get('/submissions', async (req, res) => {
  const data = await fetchSubmissions();
  res.json(data);
});

fetchSubmissions();

app.get('/submissions/:language/:year', async (req, res) => {
    const language = req.params.language.toLowerCase();
    const year = parseInt(req.params.year);

    if (!languages.includes(language) || !years.includes(year)) {
        return res.status(400).json({ message: 'Invalid language or year' });
    }
    
    if (!monthlySubmissionCounts[language][year]) {
      await fetchSubmissions();
    }

    res.json(monthlySubmissionCounts[language][year]);
});

const fetchUsers = async() => {
  try {
    const response = await axios.get('http://bhasha.iiit.ac.in/crowd/api/users/');
    const users = response.data;
    return users;
  } catch (error) {
    console.log(error);
  }
};

const fetchSubmissionsx = async () => {
  try {
    const response = await axios.get('http://bhasha.iiit.ac.in/crowd/api/submissions/');
    const submissions = response.data;
    return submissions;
  } catch (error) {
    console.log(error);
  }
};

app.get('/users', async (req, res) => {
  const users = await fetchUsers();
  const submissions = await fetchSubmissionsx();

  const userLanguages = {};

  submissions.forEach((submission) => {
    const { user_id, language } = submission;

    // If the user ID doesn't exist in the userLanguages object, initialize it with an empty array
    if (!userLanguages[user_id]) {
      userLanguages[user_id] = [];
    }

    // Add the language to the user's array if it doesn't exist
    if (!userLanguages[user_id].includes(language)) {
      userLanguages[user_id].push(language);
    }
  });

  const usersWithLanguages = users.map((user) => {
    const { id, username, email, submission_count } = user;
    const languages = userLanguages[id] || []; // Use an empty array if the user doesn't have any contributed languages

    return {
      id,
      username,
      email,
      submission_count,
      languages,
    };
  });

  res.json(usersWithLanguages);
});

app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
});