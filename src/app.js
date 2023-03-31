const doc = {
	elsoTelekHossza: document.querySelector("#elsoTelekHossza"),
	masodikTelekHossza: document.querySelector("#masodikTelekHossza"),
	result: document.querySelector("#result"),
};

function calcFullArea() {
	let fullArea =
		calcArea(Number(doc.elsoTelekHossza.value)) +
		calcArea(Number(doc.masodikTelekHossza.value)) / 2;
	doc.result.value = fullArea;
}

function calcArea(side) {
	area = (3 / 2) * Math.pow(side, 2) * Math.sqrt(3);
	return area;
}
