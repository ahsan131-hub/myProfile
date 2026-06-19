import { buildHashRoute } from "@/hooks/useHashRoute";
import {
  listTestingAgoHashRoutes,
  resolveTestingAgoPath,
  type TestingAgoContentNode,
} from "./testingAgoContent";

type TestingAgoHashContentProps = {
  hashSegments: string[];
};

const linkStyle = { color: "#1d4ed8", textDecoration: "none" };

function ChildLinks({
  baseSegments,
  childNodes,
}: {
  baseSegments: string[];
  childNodes: Record<string, TestingAgoContentNode>;
}) {
  return (
    <nav style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "12px" }}>
      {Object.entries(childNodes).map(([slug, child]) => (
        <a
          key={slug}
          href={buildHashRoute([...baseSegments, slug])}
          style={linkStyle}
        >
          {child.title}
        </a>
      ))}
    </nav>
  );
}

const TestingAgoHashContent = ({ hashSegments }: TestingAgoHashContentProps) => {
  const hashRoute = buildHashRoute(hashSegments);
  const content = resolveTestingAgoPath(hashSegments);

  if (!content) {
    return (
      <section style={{ marginTop: "20px" }}>
        <h2>Unknown hash route</h2>
        <p>
          No content is configured for <code>{hashRoute}</code>.
        </p>
        <p style={{ fontSize: "14px", color: "#555" }}>
          Available hash routes: {listTestingAgoHashRoutes().join(", ")}.
        </p>
        <a href="#/" style={linkStyle}>
          Back to /testing-ago
        </a>
      </section>
    );
  }

  return (
    <section style={{ marginTop: "20px" }}>
      <p style={{ fontSize: "14px", color: "#555", marginBottom: "8px" }}>
        Hash URL: <code>{hashRoute}</code>
      </p>
      {hashSegments.length > 1 && (
        <p style={{ fontSize: "14px", color: "#555", marginBottom: "8px" }}>
          Segments: {hashSegments.join(" → ")}
        </p>
      )}
      <h2>{content.title}</h2>
      <p>{content.description}</p>
      {content.children && (
        <>
          <p style={{ fontSize: "14px", color: "#555", marginTop: "12px" }}>
            Go deeper:
          </p>
          <ChildLinks baseSegments={hashSegments} childNodes={content.children} />
        </>
      )}
    </section>
  );
};

export default TestingAgoHashContent;
