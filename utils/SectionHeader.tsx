
import { Reveal } from "./Reveal";

interface Props {
  title: string;
  dir?: "l" | "r";
}

export const SectionHeader = ({ title, dir = "r" }: Props) => {
  return (
    <div
      className="flex items-center gap-[2.4rem] mb-[2.4rem]"
      style={{ flexDirection: dir === "r" ? "row" : "row-reverse" }}
    >
      <div className="w-[100%] h-[1px] bg-white opacity-30  " />
      <h3 className=" text-lg">
        <Reveal>
          <span className=" font-black text-end text-5xl text-rblue">
            {title}
            <span>.</span>
          </span>
        </Reveal>
      </h3>
    </div>
  );
};


