const fs = require('fs');

let files = ['adjectives', 'nouns', 'verbs'];

let read = function (file) {
	let data = fs.readFileSync('./' + file + '.txt');
	return data.toString().split('\r\n').filter(s => s);
}

let textToJson = function (words) {
	let i = 0;
	let json = { words: [] };
	for (let word of words) {
		json.words.push({
			id: i.toString().padStart(2, '0'),
			word,
		});
		i++;
	}
	return json;
}

for (let file of files) {
	let words = read(file);
	words = [...new Set(words)]; // remove dupes
	console.log(`${file}: ${words.length} words`);
	let json = textToJson(words);
	fs.writeFileSync(`./${file}.json`, JSON.stringify(json, null, 2));
}

