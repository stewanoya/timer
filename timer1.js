const args = process.argv.slice(2);
for (arg of args) {
  if (arg > 0)
    setTimeout(() => {
      //makes system sound
      process.stdout.write("\x07");
    }, arg);
}
