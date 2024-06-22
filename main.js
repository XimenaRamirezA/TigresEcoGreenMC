let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 130,
});
 
typewriter
  .pauseFor(2500)
  .typeString('¡Cuidemos el agua!...')
  .pauseFor(200)
  .deleteChars(10)
  .start();
