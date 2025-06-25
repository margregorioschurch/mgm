// app/page.tsx
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChurch } from '@fortawesome/free-solid-svg-icons';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import Saints from '@/app/components/Saints';
import Video from '@/app/components/Video';
import Calendar from '@/app/components/Calendar'
import Events from '@/app/components/Events'
import Members from '@/app/components/Members'
import Versus from '@/app/components/Versus'
export default function Page() {
  return (
    <>
      <Header />
      <main>
      <section
        id="page-banner"
        className="
          container-xl hero-header
          bg-[linear-gradient(rgb(120_59_12_/50%),_rgb(9_4_0_/50%)),url('/img/2018-05-04.jpg')]
          bg-cover bg-center
          rounded-b-lg shadow-lg
        "
      >
      <div className="container mx-auto py-10 px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-white animate-slide-in-left mb-6 py-20">
              Mar.Gregorios<br />Orthodox Church
            </h1>
            <p className="text-lg text-gray-300 animate-slide-in-left mb-6 pb-2">
              <span className="text-primary font-semibold text-orange-400">Diocese</span>: Diocese of Chengannur<br/>
              <span className="text-primary font-semibold text-orange-400">Location</span>: Thottapuzha, Eraviperoor P.O, Thiruvalla - 689542
            </p>
            <a
              href="#index-about"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded transition-colors duration-300 animate-slide-in-left"
            >
              Read More
            </a>
          </div>

          {/* Image */}
          <div className="lg:w-1/2 text-center lg:text-right overflow-hidden">
            <img
              id="hero-image"
              src="/img/hero-bg-church.png"
              alt="Church"
              className="mx-auto lg:mx-0 w-full max-w-md rounded-lg shadow-lg animate-slide-in-right"
            />
          </div>
        </div>

        {/* Google Translate
        <div id="google_translate_element" className="mt-8"></div> */}
      </div>

      {/* Dark Mode Toggle
      <div className="absolute bottom-4 right-4 flex items-center space-x-2">
        <small className="text-gray-400 text-xs">Dark Theme</small>
        <input id="darkModeToggle" type="checkbox" title="Twinkle Theme" className="toggle toggle-primary" />
      </div> */}
      
    </section>
    <Saints />
    <section id="page-about" className="container-xl py-10 bg-white-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          
          {/* Images Grid */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <img
              src="/img/about-1.jpg"
              alt="About 1"
              className="w-full rounded object-cover animate-zoomIn delay-100"
            />
            <img
              src="/img/about-2.jpg"
              alt="About 2"
              className="w-3/4 mt-20 rounded object-cover animate-zoomIn delay-300"
            />
            <img
              src="/img/about-3.jpg"
              alt="About 3"
              className="w-3/4 justify-self-end rounded object-cover animate-zoomIn delay-500"
            />
            <img
              src="/img/about-4.jpg"
              alt="About 4"
              className="w-full justify-self-end rounded object-cover animate-zoomIn delay-700"
            />
          </div>

          {/* Text Content */}
          <div className="lg:w-1/2">
          <div className="flex items-center gap-2 text-center lg:text-left pb-6">
            <FontAwesomeIcon icon={faChurch} className="text-orange-400 text-lg" />
            <h5 className="text-primary font-secondary font-normal text-lg text-orange-400 font-semibold">
              About Us
            </h5>
          </div>

            <h1 className="mb-6 text-3xl font-bold flex items-center gap-2">
              <i className="fa fa-church text-primary"></i>
              Welcome to Mar.Gregorios Church
            </h1>
            <p className="mb-6 text-justify">
            Mar.Gregorios Church is situated at the heart of a small village called Thottapuzha, Eraviperoor, Pathanamthitta District, Kerala, India. 
            One of Kerala's oldest and most well-known churches, it is also Malankara Sabha's prized possession. The church has maintained its tradition and culture without compromising its religious values for roughly fifty years.
            </p>
            <p className="mb-6 text-justify">
            The church has a parsonage and an auditorium, as well as nearby parking and amenities. Every Sunday, the qurbana services begin in the morning, and Sunday school follows. It is a mystery how the church has survived all of history's difficulties despite its magnificent fusion of beauty and science.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              {[
                { label: "Years Since 1971", value: "54" },
                { label: "Families", value: "240" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center border-l-4 border-primary pl-4 border-orange-400"
                >
                  <div>
                    <h6 className="mb-1">{stat.label}</h6>
                    <h2 className="text-primary text-4xl font-bold">{stat.value}</h2>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="about.html"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
    <Video />
    <Calendar />
    <Events />
    <Members />
    <Versus />
      </main>
      <Footer />
    </>
  );
}
