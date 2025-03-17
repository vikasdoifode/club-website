import React, { useEffect, useState, useRef } from "react";
import { Sidebar } from "../components/ui/Sidebar";
import { Instagram, Facebook, Linkedin, Youtube } from "lucide-react";
import { FaRobot, FaCode, FaMobileAlt, FaCloud, FaFlask } from "react-icons/fa";
import "aos/dist/aos.css";

const AboutPage = () => {
  const [currentDomain, setCurrentDomain] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [cardWidth, setCardWidth] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const cardsEl = useRef(null);
  const indicatorsContainer = useRef(null);

  const domainData = {
    ai: [
      "Yash Gunjal",
      "Mansi Barse",
      "Rajwardhan Mali",
      "Anshul Khaire",
      "Karan Rajput",
      "Vighnesh Gupta",
      "Mahendrakumar Suthar",
      "Jayesh Bairagi",
      "Swara Shetye",
      "Aaryan Shelar",
      "Krishna Yamsalwar",
    ],
    webdev: [
      "Smrutikant Parida",
      "Ajaya Nandiyawar",
      "Om Agarwal",
      "Aryan Gupta",
      "Madhur Biradar",
      "Vedant Nikam",
      "Ayush Sahare",
      "Krushna Kodgirwar",
      "Saurabh Gangurde",
      "Sahil Unhale",
    ],
    appdev: [
      "Pratik Paithankar",
      "Aditya Kale",
      "Anushka Dabhade",
      "Tanmay Patil",
    ],
    cloud: [
      "Shivanand Satao",
      "Omkar Patil",
      "Mustafa Nazir",
      "Samruddha Barhanpurkar",
    ],
    rd: [
      "Anshul Khaire",
      "Mrugesh Kulkarni",
      "Atharv Bhavsar",
      "Pranav Chinthala",
      "Anup Deshmukh",
      "Anand Nair",
      "Raghav Vyas",
    ],
  };

  useEffect(() => {
    const adjustVisibleCards = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
      updateCardsPosition();
    };

    window.addEventListener("resize", adjustVisibleCards);
    adjustVisibleCards(); // Initial call to set visible cards

    return () => {
      window.removeEventListener("resize", adjustVisibleCards);
    };
  }, []);

  useEffect(() => {
    if (currentDomain) {
      loadCards(currentDomain);
    }
  }, [currentDomain]);

  const loadCards = (domain) => {
    const data = domainData[domain];
    setTotalItems(data.length);
    const cardsContainer = cardsEl.current;
    const indicatorsContainerEl = indicatorsContainer.current;

    // Clear previous cards and indicators
    cardsContainer.innerHTML = "";
    indicatorsContainerEl.innerHTML = "";

    data.forEach((item) => {
      const card = document.createElement("div");
      card.className = "text-xl text-black-800";
      const title = document.createElement("h3");
      title.textContent = item;
      card.appendChild(title);
      cardsContainer.appendChild(card);
    });

    const maxIndex = Math.ceil(data.length / visibleCards);
    for (let i = 0; i < maxIndex; i++) {
      const indicator = document.createElement("div");
      indicator.className = "domain-indicator";
      if (i === 0) indicator.classList.add("active");

      indicator.addEventListener("click", () => {
        setCurrentIndex(i * visibleCards);
        updateCardsPosition();
      });

      indicatorsContainerEl.appendChild(indicator);
    }

    setTimeout(() => {
      const firstCard = document.querySelector(".domain-card");
      if (firstCard) {
        const style = getComputedStyle(firstCard);
        setCardWidth(
          firstCard.offsetWidth +
            parseInt(style.marginLeft || 0) +
            parseInt(style.marginRight || 0) +
            20
        );
        updateCardsPosition();
      }
    }, 0);
  };

  const updateCardsPosition = () => {
    if (cardsEl.current) {
      const translateX = -currentIndex * cardWidth;
      cardsEl.current.style.transform = `translateX(${translateX}px)`;

      const indicators = document.querySelectorAll(".domain-indicator");
      indicators.forEach((ind, index) => {
        ind.classList.toggle(
          "active",
          Math.floor(currentIndex / visibleCards) === index
        );
      });
    }
  };

  const navigateCards = (direction) => {
    if (direction === "prev" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (
      direction === "next" &&
      currentIndex < totalItems - visibleCards
    ) {
      setCurrentIndex(currentIndex + 1);
    }
    updateCardsPosition();
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#F4B57A] via-[#ff9c59] to-[#ffa472]">
      <Sidebar />
      <div className="p-5 font-poppins max-w-5xl mx-auto relative z-10 text-black">
        <nav className="fixed top-3 left-6 right-16 z-50" data-aos="fade-down">
          <div className="w-full max-w-1280 mx-auto px-4 py-3 flex justify-between items-center">
            <div className="flex items-center text-2xl font-bold text-black hover:text-glow transition-all duration-300">
              <img
                src="logo.png"
                alt="Innovsphere Logo"
                className="w-10 h-10 mr-3"
              />
              InnovSphere
            </div>
          </div>
        </nav>
        <p
          id="tagline"
          className="text-6xl md:text-8xl text-center font-bold bg-gradient-to-r from-orange-400 via-orange-600 to-orange-400 bg-clip-text text-transparent"
        >
          Turning Concepts
        </p>
        <p
          id="tagline"
          className="text-6xl md:text-8xl text-center font-bold bg-gradient-to-r from-orange-400 via-orange-600 to-orange-400 bg-clip-text text-transparent"
        >
          into Reality
        </p>
        <br></br>
        <p className="text-2xl md:text-5xl text-center font-bold bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 bg-clip-text text-transparent">
          Our Goal
        </p>
        <p
          id="goal"
          className="mt-4 text-lg md:text-xl leading-8 text-gray-900 font-medium"
        >
          InnovSphere bridges ideas and implementation by fostering innovation,
          collaboration, and technical excellence. We empower students through
          hands-on projects, workshops, and hackathons, helping them solve
          real-world challenges with cutting-edge tech. Our community thrives on
          knowledge-sharing, mentorship, and skill-building, turning creative
          ideas into impactful projects. Join us in shaping the future of tech,
          one line of code at a time!
        </p>
        <br />
        <br />
        <br />

        <div id="container" className="flex justify-around flex-wrap mt-5">
          <div className="card bg-orange-350 rounded-lg shadow-md overflow-hidden w-72">
            <img
              className="img w-full h-auto"
              src="https://media.licdn.com/dms/image/v2/D4D03AQG6DLX5hwQRoQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1713120490950?e=1746662400&v=beta&t=140FukK7Mrs4iyWFnBq3pAqkwBlXvzqfXTO52v92bxA"
              alt="Member Image"
            />
            <div className="card-content p-4">
              <center>
                <h2 className="text-2xl text-black-800">Sanket Palkar</h2>
                <p className="text-gray-800">President</p>
              </center>
            </div>
          </div>

          <div className="card bg-orange-350 rounded-lg shadow-md overflow-hidden w-72">
            <img
              className="img w-full h-auto"
              src="https://media.licdn.com/dms/image/v2/D5635AQFKd4xl4Ngkng/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1731788370758?e=1741842000&v=beta&t=YI6QgoTih2bBBTk1QYSjiJMJPYPGFCCEyb8grLD71B0"
              alt="Member Image"
            />
            <div className="card-content p-4">
              <center>
                <h2 className="text-2xl text-black-800">Pranit Chilbule</h2>
                <p className="text-gray-800">Tech Lead</p>
              </center>
            </div>
          </div>

          <div className="card bg-orange-350 rounded-lg shadow-md overflow-hidden w-72">
            <img
              className="img w-full h-auto"
              src="https://media.licdn.com/dms/image/v2/D4D03AQGyQdX3x5aWHA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721134516870?e=1746662400&v=beta&t=QL73gTeVypgMQJ-jddwWclcF8-kJedelgPj6Ikox0vY"
              alt="Member Image"
            />
            <div className="card-content p-4">
              <center>
                <h2 className="text-2xl text-black-800">
                  Rajnandini Dharashive
                </h2>
                <p className="text-gray-800">Tech Lead</p>
              </center>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div id="container" className="flex justify-around flex-wrap mt-5">
          <div className="card bg-orange-350 rounded-lg shadow-md overflow-hidden w-72">
            <img
              className="img w-full h-auto"
              src="https://media.licdn.com/dms/image/v2/D4D03AQEici8HY24Yhg/profile-displayphoto-shrink_800_800/B4DZT5yOWSHYAw-/0/1739357487885?e=1746662400&v=beta&t=ZAIPbtTmruTxq3lbRIaOBKSfAcRiUv8kYClW1zWpRKE"
              alt="Member Image"
            />
            <div className="card-content p-4">
              <center>
                <h2 className="text-2xl text-black-800">Vikas Doifode</h2>
                <p className="text-gray8600">Web Head </p>
              </center>
            </div>
          </div>
          <div className="card bg-orange-350 rounded-lg shadow-md overflow-hidden w-72">
            <img className="img w-full h-auto" src="#" alt="Member Image" />
            <div className="card-content p-4">
              <center>
                <h2 className="text-2xl text-black-800">Ved Thorat</h2>
                <p className="text-gray-800">AI HEAD</p>
              </center>
            </div>
          </div>
          <div className="card bg-orange-350 rounded-lg shadow-md overflow-hidden w-72">
            <img
              className="img w-full h-auto"
              src="https://media.licdn.com/dms/image/v2/D4D03AQF9YDegRs2dKw/profile-displayphoto-shrink_800_800/B4DZUKaRmMHwAc-/0/1739636415273?e=1746662400&v=beta&t=VLY9MG6cYpNZjqZWf6oah_3MVx37x27lK2S9tAUZVWs"
              alt="Member Image"
            />
            <div className="card-content p-4">
              <center>
                <h2 className="text-2xl text-black-800">Mandar Deotale</h2>
                <p className="text-gray-800">App Dev HEAD</p>
              </center>
            </div>
          </div>
        </div>
        <div id="container2" className="flex justify-around flex-wrap mt-5">
          <div className="card bg-orange-350 rounded-lg shadow-md overflow-hidden w-72">
            <img
              className="img w-full h-auto"
              src="https://media.licdn.com/dms/image/v2/D4D03AQHpe0pmWGEYSQ/profile-displayphoto-shrink_800_800/B4DZPBA4AXHUAc-/0/1734110053845?e=1746662400&v=beta&t=wHCiprPOLOzN9JMlaF94JgESyWgVhiZyFCYRsqF1nqM"
              alt="Member Image"
            />
            <div className="card-content p-4">
              <center>
                <h2 className="text-2xl text-black-800">Darshan Atkari</h2>
                <p className="text-gray-800">Cloud HEAD</p>
              </center>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />

        <div id="container3" className="flex justify-around mt-5">
          <div className="flex flex-col items-center">
            <p className="text-5xl text-black-500 font-bold">5</p>
            <p className="text-lg">Technical Domains</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-5xl text-black-500 font-bold">30+</p>
            <p className="text-lg">Members</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-5xl text-black-500 font-bold">7+</p>
            <p className="text-lg">Non-Technical Domains</p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />

        <div id="but" className="flex justify-center">
          <button
            id="but1"
            className="bg-orange-500 text-black font-bold py-2 px-4 rounded-full hover:bg-orange-600"
            onClick={() => {
              document
                .getElementById("domainOptions")
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            <span>Explore Domains</span>
          </button>
        </div>

        <div
          id="domainOptions"
          className="flex justify-center flex-wrap gap-4 mt-5"
        >
          {/* AI Domain Option */}
          <div
            className={`domain-option flex flex-col items-center justify-center bg-black border-2 border-orange-500 text-orange-500 font-bold py-3 px-6 rounded-lg cursor-pointer transition-all duration-300 hover:bg-orange-500 hover:text-black hover:scale-105 ${
              currentDomain === "ai" ? "bg-orange-500 text-black scale-105" : ""
            }`}
            data-domain="ai"
            onClick={() => setCurrentDomain("ai")}
          >
            <FaRobot className="text-3xl mb-2" />
            <span>AI</span>
          </div>

          {/* Web Dev Domain Option */}
          <div
            className={`domain-option flex flex-col items-center justify-center bg-black border-2 border-orange-500 text-orange-500 font-bold py-3 px-6 rounded-lg cursor-pointer transition-all duration-300 hover:bg-orange-500 hover:text-black hover:scale-105 ${
              currentDomain === "webdev"
                ? "bg-orange-500 text-white scale-105"
                : ""
            }`}
            data-domain="webdev"
            onClick={() => setCurrentDomain("webdev")}
          >
            <FaCode className="text-3xl mb-2" />
            <span>Web Dev</span>
          </div>

          {/* App Dev Domain Option */}
          <div
            className={`domain-option flex flex-col items-center justify-center bg-black border-2 border-orange-500 text-orange-500 font-bold py-3 px-6 rounded-lg cursor-pointer transition-all duration-300 hover:bg-orange-500 hover:text-black hover:scale-105 ${
              currentDomain === "appdev"
                ? "bg-orange-500 text-white scale-105"
                : ""
            }`}
            data-domain="appdev"
            onClick={() => setCurrentDomain("appdev")}
          >
            <FaMobileAlt className="text-3xl mb-2" />
            <span>App Dev</span>
          </div>

          {/* Cloud Domain Option */}
          <div
            className={`domain-option flex flex-col items-center justify-center bg-black border-2 border-orange-500 text-orange-500 font-bold py-3 px-6 rounded-lg cursor-pointer transition-all duration-300 hover:bg-orange-500 hover:text-black hover:scale-105 ${
              currentDomain === "cloud"
                ? "bg-orange-500 text-white scale-105"
                : ""
            }`}
            data-domain="cloud"
            onClick={() => setCurrentDomain("cloud")}
          >
            <FaCloud className="text-3xl mb-2" />
            <span>Cloud</span>
          </div>

          {/* R&D Domain Option */}
          <div
            className={`domain-option flex flex-col items-center justify-center bg-black border-2 border-orange-500 text-orange-500 font-bold py-3 px-6 rounded-lg cursor-pointer transition-all duration-300 hover:bg-orange-500 hover:text-black hover:scale-105 ${
              currentDomain === "rd" ? "bg-orange-500 text-white scale-105" : ""
            }`}
            data-domain="rd"
            onClick={() => setCurrentDomain("rd")}
          >
            <FaFlask className="text-3xl mb-2" />
            <span>R&D</span>
          </div>
        </div>

        <div
          id="domainCardContainer"
          className={`max-w-3xl mx-auto relative mt-5 ${
            currentDomain ? "" : "hidden"
          }`}
        >
          {/* Previous Button */}
          <button
            className="domain-nav-btn domain-prev absolute left-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white rounded-full p-3 hover:bg-orange-600 transition-all duration-300 shadow-lg z-10"
            aria-label="Previous"
            onClick={() => navigateCards("prev")}
          >
            ←
          </button>

          {/* Cards Wrapper */}
          <div className="domain-cards-wrapper overflow-hidden relative">
            <div
              className="domain-cards flex transition-transform duration-300 ease-in-out"
              ref={cardsEl}
            >
              {/* Example Card */}
              <div className="domain-card flex-shrink-0 w-full md:w-1/2 lg:w-1/3 p-4">
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-orange-100">
                  <h2 className="text-black font-bold text-xl mb-2">
                    Domain Name
                  </h2>
                  <p className="text-gray-600">Some description here...</p>
                </div>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button
            className="domain-nav-btn domain-next absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white rounded-full p-3 hover:bg-orange-600 transition-all duration-300 shadow-lg z-10"
            aria-label="Next"
            onClick={() => navigateCards("next")}
          >
            →
          </button>

          {/* Indicators */}
          <div
            className="domain-indicators flex justify-center mt-4 space-x-2"
            ref={indicatorsContainer}
          >
            {/* Example Indicator */}
            <div className="w-3 h-3 bg-gray-300 rounded-full cursor-pointer hover:bg-orange-500 transition-colors duration-300"></div>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <div>
          <p id="info" className="text-6xl text-center font-bold">
            Dare to Dominate
          </p>
          <br />
          <p className="text-2xl text-center">
            Newest <span className="text-orange-500 font-bold">TECH</span> club
            in college
          </p>
          <p className="text-2xl text-center">Your Gateway to Innovation!</p>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />

        <div id="container7" className="flex justify-around mt-5">
          <div className="innov-card border border-orange-500 rounded-lg p-4 w-72 shadow-lg">
            <div className="innov-card-header flex flex-col items-center">
              <img
                src="images/targeting.png"
                alt="vision"
                className="w-full h-36 object-cover rounded-t-lg"
              />
              <h2 className="text-xl font-bold">Our Vision</h2>
            </div>
            <div className="innov-card-body">
              <center>
                <p>To be the leading innovation hub fostering tech.</p>
              </center>
            </div>
          </div>

          <div className="innov-card border border-orange-500 rounded-lg p-4 w-72 shadow-lg">
            <div className="innov-card-header flex flex-col items-center">
              <img
                src="images/value.png"
                alt="values"
                className="w-full h-36 object-cover rounded-t-lg"
              />
              <h2 className="text-xl font-bold">Core Values</h2>
            </div>
            <div className="innov-card-body">
              <center>
                <p>Innovation, Collaboration, Excellence, and Impact.</p>
              </center>
            </div>
          </div>

          <div className="innov-card border border-orange-500 rounded-lg p-4 w-72 shadow-lg">
            <div className="innov-card-header flex flex-col items-center">
              <img
                src="images/idea.png"
                alt="challenges"
                className="w-full h-36 object-cover rounded-t-lg"
              />
              <h2 className="text-xl font-bold">Innovation Challenges</h2>
            </div>
            <div className="innov-card-body">
              <center>
                <p>Tackle real-world problems with innovative solutions.</p>
              </center>
            </div>
          </div>
        </div>

        <br />
        <br />
      </div>
      <footer
        className="bg-gradient-to-r  from-[#ffa472] 
    via-[#ff9c59] 
    to-[#ffa472] py-16"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3
            className="text-3xl mb-12 relative inline-block"
            data-aos="fade-down"
          >
            <span className="footer-title bg-gradient-to-r from-orange-400 via-orange-600 to-orange-400 bg-clip-text text-transparent font-bold">
              Follow Us
            </span>
          </h3>
          <div className="flex justify-center gap-12 flex-wrap">
            <a href="#" className="social-icon-wrapper group">
              <div className="social-icon instagram">
                <Instagram className="text-2xl text-white" />
              </div>
              <span className="social-tooltip">Instagram</span>
            </a>

            <a href="#" className="social-icon-wrapper group">
              <div className="social-icon facebook">
                <Facebook className="text-2xl text-white" />
              </div>
              <span className="social-tooltip">Facebook</span>
            </a>

            <a href="#" className="social-icon-wrapper group">
              <div className="social-icon linkedin">
                <Linkedin className="text-2xl text-white" />
              </div>
              <span className="social-tooltip">LinkedIn</span>
            </a>

            <a href="#" className="social-icon-wrapper group">
              <div className="social-icon youtube">
                <Youtube className="text-2xl text-white" />
              </div>
              <span className="social-tooltip">YouTube</span>
            </a>
          </div>
        </div>

        <style jsx>{`
          .social-icon-wrapper {
            position: relative;
            perspective: 1000px;
          }

          .social-icon {
            position: relative;
            width: 60px;
            height: 60px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: all 0.5s ease;
            backdrop-filter: blur(5px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            overflow: hidden;
            cursor: pointer;
          }

          .instagram:hover {
            background: radial-gradient(
              circle at 30% 107%,
              #fdf497 0%,
              #fdf497 5%,
              #fd5949 45%,
              #d6249f 60%,
              #285aeb 90%
            );
            box-shadow: 0 0 20px rgba(214, 36, 159, 0.5);
            transform: translateY(-5px) rotateY(10deg);
          }

          .facebook:hover {
            background: #4267b2;
            box-shadow: 0 0 20px rgba(66, 103, 178, 0.5);
            transform: translateY(-5px) rotateY(-10deg);
          }

          .linkedin:hover {
            background: #0077b5;
            box-shadow: 0 0 20px rgba(0, 119, 181, 0.5);
            transform: translateY(-5px) rotateY(10deg);
          }

          .youtube:hover {
            background: #ff0000;
            box-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
            transform: translateY(-5px) rotateY(-10deg);
          }

          .social-tooltip {
            position: absolute;
            bottom: -40px;
            left: 50%;
            transform: translateX(-50%) translateY(10px);
            background: rgba(255, 255, 255, 0.95);
            color: #000;
            padding: 8px 15px;
            border-radius: 5px;
            font-size: 0.875rem;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
            white-space: nowrap;
            box-shadow: 0 5px 15px rgba(234, 121, 21, 0.2);
          }

          .social-tooltip::before {
            content: "";
            position: absolute;
            top: -5px;
            left: 50%;
            transform: translateX(-50%);
            border-width: 0 5px 5px 5px;
            border-style: solid;
            border-color: transparent transparent rgba(255, 255, 255, 0.95)
              transparent;
          }

          .social-icon-wrapper:hover .social-tooltip {
            opacity: 1;
            visibility: visible;
            transform: translateX(-50%) translateY(0);
          }

          .social-icon:hover svg {
            transform: scale(1.2);
            animation: pulse 1s infinite;
          }

          @keyframes pulse {
            0% {
              transform: scale(1.2);
            }
            50% {
              transform: scale(1.1);
            }
            100% {
              transform: scale(1.2);
            }
          }

          .footer-title {
            position: relative;
            background-size: 200% auto;
            animation: shine 3s linear infinite;
          }

          @keyframes shine {
            to {
              background-position: 200% center;
            }
          }
        `}</style>
      </footer>
    </div>
  );
};

export default AboutPage;
