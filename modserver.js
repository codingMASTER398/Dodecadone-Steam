const http = require('http');
const fs = require('fs');
const path = require('path');

const allowedDirectories = ['src', 'node_modules', 'mods'];

// This distributes some of the game files in a secure manner via a localhost URL. This is so that mods can't read just any file on your disk!

const server = http.createServer((req, res) => {
  try {
    const url = req.url;
    const filePath = path.join(__dirname, url.split("?")[0]);

    if (allowedDirectories.some(dir => filePath.startsWith(path.join(__dirname, dir)))) {
      if (fs.existsSync(filePath)) {
        fs.access(filePath, fs.constants.R_OK, (err) => {
          if (err) {
            res.statusCode = 403;
            res.end('Access denied');
          } else {
            res.statusCode = 200;
            fs.createReadStream(filePath).pipe(res);
          }
        });
      } else {
        res.statusCode = 404;
        res.end('File not found');
      }
    } else {
      console.log(`DENY ${url}`);
      res.statusCode = 403;
      res.end('Guess what? BAU-BAU. X. DENIED. UNACCEPTABLE. you sir shall be extinguished with fire. seriously though, if you got this error legit, dm me on discord @coding398 rn.');
    }
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.end('Internal server error');
  }
});

server.listen(4622, () => {
  console.log('Server listening on port 4622');
});