/**This class manages the stats of the game once the game starts */
class StatsManager extends System {
  hungtimer;
  sleeptimer;

  constructor() {
    super();
  }

  /**Deplte stats over time */
  init() {
    this.hungtimer = setInterval(this.depleteHunger, 5000);
    this.sleeptimer = setInterval(this.depleteSleep, 60000);
  }

  /**Function that depletes hunger over set period of time */
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

  depleteSleep() {
    var sleepText = document.getElementById("sleepStatPercentage");
    var sleep = parseInt(sleepText.textContent, 10);

    var sleepBar = document.getElementById("sleepStatProgress");

    var tiredness = 5;

    if (sleep > 0) {
      sleep = sleep - tiredness;
      sleep = sleep.toString();

      sleepText.textContent = sleep;
      sleepBar.style.width = sleep + "%";
    } else {
      alert("You have not slept in days, the nightmares have overcome you.");
      clearAll();
    }
  }

  destroy() {
    clearInterval(this.hungtimer);
    clearInterval(this.sleeptimer);
  }
}
