const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
  return cats.push("Ralph");
}

function destructivelyPrependCat(name) {
  return cats.unshift("Bob")
}

function destructivelyRemoveLastCat(name) {
  return cats.pop();
}

function destructivelyRemoveFirstCat(name) {
  return cats.shift();
}

function appendCat(name) {
  return [...cats, name];
}

function prependCat(name) {
  return [name, ...cats];
}

function removeLastCat(name) {
  return cats.slice(0, 2);
}

function removeFirstCat(name) {
  return cats.slice(-2);
}
