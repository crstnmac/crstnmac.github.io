import { navigation } from "config";
import { Box, Link } from "components";

const nav = navigation.footerNav;

export default function Footer() {
  return (
    <Box fullSize as="footer" className="mx-0">
      <hr className="mt-0 border-dark" />
      <Box
        as="div"
        className="flex flex-col py-6 sm:px-6 lg:px-2 md:flex-row md:items-center md:justify-between"
      >
        {nav.length && (
          <div className="flex justify-center space-x-6 md:order-2">
            {nav.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                animatedUnderline
                className="font-medium dark:text-black-200"
              >
                {item.title}
              </Link>
            ))}
          </div>
        )}
        <div className="mt-8 flex flex-col items-center justify-center font-medium md:order-1 md:mt-0 md:flex-row md:flex-nowrap md:justify-start">
          <p className="ml-0 mt-4 md:mt-0 md:ml-2 dark:text-black-200">
            &copy; 2023 &mdash;{" "}
          </p>
          &nbsp;
          <p className="dark:text-black-200">Design and development by </p>
          &nbsp;
          <div className="hover:animate-jelly">
            <Link
              href="https://github.com/crstnmac"
              className="font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-yellow-300 via-purple-400 to-green-300 "
            >
              crstnmac
            </Link>
          </div>
        </div>
      </Box>
    </Box>
  );
}
