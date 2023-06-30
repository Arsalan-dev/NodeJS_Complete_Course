const fs = require("fs");

// creating a stream to read data from a larger file blog3.txt
const readStream = fs.createReadStream("./docs/blog3.txt", { encoding: "utf8" });

// writing data in buffers to a file
const writeStream = fs.createWriteStream('./docs/blog4.txt');

/* .on is an event listener listening to a data stream.
 Every time we get a new chunk of data, we fire this callback function
 and access to that chunk of data */

 readStream.on("data", (chunk) => {
//   console.log("---- NEW CHUNK ----");
//   console.log(chunk);

  /* every time we get a new chunck, write it to a file */
  
  writeStream.write('\nNEW CHUNK\n');
  writeStream.write(chunk);
});

/* piping: pipe the data from readStream into the WriteStream */

// readStream.pipe(writeStream);


