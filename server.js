// const express = require("express");
// const multer = require("multer");
// const fs = require("fs");
// const path = require("path");

// const app = express();
// const PORT = 3000;

// // 업로드 폴더 설정
// const uploadFolder = path.join(__dirname, "uploads");
// if (!fs.existsSync(uploadFolder)) fs.mkdirSync(uploadFolder);

// // Multer 설정
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, uploadFolder),
//   filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
// });
// const upload = multer({ storage });

// // 정적 파일 (index.html)
// app.use(express.static(path.join(__dirname, "public")));

// // 업로드된 동영상 정적 제공
// app.use("/videos", express.static(uploadFolder));

// // 루트 페이지
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// // 동영상 업로드
// app.post("/upload", upload.single("video"), (req, res) => {
//   if (!req.file) return res.status(400).send("파일이 업로드되지 않았습니다.");
//   res.redirect("/");
// });

// // 업로드된 동영상 목록 반환
// app.get("/list", (req, res) => {
//   fs.readdir(uploadFolder, (err, files) => {
//     if (err) return res.status(500).json({ error: "파일 목록 불러오기 실패" });
//     const videos = files.map((file) => ({
//       name: file,
//       url: `/watch/${encodeURIComponent(file)}`, // Gyazo 스타일 경로
//     }));
//     res.json(videos);
//   });
// });


// app.get("/watch/:filename", (req, res) => {
//   const filename = req.params.filename;
//   const filepath = path.join(uploadFolder, filename);

//   if (!fs.existsSync(filepath)) {
//     return res.status(404).send("파일을 찾을 수 없습니다.");
//   }

//   // 서버 주소 — 실제로는 배포 시 본인 서버 주소로 교체
//   const baseUrl = `http://localhost:${PORT}`;

//   res.send(`
//     <!DOCTYPE html>
//     <html lang="ko">
//     <head>
//       <meta charset="UTF-8" />
//       <meta property="og:title" content="${filename}" />
//       <meta property="og:type" content="video.other" />
//       <meta property="og:video" content="${baseUrl}/videos/${encodeURIComponent(filename)}" />
//       <meta property="og:video:type" content="video/mp4" />
//       <meta property="og:video:width" content="640" />
//       <meta property="og:video:height" content="360" />
//       <meta property="og:image" content="${baseUrl}/thumbnail.jpg" />
//       <meta property="og:description" content="업로드된 영상 미리보기" />
//       <meta name="twitter:card" content="player" />
//       <meta name="twitter:player" content="${baseUrl}/videos/${encodeURIComponent(filename)}" />
//       <meta name="twitter:player:width" content="640" />
//       <meta name="twitter:player:height" content="360" />
//       <title>${filename}</title>
//       <style>
//         body {
//           margin: 0;
//           background: #000;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           height: 100vh;
//         }
//         video {
//           max-width: 100%;
//           max-height: 100%;
//         }
//       </style>
//     </head>
//     <body>
//       <video src="/videos/${encodeURIComponent(filename)}" controls autoplay></video>
//     </body>
//     </html>
//   `);
// });


// app.listen(PORT, () => {
//   console.log(`✅ 서버 실행 중: http://localhost:${PORT}`);
// });





// const express = require("express");
// const multer = require("multer");
// const fs = require("fs");
// const path = require("path");

// const app = express();
// const PORT = 3000;

// // 업로드 폴더
// const uploadFolder = path.join(__dirname, "uploads");
// if (!fs.existsSync(uploadFolder)) fs.mkdirSync(uploadFolder);

// // Multer 설정
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, uploadFolder),
//   filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
// });
// const upload = multer({ storage });

// // 정적 파일 제공
// app.use(express.static(path.join(__dirname, "public")));

// // 업로드된 동영상 정적 제공
// app.use("/videos", express.static(uploadFolder));

// // 루트 페이지
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// // 동영상 업로드 처리
// app.post("/upload", upload.single("video"), (req, res) => {
//   if (!req.file) return res.status(400).send("파일이 업로드되지 않았습니다.");
//   res.status(200).send("ok");
// });

