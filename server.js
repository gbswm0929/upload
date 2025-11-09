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





// const express = require("express");
// const multer = require("multer");
// const fs = require("fs");
// const path = require("path");

// const app = express();
// const PORT = 3000;

// // 🔒 비밀 코드 설정
// const SECRET_CODE = process.env.code; // 원하는 코드로 변경 가능

// // 업로드 폴더 설정
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

// // 업로드
// app.post("/upload", upload.single("video"), (req, res) => {
//   if (!req.file) return res.status(400).send("파일이 업로드되지 않았습니다.");
//   res.status(200).send("ok");
// });

// // 목록
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

// // 🔥 삭제 처리
// app.post("/delete", (req, res) => {
//   const { filename, code } = req.body;

//   if (!filename || !code)
//     return res.status(400).json({ error: "요청이 잘못되었습니다." });

//   if (code !== SECRET_CODE)
//     return res.status(403).json({ error: "비밀 코드가 틀렸습니다." });

//   const filePath = path.join(uploadFolder, filename);
//   if (!fs.existsSync(filePath))
//     return res.status(404).json({ error: "파일이 존재하지 않습니다." });

//   try {
//     fs.unlinkSync(filePath);
//     return res.json({ message: "삭제 완료" });
//   } catch (err) {
//     console.error(err);
//     return res.status(500).json({ error: "삭제 중 오류 발생" });
//   }
// });

// app.listen(PORT, () => console.log(`✅ 서버 실행 중: http://localhost:${PORT}`));





// // server.js (업데이트됨: 서버사이드 비디오 파일 검증 추가)
// const express = require("express");
// const multer = require("multer");
// const fs = require("fs");
// const path = require("path");

// const app = express();
// const PORT = 3000;

// // 🔒 비밀 코드 (삭제용) - 필요하면 변경
// const SECRET_CODE = process.env.code;

// // 업로드 폴더 준비
// const uploadFolder = path.join(__dirname, "uploads");
// if (!fs.existsSync(uploadFolder)) fs.mkdirSync(uploadFolder);

// // 허용 확장자 목록 (소문자)
// const ALLOWED_EXT = [".mp4", ".mov"]; //".mp4", ".mov", ".webm", ".mkv", ".avi", ".ogg", ".ogv", ".ts"

// // --------------------
// // Multer 설정 (파일명 안전화)
// // --------------------
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, uploadFolder),
//   filename: (req, file, cb) => {
//     // originalname에서 경로 요소 제거 (path traversal 방지)
//     const safeOrig = path.basename(file.originalname);
//     const name = Date.now() + "-" + safeOrig;
//     cb(null, name);
//   },
// });
// const upload = multer({ storage });

// // --------------------
// // 유틸: 파일이 비디오인지 검사 (매직바이트 + 확장자 + mimetype 체크 조합)
// // --------------------
// function startsWith(buf, pattern) {
//   if (buf.length < pattern.length) return false;
//   for (let i = 0; i < pattern.length; i++) if (buf[i] !== pattern[i]) return false;
//   return true;
// }

// function isVideoBySignature(buf) {
//   // buf는 파일 앞부분(예: 4KB)이어야 함
//   if (!buf || buf.length < 4) return false;

//   // MP4 / MOV : 바이트 4-7에 'ftyp' 존재 (일반적)
//   if (buf.length >= 12) {
//     if (buf.slice(4, 8).toString() === "ftyp") return true;
//   }

//   // WebM / Matroska: EBML header 0x1A45DFA3
//   if (startsWith(buf, Buffer.from([0x1A, 0x45, 0xDF, 0xA3]))) return true;

//   // AVI: 'RIFF' ... 'AVI ' (offset 0 and 8)
//   if (buf.slice(0,4).toString() === "RIFF" && buf.slice(8,12).toString() === "AVI ") return true;

//   // OGG: 'OggS'
//   if (buf.slice(0,4).toString() === "OggS") return true;

