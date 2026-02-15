// Footer Section

const FooterSection = () => {
  return (
    <section className="footer-section">
      {/* Top hero area - video background with title and social */}
      <div className="footer-hero">
        <video
          src="/videos/splash.mp4"
          autoPlay
          playsInline
          muted
          loop
          className="footer-video"
        />

        <div className="footer-hero-content">
          <div className="overflow-hidden">
            <h1 className="general-title text-center text-milk py-5">
              #CRUNCHRESPONSIBLY
            </h1>
          </div>

          <div className="footer-social">
            <div className="social-btn">
              <img src="./images/yt.svg" alt="" />
            </div>
            <div className="social-btn">
              <img src="./images/insta.svg" alt="" />
            </div>
            <div className="social-btn">
              <img src="./images/tiktok.svg" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom area - links, newsletter, copyright */}
      <div className="footer-bottom">
        <div className="footer-content">
          <div className="footer-links">
            <div>
              <p>Our Flavors</p>
            </div>
            <div>
              <p>Crunch Club</p>
              <p>Find a Store</p>
              <p>Wholesale</p>
            </div>
            <div>
              <p>About Us</p>
              <p>Contact</p>
              <p>FAQ</p>
            </div>
          </div>

          <div className="footer-newsletter">
            <p>
              Get Exclusive Early Access and Stay Informed About Product
              Updates, Events, and More!
            </p>
            <div className="flex justify-between items-center border-b border-[#D9D9D9] py-5 mt-10">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full placeholder:font-sans placeholder:text-[#999999]"
              />
              <img src="/images/arrow.svg" alt="arrow" />
            </div>
          </div>
        </div>

        <div className="copyright-box">
          <p>Copyright © 2025 Potato Chips - All Rights Reserved</p>
          <div className="flex items-center gap-7">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
