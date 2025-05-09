import { ArrowRight, Book } from "@phosphor-icons/react";
import PrimaryButton from "../UI/PrimaryButton";
import { ReactNode } from "react";
import SubTitle from "../UI/SubTitle";

const SectionReason = () => {
  const classBefore: string =
    "before:size-full before:absolute before:top-0 before:left-0 before:bg-linear-to-t before:from-black/80 before:via-black/50 before:to-black/10";
  return (
    <section
      className={`${classBefore} relative flex flex-col items-center justify-around bg-slate-300 bg-[url(/img/bg-1.jpg)] bg-cover bg-center py-20 text-white sm:w-full sm:flex-row sm:items-start`}
    >
      {/* <div className="flex w-full absolute z-8 justify-around"> */}
      <div className="relative z-4 flex w-11/12 flex-col gap-3 sm:w-sm">
        <SubTitle text="Reservasi" />
        <h2 className="font-outfit text-6xl font-semibold">Jam Kerja</h2>
        <p className="my-8 text-sm font-light">
          Datang kapan pun kamu butuh tempat nyaman untuk bekerja, bersantai,
          atau sekadar menyeruput inspirasi.
        </p>
        <ButtonReservation />
      </div>
      <div className="relative z-4 mt-10 flex h-70 w-11/12 flex-col items-center justify-center rounded-md bg-slate-800 text-white sm:w-sm">
        <WorkHours day="Minggu - Kamis">
          09 <span className="mx-1 text-amber-600">:</span> 00 - 22{" "}
          <span className="mx-1 text-amber-600">:</span> 00
        </WorkHours>
        <WorkHours day="Jum'at - Sabtu">
          09 <span className="mx-1 text-amber-600">:</span> 00 - 22{" "}
          <span className="mx-1 text-amber-600">:</span> 00
        </WorkHours>
      </div>
      {/* </div> */}
    </section>
  );
};

const ButtonReservation = () => {
  return (
    <div className="flex items-start sm:items-center gap-2 flex-col sm:flex-row">
      <PrimaryButton
        text="Pesan Meja"
        link="#"
        icon={<Book size={23} />}
        bgColor="rounded-sm py-2.5 bg-slate-800"
      />
      <button
        className={`relative flex w-fit items-center gap-2 rounded-sm px-4 py-2.5`}
      >
        Hubungi Kami
        <ArrowRight size={20} />
      </button>
    </div>
  );
};

interface WorkHours {
  children: ReactNode;
  day: string;
}

const WorkHours = (props: WorkHours) => {
  const { children, day } = props;
  return (
    <>
      <h3 className="my-6 text-lg font-bold tracking-[0.2rem] uppercase drop-shadow-sm">
        {day}
      </h3>
      <p>{children}</p>
    </>
  );
};

export default SectionReason;
