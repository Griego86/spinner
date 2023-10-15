const spinnerFrames = ["|", "/", "-", "\\", "|", "\n"];
let delay = 100;
spinnerFrames.forEach(frame => {
  setTimeout(() => {
    process.stdout.write(`\r${frame}   `);
  }, delay);
  delay += 200;
});