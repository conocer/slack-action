import { getInput } from '@actions/core';
import { exec } from '@actions/exec';

const main = () => {
  const payload = getInput('payload', { required: true });
  const token = getInput('token', { required: true });

  exec(`curl -X POST -H "Content-type: application/json" -H "Authorization: Bearer ${token}" -d "${payload}" https://slack.com/api/chat.postMessage`);
}

process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

main();
