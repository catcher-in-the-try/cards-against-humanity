const fs = require('fs');

let load = function(filename) {
	let json = require(`./${filename}.json`);
	return json.words;
}

let random = function(words) {
	let randomNumber = Math.floor(Math.random() * words.length);
	return words[randomNumber];
}

let generateString = function(nouns, verbs, adjectives) {
	let w1 = random(nouns);
	let w2 = random(verbs);
	let w3 = random(adjectives);
	let w4 = random(nouns);
	
	return {
		string: `${w1.word} ${w2.word} ${w3.word} ${w4.word}`,
		id: `${w1.id}${w2.id}${w3.id}${w4.id}`,
	};
}

let nouns = load('nouns');
let verbs = load('verbs');
let adjectives = load('adjectives');

for (var i = 0; i < 15; i++) {
  console.log(generateString(nouns, verbs, adjectives));	
}