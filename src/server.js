require('dotenv').config();
const app = require('./app');
const connectDB = require('./config/db');

// 连接数据库并启动服务器
connectDB();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
