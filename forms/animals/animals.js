
myAnimals = ["dog", "cat", "horse", "meerkat"]

newAnimal = prompt("Which animal would you like to add?")
lowerAnimal = newAnimal.toLowerCase()

myAnimals.push(lowerAnimal)

console.log(`The last animal is a/an ${lowerAnimal}.`)


