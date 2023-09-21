function writeCards(name, event) {
  const toWhom = [];
  for (let i = 0; i < name.length; i++) {
    toWhom.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
  }

  return toWhom;
}

function countDown(n) {
  while (n >= 0) {
    console.log(n);
    n--;
  }
}

countDown(10);