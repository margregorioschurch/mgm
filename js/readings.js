async function load_readings(){let n=new Date,t=`https://orthocal.info/api/gregorian/${n.getFullYear()}/${n.getMonth()+1}/${n.getDate()}/`,a=await fetch(t);if(a.ok){let e=await a.json();abbr_readings=e.abbreviated_reading_indices.map(n=>e.readings[n]),document.querySelector("#readings").innerHTML=`
			<h2>${n.toDateString()}</h2>
			<h3>${e.summary_title}</h3>
			<h2>Scripture Readings</h2>
			${abbr_readings.map(n=>`
				<h3>${n.display}</h3>
				<!-- There is no markup in the verses, so we wrap the whole thing in <p> tags -->
				<p>${n.passage.map(n=>n.content).join(" ")}</p>
			`).join("")}
			<h2>Commemorations</h2>
			${e.stories.map(n=>`
				<h3>${n.title}</h3>
				<!-- Stories already have the html markup embedded, so we don't need <p> tags -->
				${n.story}
			`).join("")}
		`}}document.addEventListener("DOMContentLoaded",load_readings),function(){$(document).ready(function(){n()}),$("button").click(function(){n()});var n=function(){$.ajax({url:"https://labs.bible.org/api/?passage=random&type=json&callback=myCallback",crossDomain:!0,dataType:"jsonp",success:function(n){$("#newQuote0").html("<strong>"+n[0].bookname+" "+n[0].chapter+"&nbsp;:&nbsp;"+n[0].verse+"</strong>&nbsp;-&nbsp;"+n[0].text)}})}}(),function(){$(document).ready(function(){n()}),$("button").click(function(){n()});var n=function(){$.ajax({url:"https://labs.bible.org/api/?passage=random&type=json&callback=myCallback",crossDomain:!0,dataType:"jsonp",success:function(n){$("#newQuote1").html("<strong>"+n[0].bookname+" "+n[0].chapter+"&nbsp;:&nbsp;"+n[0].verse+"</strong>&nbsp;-&nbsp;"+n[0].text)}})}}(),function(){$(document).ready(function(){n()}),$("button").click(function(){n()});var n=function(){$.ajax({url:"https://labs.bible.org/api/?passage=random&type=json&callback=myCallback",crossDomain:!0,dataType:"jsonp",success:function(n){$("#newQuote2").html("<strong>"+n[0].bookname+" "+n[0].chapter+"&nbsp;:&nbsp;"+n[0].verse+"</strong>&nbsp;-&nbsp;"+n[0].text)}})}}(),function(){$(document).ready(function(){n()}),$("button").click(function(){n()});var n=function(){$.ajax({url:"https://labs.bible.org/api/?passage=random&type=json&callback=myCallback",crossDomain:!0,dataType:"jsonp",success:function(n){$("#newQuote3").html("<strong>"+n[0].bookname+" "+n[0].chapter+"&nbsp;:&nbsp;"+n[0].verse+"</strong>&nbsp;-&nbsp;"+n[0].text)}})}}();
