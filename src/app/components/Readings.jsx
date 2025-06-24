'use client';

import { useEffect, useState } from 'react';

export default function ScriptureReadings() {
  const [readingData, setReadingData] = useState(null);
  const [bibleQuotes, setBibleQuotes] = useState([]);

  // Fetch readings on load
  useEffect(() => {
    async function loadReadings() {
      const today = new Date();
      const apiURL = `https://orthocal.info/api/gregorian/${today.getFullYear()}/${today.getMonth() + 1}/${today.getDate()}/`;

      try {
        const response = await fetch(apiURL);
        if (!response.ok) throw new Error(`Fetch failed with status ${response.status}`);
        const data = await response.json();

        const abbr_readings = data.abbreviated_reading_indices.map(
          (index) => data.readings[index]
        );

        setReadingData({
          date: today.toDateString(),
          summaryTitle: data.summary_title,
          readings: abbr_readings,
          stories: data.stories
        });
      } catch (error) {
        console.error("Error fetching readings:", error);
      }
    }

    loadReadings();
  }, []);

  // Fetch Bible Quotes with Delay
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await fetch("https://labs.bible.org/api/?passage=random&type=json");
        if (!res.ok) throw new Error();
        const data = await res.json();
        return `${data[0].bookname} ${data[0].chapter}:${data[0].verse} - ${data[0].text}`;
      } catch {
        return "Failed to load quote.";
      }
    };
  
    const loadQuotes = async () => {
      const totalQuotes = 3;
      const results = [];
  
      for (let i = 0; i < totalQuotes; i++) {
        const quote = await fetchQuote();
        results.push(quote);
        await new Promise((resolve) => setTimeout(resolve, 2000)); // Delay between fetches
      }
  
      setBibleQuotes(results); // Set exactly 3 quotes after all done
    };
  
    loadQuotes();
  }, []);  

  return (
    <div className="max-w-3xl mx-auto text-left rounded-lg p-6 shadow">
      <h2 className="text-xl font-bold text-blue-600 mb-2">Scripture Readings</h2>

      {!readingData ? (
        <p className="italic">Loading readings...</p>
      ) : (
        <>
          <h3 className="text-lg text-orange-600 mb-1">{readingData.date}</h3>
          <h4 className="font-semibold text-primary mb-2">{readingData.summaryTitle}</h4>

          <h5 className="text-md font-semibold mb-1">📖 Readings:</h5>
          {readingData.readings.map((r, i) => (
            <div key={i} className="mb-3">
              <h6 className="font-bold text-blue-700">{r.display}</h6>
              <p className="text-sm">
                {r.passage.map(p => p.content).join(" ")}
              </p>
            </div>
          ))}

        <hr className="my-4" />

          <h5 className="text-md font-semibold mt-4 mb-1">🙏 Commemorations:</h5>
          {readingData.stories.map((story, i) => (
            <div key={i} className="mb-3">
              <h6 className="font-bold text-green-700">{story.title}</h6>
              <p className="text-sm" dangerouslySetInnerHTML={{ __html: story.story }} />
            </div>
          ))}
        </>
      )}

      <hr className="my-4" />

      <div className="space-y-2">
        <h5 className="text-md font-semibold mb-2 text-indigo-600">✨ Daily Bible Quotes:</h5>
        {bibleQuotes.length === 0 ? (
          <p className="italic">Loading quotes...</p>
        ) : (
          bibleQuotes.map((quote, idx) => (
            <p key={idx} className="text-sm italic border-l-4 border-indigo-400 pl-3">
              {quote}
            </p>
          ))
        )}
      </div>
    </div>
  );
}
