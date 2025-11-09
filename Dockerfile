# Node.js 기반 이미지 사용
FROM node:18

# ffmpeg 설치
RUN apt-get update && apt-get install -y ffmpeg

# 작업 디렉토리 설정
WORKDIR /workspace

# package.json 복사 후 종속성 설치
COPY package*.json ./
RUN npm install

# 앱 코드 복사
COPY . .

# 서버 포트
EXPOSE 3000

# 실행 명령
CMD ["node", "server.js"]
