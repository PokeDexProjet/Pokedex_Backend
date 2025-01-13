# 使用 Node.js 作为基础镜像
FROM node:14

# 设置工作目录
WORKDIR /app

# 复制后端代码到工作目录
COPY . .

# 安装依赖
RUN npm install

# 暴露端口（例如：3000）
EXPOSE 3000

# 启动后端服务
CMD ["node", "server.js"]
