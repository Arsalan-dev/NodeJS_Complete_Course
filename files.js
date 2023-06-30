/* using file system to read, write to files and delete files */

const fs = require("fs");

/* reading files (all are async, so need a callback function) */

fs.readFile('./docs/blog.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});

console.log('last line')

/* writing files */

fs.writeFile('./docs/blog.txt', 'Hello World', () => {
    console.log('File was written')
})

/* directories */

if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Folder Created");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("Folder Deleted");
  });
}

/* deleting files */

if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err)
        }
        console.log('File Deleted')
    })
}