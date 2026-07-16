import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { buildHashRoute, useHashRoute } from "@/hooks/useHashRoute";
import { listTestingAgoHashRoutes, TESTING_AGO_CONTENT } from "./testingAgoContent";
import TestingAgoHashContent from "./TestingAgoHashContent";

/** Free photos via Lorem Picsum (https://picsum.photos) — unique seed per load */
const SCROLL_BATCH_SIZE = 2;

function getFreeScrollImageUrl(loadIndex: number): string {
  return `https://picsum.photos/seed/testing-ago-${loadIndex}/300/200`;
}

const TestingAgo = () => {
  const hashSegments = useHashRoute();
  const shadowHostRef = useRef<HTMLDivElement>(null);
  const scrollSentinelRef = useRef<HTMLDivElement>(null);
  const nextImageIndexRef = useRef(0);
  const [scrollLoadedImages, setScrollLoadedImages] = useState<string[]>([]);

  useEffect(() => {
    const sentinel = scrollSentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0]?.isIntersecting) return;

        setScrollLoadedImages((prev) => {
          const next: string[] = [];
          for (let i = 0; i < SCROLL_BATCH_SIZE; i++) {
            const idx = nextImageIndexRef.current;
            nextImageIndexRef.current += 1;
            next.push(getFreeScrollImageUrl(idx));
          }
          return [...prev, ...next];
        });
      },
      { root: null, rootMargin: "120px", threshold: 0 },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

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

        <!-- Intentional issue: images in shadow DOM with empty alt text -->
        <div class="img-row">
          <img src="/test/1.jpg" alt="">
          <img src="/test/2.jpeg" alt="">
          <img src="/test/3.jpg" alt="">
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
        <a
          href="/"
          style={{ color: "#1d4ed8", textDecoration: "none", marginRight: "12px" }}
        >
          Home
        </a>
        <Link to="/testing-ago" style={{ color: "#1d4ed8", textDecoration: "none" }}>
          Testing AGO
        </Link>
      </section>

      <section style={{ marginTop: "20px" }}>
        <h2>Hash routes</h2>
        <p style={{ fontSize: "14px", color: "#555", marginBottom: "8px" }}>
          Content changes from the URL hash on <code>/testing-ago</code> — e.g.{" "}
          <code>/testing-ago#/openai</code> or <code>/testing-ago#/claude</code>.
        </p>
        <nav style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {Object.entries(TESTING_AGO_CONTENT).map(([slug, node]) => (
            <a
              key={slug}
              href={buildHashRoute([slug])}
              style={{ color: "#1d4ed8", textDecoration: "none" }}
            >
              {node.title}
            </a>
          ))}
        </nav>
        {hashSegments.length > 0 && (
          <TestingAgoHashContent hashSegments={hashSegments} />
        )}
        {hashSegments.length === 0 && (
          <p style={{ fontSize: "14px", color: "#555", marginTop: "12px" }}>
            Try: {listTestingAgoHashRoutes().slice(0, 3).join(", ")}.
          </p>
        )}
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

        {/* Manual review: ARIA role textbox missing accessible name */}
        <div
          role="textbox"
          contentEditable
          style={{
            border: "1px solid #999",
            marginTop: "12px",
            padding: "8px",
          }}
        >
          Editable bio text
        </div>
      </section>

      <section style={{ marginTop: "20px" }}>
        <h2>Label mismatch</h2>
        <p style={{ fontSize: "14px", color: "#555", marginBottom: "8px" }}>
          axe rule:{" "}
          <a href="https://dequeuniversity.com/rules/axe/4.8/label-content-name-mismatch">
            label-content-name-mismatch
          </a>{" "}
          (WCAG 2.5.3 Label in Name)
        </p>

        {/* Intentional issue (label-content-name-mismatch): visible text is
            "Delete profile" but aria-label overrides to "Save profile". */}
        <button
          type="button"
          aria-label="Save profile"
          style={{ marginRight: "12px" }}
        >
          Delete profile
        </button>

        {/* Intentional issue (label-content-name-mismatch): visible text "Send"
            is not contained in accessible name "Submit form". */}
        <button type="button" aria-label="Submit form">
          Send
        </button>

        {/* Intentional issue (label-content-name-mismatch): visible label text
            "Phone" is overridden by aria-label "Mobile number". */}
        <div style={{ marginTop: "12px" }}>
          <label htmlFor="phoneField">Phone</label>
          <input
            id="phoneField"
            type="tel"
            aria-label="Mobile number"
            style={{ display: "block", marginTop: "8px" }}
          />
        </div>
      </section>

      <section style={{ marginTop: "20px" }}>
        <h2>Heading order</h2>
        <p style={{ fontSize: "14px", color: "#555", marginBottom: "8px" }}>
          Intentionally disturbed heading hierarchy for accessibility testing.
        </p>
        {/* Manual review: second h1 after h2 sections — multiple/out-of-order h1 */}
        <h1>Disturbed heading — second h1</h1>
        {/* Manual review: skipped heading level (h1 → h4) */}
        <h4>Skipped levels after h1</h4>
        {/* Manual review: h3 appears after h4 (descending then ascending) */}
        <h3>Out-of-sequence h3</h3>
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
        <h2>Redundant Alt Text</h2>
        <p style={{ fontSize: "14px", color: "#555", marginBottom: "8px" }}>
          axe rule:{" "}
          <a href="https://dequeuniversity.com/rules/axe/4.8/image-redundant-alt">
            image-redundant-alt
          </a>
        </p>

        {/* Intentional issue (image-redundant-alt): img alt text duplicates the
            link text right next to it inside the same <a>, so a screen reader
            announces "Home Page Home Page". */}
        <a
          href="/"
          style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}
        >
          <img
            src="/test/1.jpg"
            alt="Home Page"
            style={{ width: "24px", height: "24px" }}
          />
          Home Page
        </a>

        {/* Intentional issue (image-redundant-alt): img alt text duplicates the
            button's visible text inside the same <button>. */}
        <button
          type="button"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            marginLeft: "12px",
          }}
        >
          <img
            src="/test/2.jpeg"
            alt="Submit form"
            style={{ width: "24px", height: "24px" }}
          />
          Submit form
        </button>

        {/* Intentional issue: alt text is just the uninformative filename */}
        <img
          src="/test/3.jpg"
          alt="3.jpg"
          style={{ width: "24px", height: "24px", marginLeft: "12px" }}
        />
      </section>

      <section style={{ marginTop: "20px" }}>
        {/* Intentional issue: light DOM images with empty alt text */}
        <div style={{ display: "flex", gap: "8px", marginBottom: "10px" }}>
          <img
            src="/test/1.jpg"
            alt=""
            style={{ width: "120px", height: "auto" }}
          />
          <img
            src="/test/2.jpeg"
            alt=""
            style={{ width: "120px", height: "auto" }}
          />
          <img
            src="/test/3.jpg"
            alt=""
            style={{ width: "120px", height: "auto" }}
          />
        </div>
        <h2>Shadow DOM block</h2>
        <div ref={shadowHostRef} />
      </section>

      {/* Spacer keeps scroll-loaded images below the fold on first paint */}
      <div style={{ height: "70vh" }} aria-hidden="true" />

      <section style={{ marginTop: "32px" }}>
        <h2>Dynamic images (scroll to load)</h2>
        <p style={{ fontSize: "14px", color: "#555", marginBottom: "12px" }}>
          Images below are injected when you scroll near the bottom (free photos
          from{" "}
          <a href="https://picsum.photos" style={{ color: "#1d4ed8" }}>
            Lorem Picsum
          </a>
          , not in the initial HTML).
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
            minHeight: scrollLoadedImages.length ? undefined : "40px",
          }}
        >
          {scrollLoadedImages.map((src, index) => (
            <img
              key={`scroll-${index}-${src}`}
              src={src}
              alt=""
              loading="lazy"
              style={{
                width: "120px",
                height: "auto",
                border: "1px solid #ccc",
              }}
            />
          ))}
        </div>

        <img
          src="/test/1.jpg"
          alt=""
          loading="lazy"
          style={{
            width: "40px",
            height: "40px",
            border: "1px solid #ccc",
          }}
        />
        <div
          ref={scrollSentinelRef}
          style={{ height: "1px", marginTop: "24px" }}
          aria-hidden="true"
        />
      </section>
    </main>
  );
};

export default TestingAgo;
