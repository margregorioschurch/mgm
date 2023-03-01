async function load_readings() {
	// Use the client's date since the server is always set to Pacific Timezone
	const today = new Date()

	// JS months are zero-origin, so we have to add 1 to the month
	const url = `https://orthocal.info/api/gregorian/${today.getFullYear()}/${today.getMonth()+1}/${today.getDate()}/`;

	const response = await fetch(url)
	if (response.ok) {
		const day = await response.json()

		// Get an abbreviated subset of the readings
		abbr_readings = day.abbreviated_reading_indices.map(index => day.readings[index])

		// Use a string template to generate new HTML and add it to the
		// readings article in the markup.
		document.querySelector('#readings').innerHTML = `
			<h2>${today.toDateString()}</h2>
			<h3>${day.summary_title}</h3>
			<h2>Scripture Readings</h2>
			${abbr_readings.map(reading => `
				<h3>${reading.display}</h3>
				<!-- There is no markup in the verses, so we wrap the whole thing in <p> tags -->
				<p>${reading.passage.map(verse => verse.content).join(' ')}</p>
			`).join('')}
			<h2>Commemorations</h2>
			${day.stories.map(story => `
				<h3>${story.title}</h3>
				<!-- Stories already have the html markup embedded, so we don't need <p> tags -->
				${story.story}
			`).join('')}
		`
	}
}

document.addEventListener('DOMContentLoaded', load_readings);

(function() {
	$(document ).ready(function() {
		getVerse();
	});
  
	$("button").click(function(){
	  getVerse();
	});
  
	var getVerse = function() {
		$.ajax({
		  url: "https://labs.bible.org/api/?passage=random&type=json&callback=myCallback", 
		  crossDomain: true,
		  dataType: 'jsonp',
		  success: function(result){
			 $("#newQuote0")
			   .html('<strong>'+
					 result[0].bookname+
					 ' ' + result[0].chapter +
					 '&nbsp;:&nbsp;' + result[0].verse +
					 '</strong>&nbsp;-&nbsp;' +
					 result[0].text);
		  }
		});
	}
})();
(function() {
	$(document ).ready(function() {
		getVerse();
	});
  
	$("button").click(function(){
	  getVerse();
	});
  
	var getVerse = function() {
		$.ajax({
		  url: "https://labs.bible.org/api/?passage=random&type=json&callback=myCallback", 
		  crossDomain: true,
		  dataType: 'jsonp',
		  success: function(result){
			 $("#newQuote1")
			   .html('<strong>'+
					 result[0].bookname+
					 ' ' + result[0].chapter +
					 '&nbsp;:&nbsp;' + result[0].verse +
					 '</strong>&nbsp;-&nbsp;' +
					 result[0].text);
		  }
		});
	}
})();
(function() {
	$(document ).ready(function() {
		getVerse();
	});
  
	$("button").click(function(){
	  getVerse();
	});
  
	var getVerse = function() {
		$.ajax({
		  url: "https://labs.bible.org/api/?passage=random&type=json&callback=myCallback", 
		  crossDomain: true,
		  dataType: 'jsonp',
		  success: function(result){
			 $("#newQuote2")
			   .html('<strong>'+
					 result[0].bookname+
					 ' ' + result[0].chapter +
					 '&nbsp;:&nbsp;' + result[0].verse +
					 '</strong>&nbsp;-&nbsp;' +
					 result[0].text);
		  }
		});
	}
})();
(function() {
	$(document ).ready(function() {
		getVerse();
	});
  
	$("button").click(function(){
	  getVerse();
	});
  
	var getVerse = function() {
		$.ajax({
		  url: "https://labs.bible.org/api/?passage=random&type=json&callback=myCallback", 
		  crossDomain: true,
		  dataType: 'jsonp',
		  success: function(result){
			 $("#newQuote3")
			   .html('<strong>'+
					 result[0].bookname+
					 ' ' + result[0].chapter +
					 '&nbsp;:&nbsp;' + result[0].verse +
					 '</strong>&nbsp;-&nbsp;' +
					 result[0].text);
		  }
		});
	}
})();