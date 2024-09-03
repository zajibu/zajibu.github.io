import { execSync } from 'child_process';
import { extname } from 'path';
import { access, constants } from 'fs';

let root = process.cwd();
let files = execSync("git diff --cached --name-status HEAD").toString().split("\n");
let types = ['a', 'm'];
for (let idx in files) {
    let file = files[idx];
    if (!file) {
        continue;
    }
    let temp = file.split(/[\n\t]/);
    let status = temp[0].toLowerCase();
    let filePath = root + "/" + temp[1];
    let extName = extname(filePath).slice(1);
    if (~types.indexOf(status) && extName === 'png') {
        access(filePath, constants.F_OK, (err) => {
            if (!err) {
                console.log("Start compressing -> " + filePath);
                execSync("pngquant --force --ext=.png --quality=45-60 " + filePath);
                execSync("git add " + temp[1]);
            }
        });
    }
}
