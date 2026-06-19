import { useEffect, useState } from "react";

export function parseHashRoute(hash: string): string[] {
  return hash.replace(/^#\/?/, "").split("/").filter(Boolean);
}

export function buildHashRoute(segments: string[]): string {
  if (segments.length === 0) return "#/";
  return `#/${segments.join("/")}`;
}

function getHashSegments(): string[] {
  return parseHashRoute(window.location.hash);
}

export function useHashRoute(): string[] {
  const [segments, setSegments] = useState(getHashSegments);

  useEffect(() => {
    const onHashChange = () => setSegments(getHashSegments());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return segments;
}
