# Используйте официальный образ Node.js в качестве базового образа
FROM node:16.14.2

# Установка и перемещение в рабочую директорию приложения
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --production
COPY . .

# Сборка приложения
RUN npm run build

# Установка serve для раздачи статических файлов
RUN npm install -g serve

# Открытие порта 80 для внешнего доступа
EXPOSE 3000

# Запуск встроенного веб-сервера
CMD ["serve", "-s", "build", "-l", "3000"]
