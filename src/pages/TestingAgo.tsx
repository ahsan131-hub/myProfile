import { useEffect, useRef } from "react";

const TestingAgo = () => {
  const shadowHostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = shadowHostRef.current;
    if (!host || host.shadowRoot) return;

    const root = host.attachShadow({ mode: "open" });
    root.innerHTML = `
      <style>
        .box { border: 1px solid #bbb; padding: 12px; margin-top: 8px; }
        .link-like { color: #2563eb; text-decoration: none; }
        .img-row { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 10px; }
        .img-row img { width: 140px; height: auto; border: 1px solid #ddd; }
      </style>
      <div class="box">
        <!-- Manual review: link relies on color only, no underline/other cue -->
        <a href="#shadow-target" class="link-like">Shadow help center</a>

        <!-- Intentional issue: images in shadow DOM without alt text -->
        <div class="img-row">
          <img src="/test/1.jpg">
          <img src="/test/2.jpeg">
          <img src="/test/3.jpg">
        </div>

        <!-- Manual review: role="switch" without accessible name -->
        <div role="switch" tabindex="0" style="margin-top:8px;">ON</div>

        <!-- Manual review: aria-hidden subtree contains focusable element -->
        <div aria-hidden="true" style="margin-top:8px;">
          <button type="button">Focusable hidden button</button>
        </div>
      </div>
    `;
  }, []);

  return (
    <main style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      {/* Manual review: incorrect language declaration for English content */}
      <section lang="es">
        <h1>Testing AGO - Manual Review Demo</h1>
        <p>This page intentionally includes accessibility problems.</p>
      </section>

      {/* Manual review: skip link points to a missing/non-focusable target */}
      <a
        href="#missing-main"
        style={{ position: "absolute", left: "8px", top: "8px" }}
      >
        Skip to content
      </a>

      <section style={{ marginTop: "20px" }}>
        <h2>Navigation</h2>
        {/* Manual review: links not visually distinguishable; color-only difference */}
        <a
          href="/work"
          style={{
            color: "#1d4ed8",
            textDecoration: "none",
            marginRight: "12px",
          }}
        >
          Work
        </a>
        <a href="/" style={{ color: "#1d4ed8", textDecoration: "none" }}>
          Home
        </a>
      </section>

      <section style={{ marginTop: "20px" }}>
        <h2>Form</h2>
        {/* Manual review: multiple labels associated to same input */}
        <label htmlFor="emailField">Email</label>
        <label htmlFor="emailField" style={{ marginLeft: "6px" }}>
          Work Email
        </label>
        <input
          id="emailField"
          type="email"
          style={{ display: "block", marginTop: "8px" }}
        />

        {/* Manual review: visible label says one thing, accessible name says another */}
        <button
          type="button"
          aria-label="Save profile"
          style={{ marginTop: "12px", display: "block" }}
        >
          Delete profile
        </button>

        {/* Manual review: ARIA role textbox missing accessible name */}
        <div
          role="textbox"
          contentEditable
          style={{ border: "1px solid #999", marginTop: "12px", padding: "8px" }}
        >
          Editable bio text
        </div>
      </section>

      <section style={{ marginTop: "20px" }}>
        <h2>Keyboard Order</h2>
        {/* Manual review: positive tabindex creates confusing keyboard order */}
        <button type="button" tabIndex={4} style={{ marginRight: "8px" }}>
          Tab priority 4
        </button>
        <button type="button" tabIndex={1} style={{ marginRight: "8px" }}>
          Tab priority 1
        </button>
        <button type="button">Natural tab order</button>
      </section>

      <section style={{ marginTop: "20px" }} aria-hidden="true">
        {/* Manual review: aria-hidden container still exposes focusable control */}
        <button type="button">Hidden but focusable action</button>
      </section>

      <section style={{ marginTop: "20px" }}>
        <h2>Media</h2>
        {/* Manual review: video has no captions track and no transcript */}
        <video controls width={320}>
          <source
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            type="video/mp4"
          />
        </video>

        {/* Manual review: audio has no transcript provided */}
        <audio controls style={{ display: "block", marginTop: "10px" }}>
          <source
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
            type="audio/mpeg"
          />
        </audio>
      </section>

      <section style={{ marginTop: "20px" }}>
        <h2>Shadow DOM block</h2>
        <div ref={shadowHostRef} />
      </section>
    </main>
  );
};

export default TestingAgo;
