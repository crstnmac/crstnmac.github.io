import { Box, SnippetSection, AboutMe } from "components";
import { allSnippets } from "contentlayer/generated";
import { compareDesc as compare } from "date-fns";
export default function SnippetsPage() {
  const snippets = allSnippets
    .filter((snippet) => snippet.published)
    .sort((a, b) => {
      return compare(new Date(a.date), new Date(b.date));
    });

  return (
    <Box as="section" className="h-full flex flex-col justify-between">
      <SnippetSection snippets={snippets} />
      <Box fullSize className="mt-auto mb-0 mx-0">
        <AboutMe />
      </Box>
    </Box>
  );
}
