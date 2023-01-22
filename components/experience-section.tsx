import { PropsWithChildren } from "react";
import { Box, Link, Picture } from "components";
import { t } from "lib";

interface IInfo {
  place?: string;
  date?: string;
  topic?: string;
  event?: string;
  eventlink?: string;
  description?: string;
  active?: string;
  gif?: string;
  img?: string;
  youtube?: string;
  learnt?: string;
  about?: string;
}

interface IExperience {
  name: string;
  info: IInfo[];
}

interface IExperiences {
  experiences: IExperience[];
}

export default function Experience(props: PropsWithChildren<IExperiences>) {
  const { children, experiences } = props;
  return (
    <Box as="section" className="px-0 w-full">
      {experiences.map((exp, id) => (
        <div className="mb-20" key={id}>
          <div className="flex items-center justify-start">
            <div className="flex items-center">
              <p className="font-semibold text-base">{exp.name}</p>
              {/* <span className="bg-gray-300 text-black-900 py-0.5 px-2 text-xs font-semibold rounded ml-2 sm:ml-4">
                2yrs
              </span> */}
            </div>
          </div>
          <div className=" mt-6 rounded-2xl bg-brand-100  dark:bg-brand-800 bg-clip-border p-3 ">
            {exp.info.map((exp, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 break-words bg-brand-100 dark:bg-brand-800 group"
              >
                <div className="relative col-span-3  py-4 sm:px-5 text-right flex flex-row justify-between">
                  <p>{exp.date}</p>

                  <div className="w-20 h-20 rounded-full absolute -right-[40.25px] top-1/2 -translate-y-1/2 border-brand-400 border-[2px] hidden sm:block">
                    <Picture
                      className={t(
                        "w-full h-full rounded-full absolute top-1/2 -translate-y-1/2 bg-brand-100 border-[3px] hidden sm:block",
                        exp.active ? "border-brand-700 border-dashed" : ""
                      )}
                      alt=""
                      width={100}
                      height={100}
                      src={
                        exp.img ? `/${exp.img}.png` : `/${exp.gif}.gif` || ""
                      }
                    />
                  </div>
                </div>
                <div className="relative col-span-9 flex justify-center sm:justify-start sm:items-center flex-col sm:flex-row py-4 pl-4 ml-8 sm:px-5">
                  <div>
                    <div className="flex items-center mb-0.5">
                      <p className="text-primary font-semibold text-sm mr-2">
                        {exp.topic}
                      </p>
                    </div>
                    <div className="capitalize text-gray-500 text-sm font-medium flex items-center flex-wrap">
                      <Link
                        href={exp.eventlink || ""}
                        className="text-brand-500 dark:text-brand-300 focus:outline-none cursor-pointer text-sm font-semibold max-w-max"
                        animatedUnderline
                      >
                        {exp.event}
                      </Link>
                      {exp.place ? (
                        <span className="ml-1 font-normal text-brand-900 dark:text-brand-400">
                          {"• " + exp.place}
                        </span>
                      ) : null}
                    </div>
                    <div>
                      <div className="text-gray mt-2 text-xs sm:text-sm paragraph-clamp">
                        {exp.about}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </Box>
  );
}
