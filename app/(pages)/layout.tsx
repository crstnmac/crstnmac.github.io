import { Footer, Header, Box } from "components";

interface IWebLayout {
  children?: React.ReactNode;
}

export default function WebLayout({ children }: IWebLayout) {
  return (
    <Box fullSize className="flex flex-col h-screen justify-between">
      <Header />
      <main className="flex-1 md:mx-8 py-3">{children}</main>
      <Footer />
    </Box>
  );
}
