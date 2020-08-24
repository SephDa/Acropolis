/** Game Time is used for managing the overall time of the game, once the player starts the game */
class GameTime {
  hungtimer;
  hrtimer;
  daytimer;

  constructor(hourlyMs) {
    this.hourlyMs = hourlyMs;
  }

  /**Function which starts all time related functions and allocates their milliseconds*/
  start() {
    this.hungtimer = setInterval(this.depleteHunger, 60000);
    this.hrtimer = setInterval(this.hourTime, this.hourlyMs);
    this.daytimer = setInterval(this.dayTime, 240000);
  }

  /**Function which stops all time related functions*/
  stop() {
    clearInterval(this.hungtimer);
    clearInterval(this.hrtimer);
    clearInterval(this.daytimer);
    document.getElementById("daysnumber").textContent = "00";
    document.getElementById("hoursnumber").textContent = "00";
  }

  /**Time related Functions
    Function that depletes hunger over set period of time */
  depleteHunger() {
    var hungerText = document.getElementById("hungerStatPercentage");
    var hunger = parseInt(hungerText.textContent, 10);

    var hungerBar = document.getElementById("hungerStatProgress");

    var damage = 5;

    if (hunger > 0) {
      hunger = hunger - damage;
      hunger = hunger.toString();

      hungerText.textContent = hunger;
      hungerBar.style.width = hunger + "%";
    } else {
      alert("You have starved to death!");
      clearAll();
    }
  }

  /**Function that makes hour go up*/
  hourTime() {
    var hoursText = document.getElementById("hoursnumber");
    var hours = parseInt(hoursText.textContent, 10);

    if (hours >= 24) {
      hoursText.textContent = "1";
    } else {
      var hours = (hours + 1).toString();
      hoursText.textContent = hours;
    }
  }

  /**Function that makes days go up */
  dayTime() {
    var daysText = document.getElementById("daysnumber");
    var days = parseInt(daysText.textContent, 10);

    var days = (days + 1).toString();
    daysText.textContent = days;
  }
}