//   // MPEG PS/TS: MPEG Program Stream start code 0x000001BA (PS)
//   if (startsWith(buf, Buffer.from([0x00,0x00,0x01,0xBA]))) return true;

//   // MPEG-1/2 PS may also start with 0x000001B3 (sequence header) - treat as video container possible
//   if (startsWith(buf, Buffer.from([0x00,0x00,0x01,0xB3]))) return true;

//   // Fallback: check for ftyp brand 'mp41','mp42','isom','M4V ' etc at offset 4-8
//   if (buf.length >= 12) {
//     const brand = buf.slice(4, 8).toString();
//     if (["mp41","mp42","isom","M4V ","3gp4","qt  "].includes(brand)) return true;
//   }

//   return false;
// }

// // 읽을 바이트 크기 (앞부분 검사)
// const READ_BYTES = 4096;

// // --------------------
// // 미들웨어 / 정적 제공
// // --------------------
// app.use(express.static(path.join(__dirname, "public")));
// app.use("/videos", express.static(uploadFolder));
// app.use(express.json());

// // --------------------
// // 루트
// // --------------------
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// // --------------------
// // 업로드 엔드포인트
// // - 파일을 저장한 뒤, 서버에서 안전 검사 수행
// // - 검사 실패 시 파일 삭제하고 400 응답 반환
// // --------------------
// app.post("/upload", upload.single("video"), (req, res) => {
//   if (!req.file) return res.status(400).send("파일이 업로드되지 않았습니다.");

//   const savedPath = path.join(uploadFolder, req.file.filename);

//   try {
//     // 1) 확장자 검사 (기본 필터)
//     const ext = path.extname(req.file.originalname || "").toLowerCase();
//     if (!ALLOWED_EXT.includes(ext)) {
//       // 허용 확장자 외는 경고(단, 계속 검사하되 결과적으로 거부)
//       // 삭제 후 응답
//       fs.unlinkSync(savedPath);
//       return res.status(400).send("허용되지 않는 파일 확장자입니다.");
//     }

//     // 2) 앞부분 바이트를 읽어 시그니처 검사
//     const fd = fs.openSync(savedPath, "r");
//     const buffer = Buffer.alloc(READ_BYTES);
//     const bytesRead = fs.readSync(fd, buffer, 0, READ_BYTES, 0);
//     fs.closeSync(fd);
//     const head = buffer.slice(0, bytesRead);

//     if (!isVideoBySignature(head)) {
//       // 검사 실패: 파일 삭제
//       fs.unlinkSync(savedPath);
//       return res.status(400).send("업로드된 파일이 유효한 비디오 파일이 아닙니다.");
//     }

//     // 3) (선택) 클라이언트가 보낸 mimetype도 확인 — 참고용(조작 가능)
//     const clientType = req.file.mimetype || "";
//     if (!clientType.startsWith("video/")) {
//       // 경고 로그만 남기고 통과 (필요시 삭제하도록 조정 가능)
//       console.warn(`업로드된 파일의 클라이언트 Content-Type이 video/이 아님: ${clientType}`);
//       // (우리는 이미 매직바이트로 검증했으므로 통과)
//     }

//     // 성공
//     return res.status(200).send("ok");
//   } catch (err) {
//     console.error("업로드 검증 중 오류:", err);
//     // 에러 시 파일이 있으면 삭제 시도
//     try { if (fs.existsSync(savedPath)) fs.unlinkSync(savedPath); } catch(e){}
//     return res.status(500).send("서버 오류 발생");
//   }
// });

// // --------------------
// // 업로드된 파일 목록
// // --------------------
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

// // --------------------
// // 삭제 (기존 동작 유지)
// // --------------------
// app.post("/delete", (req, res) => {
//   const { filename, code } = req.body;
//   if (!filename || !code) return res.status(400).json({ error: "요청이 잘못되었습니다." });
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

// // --------------------
// app.listen(PORT, () => console.log(`✅ 서버 실행 중: http://localhost:${PORT}`));





