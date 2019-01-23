import {promises as fs, constants} from 'fs';

async function checkFileExists(file: string) {
  try {
    await fs.access(file, constants.F_OK);
    return true;
  } catch (e) {
    // console.error(e);
    return false;
  }
}

async function run() {
  console.log('./README.md', await checkFileExists('./README.md'))
  console.log('./not-exist', await checkFileExists('./not-exist'))
}

run();
