const fs = require('fs');
const path = require('path');
const os = require('os');
const EvenEmiiter = require('events');
const { log } = require('console');

class Logger extends EvenEmiiter{
  log(message){
    this.emit('message', `${new Date().toISOString()} - ${message}`);
  }

  table(data){
    this.emit('message', `${new Date().toISOString()} - ${JSON.stringify(data)}`);
  }
}

const logger = new Logger();

logger.on('message', (event)=>{  
  fs.appendFile(path.join(__dirname, 'log.txt'), event + '\n', err => {
    if(err) throw err;
  })
})


logger.log('Logger Started');

const logIntervalId = setInterval(()=>{
  const usage = (os.freemem() / os.totalmem()) * 100
  logger.log(`Memory Usage: ${usage.toFixed(2)}%`);
}, 2000);

setTimeout(()=>{
  clearInterval(logIntervalId);
  logger.log('Logger Stopped');
}, 10000);

logger.table({name: 'John Doe', age: 30});