// // server.js (ZIP 업로드 비밀번호 요구 포함)
// const express = require("express");
// const multer = require("multer");
// const fs = require("fs");
// const path = require("path");

// const app = express();
// const PORT = 3000;

// // 🔒 비밀 코드 (삭제용) - 필요하면 변경
// const SECRET_CODE = process.env.code;

// // 🔐 ZIP 업로드 허용 비밀번호 (변경하세요)
// const ZIP_SECRET = process.env.code;

// // 업로드 폴더 준비
// const uploadFolder = path.join(__dirname, "uploads");
// if (!fs.existsSync(uploadFolder)) fs.mkdirSync(uploadFolder);

// // 허용 확장자 목록 (소문자)
// const ALLOWED_EXT = [".mp4", ".mov", ".zip"];

// // --------------------
// // Multer 설정 (파일명 안전화)
// // --------------------
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, uploadFolder),
//   filename: (req, file, cb) => {
//     // originalname에서 경로 요소 제거 (path traversal 방지)
//     const safeOrig = path.basename(file.originalname);
//     const name = Date.now() + "-" + safeOrig;
//     cb(null, name);
//   },
// });
// const upload = multer({ storage });

// // --------------------
// // 유틸: 파일 시그니처 검사
// // --------------------
// function startsWith(buf, pattern) {
//   if (buf.length < pattern.length) return false;
//   for (let i = 0; i < pattern.length; i++) if (buf[i] !== pattern[i]) return false;
//   return true;
// }

// function isVideoBySignature(buf) {
//   if (!buf || buf.length < 4) return false;

//   // MP4 / MOV : 바이트 4-7에 'ftyp'
//   if (buf.length >= 12) {
//     if (buf.slice(4, 8).toString() === "ftyp") return true;
//   }

//   // WebM / Matroska: EBML header 0x1A45DFA3
//   if (startsWith(buf, Buffer.from([0x1A, 0x45, 0xDF, 0xA3]))) return true;

//   // AVI: 'RIFF' ... 'AVI '
//   if (buf.slice(0,4).toString() === "RIFF" && buf.slice(8,12).toString() === "AVI ") return true;

//   // OGG: 'OggS'
//   if (buf.slice(0,4).toString() === "OggS") return true;

//   // MPEG PS/TS
//   if (startsWith(buf, Buffer.from([0x00,0x00,0x01,0xBA]))) return true;
//   if (startsWith(buf, Buffer.from([0x00,0x00,0x01,0xB3]))) return true;

//   // ftyp brands fallback
//   if (buf.length >= 12) {
//     const brand = buf.slice(4,8).toString();
//     if (["mp41","mp42","isom","M4V ","3gp4","qt  "].includes(brand)) return true;
//   }

//   return false;
// }

// function isZipBySignature(buf) {
//   if (!buf || buf.length < 4) return false;
//   // ZIP local file header: PK\x03\x04 (50 4B 03 04)
//   if (startsWith(buf, Buffer.from([0x50,0x4B,0x03,0x04]))) return true;
//   // ZIP empty archive end: PK\x05\x06 (50 4B 05 06) or central directory PK\x01\x02
//   if (startsWith(buf, Buffer.from([0x50,0x4B,0x05,0x06]))) return true;
//   if (startsWith(buf, Buffer.from([0x50,0x4B,0x01,0x02]))) return true;
//   return false;
// }

// // 읽을 바이트 크기 (앞부분 검사)
// const READ_BYTES = 4096;

// // --------------------
// // 미들웨어 / 정적 제공
// // --------------------
// app.use(express.static(path.join(__dirname, "public")));
// app.use("/videos", express.static(uploadFolder));
// app.use(express.json());

