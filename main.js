let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Estudio Ingeniería de Software en la Facultad de Informatica de la UAQ.')
  .pauseFor(200)
  .deleteChars(10)
  .start();