// // 업로드된 동영상 목록
// app.get("/list", (req, res) => {
//   fs.readdir(uploadFolder, (err, files) => {
//     if (err) return res.status(500).json({ error: "파일 목록 불러오기 실패" });
//     const videos = files.map((file) => ({
//       name: file,
//       url: `/videos/${encodeURIComponent(file)}`, // 직접 접근 가능한 URL
//     }));
//     res.json(videos);
//   });
// });

// app.listen(PORT, () => console.log(`✅ 서버 실행 중: http://localhost:${PORT}`));





// const express = require("express");
// const multer = require("multer");
// const fs = require("fs");
// const path = require("path");

// const app = express();
// const PORT = 3000;

// // 🔒 비밀 코드 설정
// const SECRET_CODE = "1234"; // 여기에 원하는 비밀번호 입력

// // 업로드 폴더
// const uploadFolder = path.join(__dirname, "uploads");
// if (!fs.existsSync(uploadFolder)) fs.mkdirSync(uploadFolder);

// // Multer 설정
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, uploadFolder),
//   filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
// });
// const upload = multer({ storage });

// // 미들웨어
// app.use(express.static(path.join(__dirname, "public")));
// app.use("/videos", express.static(uploadFolder));
// app.use(express.json());

// // 루트 페이지
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// // 업로드 처리
// app.post("/upload", upload.single("video"), (req, res) => {
//   if (!req.file) return res.status(400).send("파일이 업로드되지 않았습니다.");
//   res.status(200).send("ok");
// });

// // 업로드된 파일 목록
// app.get("/list", (req, res) => {
//   fs.readdir(uploadFolder, (err, files) => {
//     if (err) return res.status(500).json({ error: "파일 목록 불러오기 실패" });
//     const videos = files.map((file) => ({
//       name: file,
//       url: `/videos/${encodeURIComponent(file)}`,
//     }));
//     res.json(videos);
//   });
// });

// // 🔥 삭제 요청 처리
// app.post("/delete", (req, res) => {
//   const { filename, code } = req.body;
//   if (!filename || !code) return res.status(400).json({ error: "요청이 잘못되었습니다." });

//   // 비밀번호 확인
//   if (code !== SECRET_CODE) return res.status(403).json({ error: "비밀 코드가 틀렸습니다." });

//   const filePath = path.join(uploadFolder, filename);

//   if (!fs.existsSync(filePath)) return res.status(404).json({ error: "파일이 존재하지 않습니다." });

//   try {
//     fs.unlinkSync(filePath);
//     return res.json({ message: "삭제 완료" });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ error: "삭제 중 오류 발생" });
//   }
// });

// app.listen(PORT, () => console.log(`✅ 서버 실행 중: http://localhost:${PORT}`));





const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// 🔒 비밀 코드 설정
const SECRET_CODE = process.env.code; // 원하는 코드로 변경 가능

// 업로드 폴더 설정
const uploadFolder = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadFolder)) fs.mkdirSync(uploadFolder);

// Multer 설정
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadFolder),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// 미들웨어
app.use(express.static(path.join(__dirname, "public")));
app.use("/videos", express.static(uploadFolder));
app.use(express.json());

// 루트 페이지
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 업로드
app.post("/upload", upload.single("video"), (req, res) => {
  if (!req.file) return res.status(400).send("파일이 업로드되지 않았습니다.");
  res.status(200).send("ok");
});

// 목록
app.get("/list", (req, res) => {
  fs.readdir(uploadFolder, (err, files) => {
    if (err) return res.status(500).json({ error: "파일 목록 불러오기 실패" });
    const videos = files.map((file) => ({
      name: file,
      url: `/videos/${encodeURIComponent(file)}`,
    }));
    res.json(videos);
  });
});

// 🔥 삭제 처리
app.post("/delete", (req, res) => {
  const { filename, code } = req.body;

  if (!filename || !code)
    return res.status(400).json({ error: "요청이 잘못되었습니다." });

  if (code !== SECRET_CODE)
    return res.status(403).json({ error: "비밀 코드가 틀렸습니다." });

  const filePath = path.join(uploadFolder, filename);
  if (!fs.existsSync(filePath))
    return res.status(404).json({ error: "파일이 존재하지 않습니다." });

  try {
    fs.unlinkSync(filePath);
    return res.json({ message: "삭제 완료" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "삭제 중 오류 발생" });
  }
});

app.listen(PORT, () => console.log(`✅ 서버 실행 중: http://localhost:${PORT}`));