// // --------------------
// // 루트
// // --------------------
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// // --------------------
// // 업로드 엔드포인트
// // - Multer가 파일을 저장한 뒤 서버쪽에서 검사 수행
// // - ZIP 파일이면 ZIP 비밀번호(요청 필드 zipPassword) 확인
// // --------------------
// app.post("/upload", upload.single("video"), (req, res) => {
//   if (!req.file) return res.status(400).send("파일이 업로드되지 않았습니다.");

//   const savedPath = path.join(uploadFolder, req.file.filename);
//   const originalExt = path.extname(req.file.originalname || "").toLowerCase();

//   try {
//     // 1) 확장자 검사
//     if (!ALLOWED_EXT.includes(originalExt)) {
//       fs.unlinkSync(savedPath);
//       return res.status(400).send("허용되지 않는 파일 확장자입니다.");
//     }

//     // 2) 앞부분 바이트를 읽어 시그니처 검사
//     const fd = fs.openSync(savedPath, "r");
//     const buffer = Buffer.alloc(READ_BYTES);
//     const bytesRead = fs.readSync(fd, buffer, 0, READ_BYTES, 0);
//     fs.closeSync(fd);
//     const head = buffer.slice(0, bytesRead);

//     // 3) 확장자에 따라 검사 분기
//     if (originalExt === ".zip") {
//       // 클라이언트에서 보낸 zip 비밀번호 확인
//       const providedZipPassword = (req.body.zipPassword || "").toString();

//       if (!providedZipPassword) {
//         fs.unlinkSync(savedPath);
//         return res.status(400).send("ZIP 파일 업로드 시 비밀번호가 필요합니다.");
//       }
//       if (providedZipPassword !== ZIP_SECRET) {
//         fs.unlinkSync(savedPath);
//         return res.status(403).send("ZIP 비밀번호가 올바르지 않습니다.");
//       }

//       // ZIP 시그니처 검사
//       if (!isZipBySignature(head)) {
//         fs.unlinkSync(savedPath);
//         return res.status(400).send("업로드된 파일이 유효한 ZIP 파일이 아닙니다.");
//       }

//       // ZIP은 통과
//       return res.status(200).send("ok");
//     } else {
//       // 비디오 형식 검사 (기존 로직)
//       if (!isVideoBySignature(head)) {
//         fs.unlinkSync(savedPath);
//         return res.status(400).send("업로드된 파일이 유효한 비디오 파일이 아닙니다.");
//       }

//       // (선택) client mimetype check 경고
//       const clientType = req.file.mimetype || "";
//       if (!clientType.startsWith("video/")) {
//         console.warn(`클라이언트 Content-Type이 video/이 아님: ${clientType}`);
//       }

//       return res.status(200).send("ok");
//     }
//   } catch (err) {
//     console.error("업로드 검증 중 오류:", err);
//     try { if (fs.existsSync(savedPath)) fs.unlinkSync(savedPath); } catch(e){}
//     return res.status(500).send("서버 오류 발생");
//   }
// });

// // --------------------
// // 업로드된 파일 목록
// // --------------------
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

// // --------------------
// // 삭제 (기존 동작 유지)
// // --------------------
// app.post("/delete", (req, res) => {
//   const { filename, code } = req.body;
//   if (!filename || !code) return res.status(400).json({ error: "요청이 잘못되었습니다." });
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

// // --------------------
// app.listen(PORT, () => console.log(`✅ 서버 실행 중: http://localhost:${PORT}`));





// server.js (업데이트됨: ffmpeg faststart 자동 변환 추가)
const express = require("express");
const multer = require("multer");
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const app = express();
const PORT = 3000;
const SECRET_CODE = "1234"; // 삭제용 비밀코드

const uploadFolder = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadFolder)) fs.mkdirSync(uploadFolder);

const ALLOWED_EXT = [".mp4", ".mov", ".zip"];

// Multer 설정
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadFolder),
  filename: (req, file, cb) => {
    const safeOrig = path.basename(file.originalname);
    const name = Date.now() + "-" + safeOrig;
    cb(null, name);
  },
});
const upload = multer({ storage });

