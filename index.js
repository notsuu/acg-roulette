let punishments = ["Be a furry for 1 day.", "Try and not cringe from the group wall.", "You will have to forger 💀", "The next image to be sent here by someone else that is NOT your existing pfp becomes your pfp. And yes, you have to keep it.", "The first person to DM you can give you any task to do and you must do it.", "Wear a maid avatar. Not having enough robux isn't an excuse.", "Speak a different language for 1 hour.", "taskkill /f /im svchost.exe (Mobile, linux or whatever? You're safe.)", "Play changed."];
  let spinning = true
  let punishIndex = 0;
  let chamber = 1;
  let luckStreak = 0;
  function spin() {
    if (spinning) {
    document.getElementById("punishment").innerHTML = punishments[punishIndex]; }
    punishIndex++
    if (punishIndex >= punishments.length) punishIndex = 0;
    chamber++; if (chamber > 6) chamber = 1;
   setTimeout(spin, 50)
  }
  function fire() {
    document.getElementById("fire").style = "display: none"
    document.getElementById("reroll").style = ""
    document.getElementById("chambers").src = `./assets/rr${chamber > 6 ? 6 : chamber}.png`
    document.getElementById("chambers").style = ""
    if (chamber > 6 ? 6 : chamber == 1) {
      document.getElementById("outcome").innerHTML = "Fire! How unfortunate..."
      luckStreak = 0;
      document.getElementById("streak").innerHTML = "Luck streak: 0"
    } else {
      document.getElementById("outcome").innerHTML = "Luck! You survived the punishment."
      luckStreak++
      document.getElementById("streak").innerHTML = "Luck streak: "+luckStreak
    } }
    
   function reroll() {
     document.getElementById("punishment").innerHTML = punishments[punishIndex]
      document.getElementById("fire").style = "display: none"
      document.getElementById("reroll").style = "display: none"
      document.getElementById("roll").style = ""
      document.getElementById("chambers").style = "display: none"
      document.getElementById("outcome").innerHTML = "You haven't fired yet"
      spinning = true;
  
   }
    
    function roll() {
      spinning = false;
      document.getElementById("fire").style = ""
      document.getElementById("reroll").style = "display: none"
      document.getElementById("roll").style = "display: none"
      document.getElementById("outcome").innerHTML = "The bullet is loaded, the punishment is decided. Will you be lucky?"
    }
  
  spin()
