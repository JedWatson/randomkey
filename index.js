function number (n) {
	if (!n) return 10;
	return (typeof n === 'number') ? n : parseInt(n, 10);
}

function randomKey (len, chars) {
	var str = '';
	if (typeof len === 'object') { // cheap array check
		var min = number(len[0]);
		var max = number(len[1]);
		len = Math.round(Math.random() * (max - min)) + min;
	} else {
		len = number(len);
	}
	chars = chars || randomKey.default;
	for (var i = 0; i < len; i++) {
		str += chars.charAt(Math.floor(Math.random() * chars.length));
	}
	return str;
}

randomKey.upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
randomKey.lower = randomKey.upper.toLowerCase();
randomKey.numbers = '0123456789';

randomKey.alphanumeric = randomKey.numbers + randomKey.upper;
randomKey.default = randomKey.alphanumeric + randomKey.lower;
randomKey.safe = randomKey.alphanumeric.replace(/[015IOQS]/g, '');
randomKey.safeLower = randomKey.alphanumeric.toLowerCase().replace(/[01l]/g, '');

module.exports = randomKey;
