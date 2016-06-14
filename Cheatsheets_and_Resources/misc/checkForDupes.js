"use strict";

const fs = require('fs');

fs.readFile(process.argv[2], (e,d) => {
  if (e) {
    console.error(e);
  } else {
    const newGroups = JSON.parse(d);
    fs.readFile(process.argv[3], (e2, d2) => {
      if (e2) {
        console.error(e2);
      } else {
        const matchesToDate = JSON.parse(d2);
        if (d2 = {}) {
          for (let g of newGroups) {
            matchesToDate[g[0].replace(/\s/, '')] = g[1].replace(/\s/, '');
            matchesToDate[g[1].replace(/\s/, '')] = g[0].replace(/\s/, '');
          }
          fs.writeFile('./dupes.json', JSON.stringify(matchesToDate), (e) => {
            if (e) {
              console.error(e);
            }
          });
        } else {
          const dupes = newGroups.map((g) => {
            console.log(g);
            return matchesToDate[g[0].replace(/\s/, '')].indexOf(g[1].replace(/\s/, '')) >= 0 ? true : false;
          });
          console.log(dupes);
        }
      }
    });
  }
});
