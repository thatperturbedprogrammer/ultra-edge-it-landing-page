import "./CallToAction.css";
export default function CallToAction({
  callToActionText,
  callToActionSubText,
}) {
  return (
    <>
      <div class="cta">
        <div class="cta-content">
          <h1>Transform Your Business with Cutting-Edge IT Solutions</h1>
          <p>
            Whether you need a stunning website, seamless software integration,
            or a scalable digital strategy, we’ve got you covered. Let’s build
            the future of your business—together.
          </p>
          <div class="cta-buttons">
            <a href="#services" class="cta-button">
              Get a Free Consultation
            </a>
            <a href="#portfolio" class="cta-secondary">
              See Our Work
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
