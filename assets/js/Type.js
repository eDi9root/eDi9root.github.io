const typewriter = new Typewriter('#typewriter', {
    loop: true,
    delay: 100,
  });

typewriter.typeString('<strong>Guest: </strong>')
    .typeString('Hello, how are you?')
    .pauseFor(1500)
    .typeString('<br/>')
    .typeString('<strong>Root: </strong>')
    .typeString('I am fine thanks, nice to meet you')
    .pauseFor(1500)
    .typeString('<br/>')
    .typeString('<strong>Guest: </strong> ')
    .typeString('Who are you?')
    .pauseFor(1500)
    .typeString('<br/>')
    .typeString('<strong>Root: </strong> ')
    .typeString('I am a Software Developer')
    .pauseFor(1500)
    .deleteChars(18)
    .typeString('Cybersecurity analyst')
    .pauseFor(1500)
    .start();