// components/Saints.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCross } from '@fortawesome/free-solid-svg-icons';

export default function Saints() {
    return (
      <section id="page-saints" className="container-xl py-10">
        <div className="container mx-auto px-4">
        <div className="text-center pb-4">
  <div className="inline-flex items-center justify-center gap-2 mb-6">
    <FontAwesomeIcon icon={faCross} className="text-orange-400 text-lg" />
    <h5 className="text-primary font-secondary text-2xl text-orange-400 font-semibold">
      Saints
    </h5>
  </div>
</div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                img: "/img/st-gregorios.webp",
                name: "St. Gregorios",
                desc:
                  "St. Geevarghese Mor Gregorios, also referred to as Parumala Thirumeni, served as a Metropolitan of the Malankara Church from 15 June 1848 to 2 November 1902. Mar Gregorios became the first saint from India to be recognized by the Christian church when the Malankara Orthodox Syrian Church declared him a saint in 1947. He was the first person of Indian descent to be recognised as a saint by the Syriac Orthodox Church in November 1987.",
                link: "https://mosc.in/saints/st-gregorios-of-parumala-metropolitan-geevarghese-mar-gregorios",
              },
              {
                img: "/img/st-thomas.webp",
                name: "St. Thomas",
                desc:
                  "St. Thomas, one of Jesus Christ's twelve apostles and a follower, arrived in India in AD 52. In AD 52, a disciple of Jesus Christ named St. Thomas travelled to India where he preached the gospel and founded seven churches. He planted 7 churches and preached the gospel. The Disciple of Christ, Mar Thomasleeha, is thought to have preached the gospel in Kerala in the first century A.D., which is when the Syrian Christian churches in Kerala first appeared.",
                link: "https://ml.wikipedia.org/wiki/%E0%B4%A4%E0%B5%8B%E0%B4%AE%E0%B4%BE%E0%B4%B6%E0%B5%8D%E0%B4%B2%E0%B5%80%E0%B4%B9%E0%B4%BE",
              },
              {
                img: "/img/st-george.webp",
                name: "St. Geevarghese",
                desc:
                  "St. George, a Christian martyr and saint, lived in the third century. He was a person who lived from 275 to 281 AD and died on April 22, 303 AD. According to hereditary, he was a Roman soldier fighting for the Diocletian Emperor. At the time, he was also a priest. The saint's fame was enhanced by the legend surrounding his conflict with the enormous snake. He is revered as one of the 14 Auxiliary Saints and is the patron saint of Georgia and England (Holy Helpers).",
                link: "https://ml.wikipedia.org/wiki/%E0%B4%B5%E0%B4%BF%E0%B4%B6%E0%B5%81%E0%B4%A6%E0%B5%8D%E0%B4%A7_%E0%B4%97%E0%B5%80%E0%B4%B5%E0%B5%BC%E0%B4%97%E0%B5%80%E0%B4%B8%E0%B5%8D",
              },
            ].map((saint) => (
              <div
                key={saint.name}
                className="bg-orange-100 rounded-lg shadow-md overflow-hidden p-6"
              >
                <img
                  src={saint.img}
                  alt={saint.name}
                  className="w-20 h-20 object-contain mb-4"
                />
                <h5 className="text-primary font-semibold text-xl mb-2">{saint.name}</h5>
                <p className="text-justify text-gray-700 mb-4">{saint.desc}</p>
                <a
                  href={saint.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white py-1 px-4 rounded hover:bg-blue-700 transition"
                >
                  Read more <i className="fa fa-arrow-right ml-2"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  