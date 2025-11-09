# 1. Node.js 18 기반 이미지
FROM node:18

# 2. ffmpeg 설치
RUN apt-get update && apt-get install -y ffmpeg

# 3. 앱 디렉토리 설정
WORKDIR /app

# 4. 의존성 설치
COPY package*.json ./
RUN npm install

# 5. 앱 코드 복사
COPY . .

# 6. 포트 지정
EXPOSE 3000

# 7. 실행 명령
CMD ["node", "server.js"]
