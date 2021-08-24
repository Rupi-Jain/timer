const args = (process.argv).slice(2);
console.log(args);
counter = 1000;
for (let val of args) {
  if ( val.length === 0)
    break;
  if( parseInt(val) > 0 ) {
    setTimeout(() => {
      console.log("Inside" + val);
      process.stdout.write('\x07');
    }, counter += 2000)    
  }
}