function startsWith(buf, pattern) {
  if (buf.length < pattern.length) return false;
  for (let i = 0; i < pattern.length; i++) if (buf[i] !== pattern[i]) return false;
  return true;
}

function isVideoBySignature(buf) {
  if (!buf || buf.length < 4) return false;
  if (buf.slice(4, 8).toString() === "ftyp") return true;
  if (startsWith(buf, Buffer.from([0x1A, 0x45, 0xDF, 0xA3]))) return true;
  if (buf.slice(0,4).toString() === "RIFF" && buf.slice(8,12).toString() === "AVI ") return true;
  if (buf.slice(0,4).toString() === "OggS") return true;
  if (startsWith(buf, Buffer.from([0x00,0x00,0x01,0xBA]))) return true;
  if (startsWith(buf, Buffer.from([0x00,0x00,0x01,0xB3]))) return true;
  return false;
}

const READ_BYTES = 4096;

app.use(express.static(path.join(__dirname, "public")));
app.use("/videos", express.static(uploadFolder));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// ✅ 업로드 + 파일 형식 검증 + ffmpeg faststart 변환
app.post("/upload", upload.single("video"), (req, res) => {
  if (!req.file) return res.status(400).send("파일이 업로드되지 않았습니다.");

  const savedPath = path.join(uploadFolder, req.file.filename);
  const ext = path.extname(req.file.originalname || "").toLowerCase();

  // zip 파일 업로드 시 비밀번호 확인 필요
  if (ext === ".zip") {
    const { zipPassword } = req.body;
    if (zipPassword !== SECRET_CODE) {
      fs.unlinkSync(savedPath);
      return res.status(403).send("ZIP 파일 업로드를 위한 비밀번호가 틀렸습니다.");
    }
    return res.status(200).send("zip-ok");
  }

  try {
    if (!ALLOWED_EXT.includes(ext)) {
      fs.unlinkSync(savedPath);
      return res.status(400).send("허용되지 않는 파일 확장자입니다.");
    }

    const fd = fs.openSync(savedPath, "r");
    const buffer = Buffer.alloc(READ_BYTES);
    const bytesRead = fs.readSync(fd, buffer, 0, READ_BYTES, 0);
    fs.closeSync(fd);
    const head = buffer.slice(0, bytesRead);

    if (!isVideoBySignature(head)) {
      fs.unlinkSync(savedPath);
      return res.status(400).send("업로드된 파일이 유효한 비디오 파일이 아닙니다.");
    }

    // ✅ mp4 파일일 경우 ffmpeg로 faststart 적용
    if (ext === ".mp4") {
      const tmpPath = savedPath + ".tmp";
      const cmd = `ffmpeg -y -i "${savedPath}" -movflags +faststart -c copy "${tmpPath}" && mv "${tmpPath}" "${savedPath}"`;

      exec(cmd, (err) => {
        if (err) console.error("ffmpeg 변환 실패:", err);
        else console.log(`✅ faststart 적용 완료: ${req.file.filename}`);
      });
    }

    return res.status(200).send("ok");
  } catch (err) {
    console.error("업로드 처리 중 오류:", err);
    try { if (fs.existsSync(savedPath)) fs.unlinkSync(savedPath); } catch(e){}
    return res.status(500).send("서버 오류 발생");
  }
});

// 파일 목록
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

// 삭제
app.post("/delete", (req, res) => {
  const { filename, code } = req.body;
  if (!filename || !code) return res.status(400).json({ error: "요청이 잘못되었습니다." });
  if (code !== SECRET_CODE) return res.status(403).json({ error: "비밀 코드가 틀렸습니다." });

  const filePath = path.join(uploadFolder, filename);
  if (!fs.existsSync(filePath)) return res.status(404).json({ error: "파일이 존재하지 않습니다." });

  try {
    fs.unlinkSync(filePath);
    return res.json({ message: "삭제 완료" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "삭제 중 오류 발생" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ 서버 실행 중: http://localhost:${PORT}`)
});
