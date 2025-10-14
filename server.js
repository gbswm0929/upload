const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// 업로드 폴더 설정
const uploadFolder = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadFolder)) fs.mkdirSync(uploadFolder);

// Multer 설정
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadFolder),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// 정적 파일 (index.html)
app.use(express.static(path.join(__dirname, "public")));

// 업로드된 동영상 정적 제공
app.use("/videos", express.static(uploadFolder));

// 루트 페이지
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 동영상 업로드
app.post("/upload", upload.single("video"), (req, res) => {
  if (!req.file) return res.status(400).send("파일이 업로드되지 않았습니다.");
  res.redirect("/");
});

// 업로드된 동영상 목록 반환
app.get("/list", (req, res) => {
  fs.readdir(uploadFolder, (err, files) => {
    if (err) return res.status(500).json({ error: "파일 목록 불러오기 실패" });
    const videos = files.map((file) => ({
      name: file,
      url: `/watch/${encodeURIComponent(file)}`, // Gyazo 스타일 경로
    }));
    res.json(videos);
  });
});

// ✅ Gyazo 스타일 영상 재생 페이지
app.get("/watch/:filename", (req, res) => {
  const filename = req.params.filename;
  const filepath = path.join(uploadFolder, filename);

  if (!fs.existsSync(filepath)) {
    return res.status(404).send("파일을 찾을 수 없습니다.");
  }

  // 간단한 재생용 HTML 반환
  res.send(`
    <!DOCTYPE html>
    <html lang="ko">
    <head>
      <meta charset="UTF-8" />
      <title>${filename}</title>
      <style>
        body {
          margin: 0;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
        }
        video {
          max-width: 100%;
          max-height: 100%;
        }
      </style>
    </head>
    <body>
      <video src="/videos/${encodeURIComponent(filename)}" controls autoplay></video>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`✅ 서버 실행 중: http://localhost:${PORT}`);
});
