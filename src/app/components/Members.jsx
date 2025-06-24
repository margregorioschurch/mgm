import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';

export default function Members() {
  const members = [
    {
      name: "Fr.Thomas Yohannan",
      role: "Clergy",
      imgSrc: "/img/person-4.png",
      facebook: "https://www.facebook.com/yohannan.thomas.35",
      whatsapp: "#",
      instagram: "#",
      delay: "100", // ms
    },
    {
      name: "Thomas P. Rajan",
      role: "Secretary",
      imgSrc: "/img/person-4.png",
      facebook: "https://www.facebook.com/thomas.rajan.73",
      whatsapp: "#",
      instagram: "#",
      delay: "300",
    },
    {
      name: "Prof. M.T. Mathew",
      role: "Trustee",
      imgSrc: "/img/person-4.png",
      facebook: "#",
      whatsapp: "#",
      instagram: "#",
      delay: "500",
    },
    {
      name: "Full Name",
      role: "Convener",
      imgSrc: "/img/person-4.png",
      facebook: "#",
      whatsapp: "#",
      instagram: "#",
      delay: "700",
    },
  ];

  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-center items-center gap-2 mb-4">
  <FontAwesomeIcon icon={faPeopleGroup} className="text-orange-500 text-2xl" />
  <h5 className="text-orange-500 text-sm sm:text-base font-semibold uppercase tracking-widest font-secondary">
    Committee Members
  </h5>
</div>
  <h6 className="text-3xl sm:text-4xl font-bold mb-10 text-center">
    Working Committee Members
  </h6>

        {/* Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          {members.map(({ name, role, imgSrc, facebook, whatsapp, instagram, delay }, idx) => (
            <div
              key={idx}
              className="bg-gray-50/50 rounded-lg shadow-md text-center p-6 flex flex-col items-center"
              style={{ animationDelay: `${delay}ms` }}
            >
              <div className="w-28 h-28 rounded-full overflow-hidden mb-4">
                <img
                  src={imgSrc}
                  alt={name}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <h5 className="text-xl font-semibold mb-1">{name}</h5>
              <small className="text-gray-500">{role}</small>

              <div className="flex justify-center mt-4 gap-3">
                <a
                  href={facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
                  aria-label={`${name} Facebook`}
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white hover:bg-green-600 transition"
                  aria-label={`${name} WhatsApp`}
                >
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500 text-white hover:bg-pink-600 transition"
                  aria-label={`${name} Instagram`}
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
