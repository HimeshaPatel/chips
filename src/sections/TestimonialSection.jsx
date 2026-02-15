import { useRef } from "react";
import { cards } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const TestimonialSection = () => {
  const vdRef = useRef([]);
  const isMobilePhone = useMediaQuery({ query: "(max-width: 767px)" });

  useGSAP(() => {
    // Skip all GSAP animations on mobile phones
    if (isMobilePhone) return;

    gsap.set(".testimonials-section", {
      marginTop: "-140vh",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "top bottom",
        end: "200% top",
        scrub: true,
      },
    });

    tl.to(".testimonials-section .first-title", {
      xPercent: 70,
    })
      .to(
        ".testimonials-section .sec-title",
        {
          xPercent: 25,
        },
        "<"
      )
      .to(
        ".testimonials-section .third-title",
        {
          xPercent: -50,
        },
        "<"
      );

    const pinTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".testimonials-section",
        start: "10% top",
        end: "200% top",
        scrub: 1.5,
        pin: true,
      },
    });

    pinTl.from(".vd-card", {
      yPercent: 150,
      stagger: 0.2,
      ease: "power1.inOut",
    });
  }, [isMobilePhone]);

  const handlePlay = (index) => {
    const video = vdRef.current[index];
    video.play();
  };

  const handlePause = (index) => {
    const video = vdRef.current[index];
    video.pause();
  };

  const handleMobilePlay = (index) => {
    // Pause all other videos
    vdRef.current.forEach((v, i) => {
      if (v && i !== index) v.pause();
    });
    const video = vdRef.current[index];
    if (video) video.play();
  };

  const handleMobilePause = (index) => {
    const video = vdRef.current[index];
    if (video) video.pause();
  };

  // Mobile phone layout - completely separate from GSAP
  if (isMobilePhone) {
    return (
      <section className="testimonials-section-mobile">
        <div className="mobile-testimonial-title">
          <h1 className="text-black">What's</h1>
          <h1 className="text-light-brown">Everyone</h1>
          <h1 className="text-black">Talking</h1>
        </div>

        <div className="mobile-cards">
          {cards.map((card, index) => (
            <div
              key={index}
              className="mobile-vd-card"
              onMouseEnter={() => handleMobilePlay(index)}
              onMouseLeave={() => handleMobilePause(index)}
              onTouchStart={() => handleMobilePlay(index)}
              onTouchEnd={() => handleMobilePause(index)}
            >
              <video
                ref={(el) => (vdRef.current[index] = el)}
                src={card.src}
                playsInline
                muted
                loop
                className="size-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    );
  }

  // Desktop / iPad layout with GSAP animations
  return (
    <section className="testimonials-section">
      <div className="absolute size-full flex flex-col items-center pt-[25vw] sm:pt-[10vw] md:pt-[5vw]">
        <h1 className="text-black first-title">What's</h1>
        <h1 className="text-light-brown sec-title">Everyone</h1>
        <h1 className="text-black third-title">Talking</h1>
      </div>

      <div className="pin-box">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`vd-card ${card.translation} ${card.rotation}`}
            onMouseEnter={() => handlePlay(index)}
            onMouseLeave={() => handlePause(index)}
          >
            <video
              ref={(el) => (vdRef.current[index] = el)}
              src={card.src}
              playsInline
              muted
              loop
              className="size-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
