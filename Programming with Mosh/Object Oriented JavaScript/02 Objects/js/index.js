function StopWatch(){
  let startTime, endTime, running, duration = 0;

  this.start = function(){
    if(running){
      throw Error("StopWatch already running!!!");
    }
    running = true;
    startTime = new Date();
  };

  this.stop = function(){
    if(!running){
      throw Error("StopWatch already stop!!!");
    }
    running = false;
    endTime = new Date();

    const second = (endTime.getTime() - startTime.getTime())/1000;
    duration += second;
  };

  this.reset = function(){
    startTime = null;
    endTime = null;
    running = false;
    duration = 0;
  };

  Object.defineProperty(this, "duration", {
    get: function(){
      return duration;
    }
  });
}