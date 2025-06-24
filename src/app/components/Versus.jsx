'use client';

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft , faBible} from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Verses() {
  const [quotes, setQuotes] = useState([
    { id: 'newQuote0', text: 'Loading verse...' },
    { id: 'newQuote1', text: 'Loading verse...' },
    { id: 'newQuote2', text: 'Loading verse...' },
    { id: 'newQuote3', text: 'Loading verse...' },
  ]);

  useEffect(() => {
    const fetchQuote = async (index) => {
      try {
        const res = await fetch("https://labs.bible.org/api/?passage=random&type=json");
        if (!res.ok) throw new Error();
        const data = await res.json();
        return `<strong>${data[0].bookname} ${data[0].chapter}:${data[0].verse}</strong> - ${data[0].text}`;
      } catch {
        return "Failed to load quote.";
      }
    };

    const loadQuotes = async () => {
      const newQuotes = await Promise.all(
        quotes.map(async (_, idx) => {
          const text = await fetchQuote(idx);
          return { id: `newQuote${idx}`, text };
        })
      );
      setQuotes(newQuotes);
    };

    loadQuotes();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 9000,
    arrows: false,
    pauseOnHover: true,
    adaptiveHeight: true,
  };

  return (
    <section className="py-10">
      <div className="text-center mb-8">
  <div className="flex justify-center items-center gap-2 mb-2">
    <FontAwesomeIcon icon={faBible} className="text-orange-400 text-xl" />
    <h5 className="text-lg text-orange-400 font-medium uppercase tracking-widest">
      Bible Verse
    </h5>
  </div>
  <h1 className="text-3xl font-bold">Verses for the Day</h1>
</div>

      <div className="max-w-3xl mx-auto px-10">
        <Slider {...settings}>
          {quotes.map((quote, idx) => (
            <div
            key={idx}
            className="rounded-lg p-5" id="page-quotes">
              <FontAwesomeIcon icon={faQuoteLeft} className="text-blue-500 text-2xl mb-3" />
              <h5 className="text-gray-100 text-md mb-4 font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: quote.text }}></h5>
              <div className="flex items-center gap-3">
                <img src="/img/806181.png" alt="Bible" className="w-12 h-12 rounded-full object-cover" />
                <div className="text-sm text-gray-400">Holy Bible</div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Prayer Form */}
      <div className="mt-16  py-10 px-6 md:px-12 rounded-lg max-w-3xl mx-auto">
        <div className="text-center mb-6">
          <h5 className="text-lg text-blue-600 font-medium uppercase tracking-widest">For Prayers</h5>
        </div>
        <form
          className="space-y-6"
          action="https://formsubmit.co/margregorioschurch71@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_honey" style={{ display: 'none' }} />
          <input type="hidden" name="_next" value="https://margregorioschurch.github.io/mgm/form-submit.html" />
          <input type="hidden" name="_template" value="basic" />
          <input type="hidden" name="_subject" value="Prayer Request" />
          <input type="hidden" name="_cc" value="chrsibint@gmail.com" />
          <input type="hidden" name="_captcha" value="false" />

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
              <input type="text" name="name" id="name" required className="w-full p-2 border rounded" placeholder="Full Name"/>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
              <input type="email" name="email" id="email" required className="w-full p-2 border rounded" placeholder="example@gmail.com"/>
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Type your message</label>
            <textarea
              name="message"
              id="message"
              required
              rows={4}
              className="w-full p-2 border rounded"
              placeholder="Message Request"
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}