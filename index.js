class CountdownTimer {

  constructor({selector, targetDate} ) {
      this.timeId = null;
      this.selector = selector;
      this.targetDate = targetDate;
      this.startCounting();
  }

  createTime() {
      const currentTime = Date.now();
      const difference = this.targetDate - currentTime;
      const timeForCount = this.receiveTime(difference);
      this.clockFace(timeForCount);

      if(difference < 0) {
          clearInterval(this.timeId);
          document.querySelector('#timer-1').textContent = "Лето в самом разгаре!"
          return;
      };
  };

  startCounting() {
      this.createTime();

      this.timeId = setInterval(() => {
      this.createTime()
    
     }, 1000) 
  };

  pad(value) {
      return String(value).padStart(2, '0');
  }

  clockFace({days, hours, mins, secs}) {
    document.querySelector(
      this.selector,
    ).children[0].children[0].textContent = `${days}`;

    document.querySelector(
      this.selector,
    ).children[1].children[0].textContent = `${hours}`;

    document.querySelector(
      this.selector,
    ).children[2].children[0].textContent = `${mins}`;

    document.querySelector(
      this.selector,
    ).children[3].children[0].textContent = `${secs}`;
  }

  receiveTime(time) {   
      const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
      const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
      const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));    

      return {days, hours, mins, secs};
      }
      
};

const forTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('June 1, 2021'), 
});