/*
 * @Author: tackchen
 * @Date: 2022-03-31 10:56:58
 * @LastEditors: tackchen
 * @LastEditTime: 2022-03-31 11:03:58
 * @FilePath: /github-action/helper/mod-version.js
 * @Description: Coding something
 */
const path = require('path');
const fs = require('fs');

function modVersion () {
    const file = path.resolve(__dirname, '../package.json');
    const pkg = require(file);
    pkg.version = process.argv[2];
    fs.writeFile(file, JSON.stringify(pkg, null, 4), 'utf8', (err) => {
        if (err) throw err;
    });
}

modVersion();