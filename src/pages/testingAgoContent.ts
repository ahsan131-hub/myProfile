export type TestingAgoContentNode = {
  title: string;
  description: string;
  children?: Record<string, TestingAgoContentNode>;
};

export const TESTING_AGO_CONTENT: Record<string, TestingAgoContentNode> = {
  openai: {
    title: "OpenAI",
    description: "Content for #/openai on the Testing AGO page.",
    children: {
      "gpt-4": {
        title: "GPT-4",
        description: "Content for #/openai/gpt-4.",
      },
      chatgpt: {
        title: "ChatGPT",
        description: "Content for #/openai/chatgpt.",
      },
    },
  },
  claude: {
    title: "Claude",
    description: "Content for #/claude on the Testing AGO page.",
    children: {
      sonnet: {
        title: "Claude Sonnet",
        description: "Content for #/claude/sonnet.",
      },
    },
  },
};

export function resolveTestingAgoPath(segments: string[]): TestingAgoContentNode | undefined {
  let node: TestingAgoContentNode | undefined;
  let level: Record<string, TestingAgoContentNode> | undefined = TESTING_AGO_CONTENT;

  for (const segment of segments) {
    node = level?.[segment];
    if (!node) return undefined;
    level = node.children;
  }

  return node;
}

export function listTestingAgoHashRoutes(
  nodes: Record<string, TestingAgoContentNode> = TESTING_AGO_CONTENT,
  prefix = "#",
): string[] {
  const routes: string[] = [];

  for (const [slug, node] of Object.entries(nodes)) {
    const route = `${prefix}/${slug}`;
    routes.push(route);
    if (node.children) {
      routes.push(...listTestingAgoHashRoutes(node.children, route));
    }
  }

  return routes;
}
