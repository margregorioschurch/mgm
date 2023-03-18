const countEl = document.getElementById('CounterVisitor');

updateVisitCount();

function updateVisitCount() {
	fetch('https://api.countapi.xyz/update/mgm/visits/?amount=1')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
}
