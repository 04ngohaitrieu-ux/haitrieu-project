const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
 
app.get('/', (req, res) => {
  // Trang chủ
  res.send('<h1>Full-Stack CI/CD Demo - Hello from Backend!</h1><p>Deployment successful via GitHub Actions.</p>');
});
 
app.get('/api/status', (req, res) => {
  // API Backend mẫu
  res.json({ 
    status: 'OK', 
    deployment_time: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});
 
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});