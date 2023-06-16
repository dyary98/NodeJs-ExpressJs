// //! reading/writing files sync
// const {readFileSync, writeFileSync} = require('fs');

// const firstFile = readFileSync("./content/first.txt", 'utf8');
// const secondFile = readFileSync("./content/second.txt", 'utf8');
// console.log(firstFile, secondFile)

// //? if the file exists, overrides it, if not creates a new one
// // writeFileSync("./content/first.txt", "hello how you doing");

// //? if the file exists, overrides it, if not creates a new one
// writeFileSync(
//     "./content/first.txt",
//     " spasi pe zanintan akam",
//     { flag: 'a' }
//  );

// //!  reading and writing asynchronously
// const { readFile, writeFile } = require("fs");
// const firstFile = readFile("./content/first.txt", "utf8", (error, result) => {
//   if (error) {
//     console.log(error);
//   }
//   console.log(result);
//   const first = result;
//   readFile("./content/second.txt", "utf8", (error, result) => {
//     if (error) {
//       console.log(error);
//     }
//     const second = result;
//     writeFile("./content/result.txt", first + second, (error, result) => {
//       if (error) {
//         console.log(error);
//       }
//       console.log(result);
//     });
//   });
// });
