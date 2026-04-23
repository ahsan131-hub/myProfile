import { useEffect, useRef } from "react";

const TEST_IMAGES = ["/test/1.jpg", "/test/2.jpeg", "/test/3.jpg"];

/**
 * Intentionally poor accessibility for /testing-ago (shadow DOM + other issues).
 */
const TestingAgo = () => {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || host.shadowRoot) return;

    const root = host.attachShadow({ mode: "open" });
    const style = document.createElement("style");
    style.textContent = `
      :host { display: block; padding: 1rem; border: 1px dashed #888; }
      .row { display: flex; flex-wrap: wrap; gap: 0.75rem; }
      img { max-width: 180px; height: auto; }
      .shadow-a11y-bad { margin-top: 1rem; display: flex; flex-direction: column; gap: 0.75rem; }
      .shadow-low-contrast { font-size: 11px; color: #d8d8d8; background: #f0f0f0; padding: 6px; }
      .shadow-icon-btn {
        width: 36px; height: 36px; border-radius: 4px; border: 1px solid #444;
        background: #222; cursor: pointer;
      }
      .shadow-silent-link {
        display: inline-block; width: 24px; height: 24px; background: #06c; vertical-align: middle;
      }
      .shadow-fake-btn { display: inline-block; padding: 6px 10px; border: 1px solid #999; cursor: default; }
    `;
    root.appendChild(style);
    const wrap = document.createElement("div");
    wrap.className = "row";
    for (const src of TEST_IMAGES) {
      const img = document.createElement("img");
      img.src = src;
      wrap.appendChild(img);
    }
    root.appendChild(wrap);

    const shadowIssues = document.createElement("div");
    shadowIssues.className = "shadow-a11y-bad";

    const h2 = document.createElement("h2");
    h2.textContent = "Inside shadow";
    shadowIssues.appendChild(h2);
    const h4 = document.createElement("h4");
    h4.textContent = "Skipped level (no h3)";
    shadowIssues.appendChild(h4);

    const lowContrast = document.createElement("p");
    lowContrast.className = "shadow-low-contrast";
    lowContrast.textContent = "Low-contrast copy inside shadow root.";
    shadowIssues.appendChild(lowContrast);

    const iconOnlyBtn = document.createElement("button");
    iconOnlyBtn.type = "button";
    iconOnlyBtn.className = "shadow-icon-btn";
    shadowIssues.appendChild(iconOnlyBtn);

    const silentLink = document.createElement("a");
    silentLink.href = "/";
    silentLink.className = "shadow-silent-link";
    shadowIssues.appendChild(silentLink);

    const shadowInput = document.createElement("input");
    shadowInput.type = "text";
    shadowInput.placeholder = "placeholder only";
    shadowIssues.appendChild(shadowInput);

    const hiddenFocusable = document.createElement("input");
    hiddenFocusable.type = "text";
    hiddenFocusable.setAttribute("aria-hidden", "true");
    hiddenFocusable.value = "aria-hidden but still tabbable";
    shadowIssues.appendChild(hiddenFocusable);

    const fakeBtn = document.createElement("div");
    fakeBtn.className = "shadow-fake-btn";
    fakeBtn.setAttribute("role", "button");
    fakeBtn.tabIndex = 0;
    fakeBtn.textContent = "div[role=button] (no Enter/Space handler)";
    shadowIssues.appendChild(fakeBtn);

    root.appendChild(shadowIssues);
  }, []);

  return (
    <div className="min-h-screen bg-muted/40 p-6 md:p-10">
      <h1 className="text-2xl font-semibold mb-2">Testing AGO</h1>
      <h3 className="text-sm mb-6 text-muted-foreground">
        Shadow host below: images without alt, skipped headings, low contrast,
        icon-only button, silent link, unlabeled input, focusable with
        aria-hidden, and a div with role button but no key handlers.
      </h3>

      <div ref={hostRef} />

      <section className="mt-10 max-w-xl space-y-6">
        <p className="text-[11px] text-[#c0c0c0] bg-[#f5f5f5] p-3 rounded">
          Low-contrast body copy on purpose (WCAG contrast failure).
        </p>

        <div
          className="cursor-pointer rounded border p-3 text-sm underline"
          onClick={() => window.scrollTo(0, 0)}
        >
          Clickable div (no role, no tabIndex, no keyboard handler)
        </div>

        <a href="/" className="inline-flex items-center gap-1 text-primary">
          <span className="size-4 rounded-full bg-primary" />
        </a>

        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="No label"
            className="w-full border rounded px-2 py-1"
            autoFocus
          />
          <input type="password" className="w-full border rounded px-2 py-1" />
          <button type="submit" className="text-xs px-2 py-1 border rounded">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default TestingAgo;
