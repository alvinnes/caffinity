import { ArrowRight, Book } from "@phosphor-icons/react";
import PrimaryButton from "../UI/PrimaryButton";
import { ReactNode } from "react";
import SubTitle from "../UI/SubTitle";
import SecondaryBtn from "../UI/SecondaryBtn";

const SectionReason = () => {
  const classBefore: string =
    "before:size-full before:absolute before:top-0 before:left-0 before:bg-linear-to-t before:from-black/80 before:via-black/50 before:to-black/10";
  return (
    <section
      id="reservasi"
      className={`${classBefore} relative flex flex-col items-center justify-around bg-slate-300 bg-[url(/img/bg-1.jpg)] bg-cover bg-fixed bg-center py-35 text-white sm:w-full sm:flex-row sm:items-start`}
    >
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
    </section>
  );
};

const ButtonReservation = () => {
  return (
    <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
      <PrimaryButton
        text="Pesan Meja"
        link="#"
        icon={<Book size={23} />}
        customStyle="rounded-sm py-2.5 bg-slate-800"
      />
      <SecondaryBtn
        text="Hubungi Kami"
        icon={<ArrowRight size={20} />}
        link="#contact"
      />
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
