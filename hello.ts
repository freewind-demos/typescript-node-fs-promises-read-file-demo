import {promises as fs} from 'fs';

async function run() {
  const result = await fs.readFile('./README.md', 'utf-8');
  console.log(result)
}

run();
