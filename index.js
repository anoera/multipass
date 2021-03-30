class Dog {
	run() {
		console.log('dog running');
	}
}

class Cat {
	run() {
		console.log('cat running');
	}
}

function returnAnimalInstance(animal) {
	switch (animal) {
		case 'dog':
			return new Dog();
		case 'cat':
			return new Cat();
		default:
			break;
	}
}

let animalInstance = returnAnimalInstance('dog');
animalInstance.run();

animalInstance = returnAnimalInstance('cat');
animalInstance.run();
