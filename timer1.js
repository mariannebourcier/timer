process.stdout.write('\x07');

//no numbers = no beep, end
//ignore negative numbers
//ignore non numbers
//timer that will beep after specified amt of time
//user can specify unlimited num of alarms
//ex: node timer1.js 10 3 5 15 9
//process.argv
let args = process.argv;
args = args.slice(2);

const timer = function(speed) {
  for (let i = 0; i < speed.length; i++) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, speed[i] * 1000);
  }
};

timer(args);