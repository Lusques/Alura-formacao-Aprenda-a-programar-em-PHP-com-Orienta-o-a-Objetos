#!/usr/bin/env node
const fs = require('fs');
const { spawn } = require('child_process');
const path = require('path');

const file = path.resolve(process.cwd(), 'primeiro-programa.php');
const once = process.argv.includes('--once');

function runPhp() {
  const php = spawn('php', [file], { stdio: 'inherit' });
  php.on('error', (err) => {
    console.error('Erro ao executar php:', err.message);
  });
}

fs.stat(file, (err, stat) => {
  if (err) {
    if (err.code === 'ENOENT') {
      console.error(`Arquivo não encontrado: ${file}`);
    } else {
      console.error(err);
    }
    if (once) process.exit(1);
  }
  let last = stat ? +stat.mtimeMs : 0;
  if (once) {
    runPhp();
    process.exit(0);
  }

  console.log('Observando', file);
  fs.watchFile(file, { interval: 1000 }, (curr, prev) => {
    if (+curr.mtimeMs !== +prev.mtimeMs) {
      console.log(new Date().toLocaleTimeString(), 'mudança detectada — executando php...');
      runPhp();
    }
  });
});
