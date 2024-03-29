import Image from "next/image";
import { DoughnutChart } from "@/components";
import { BarChartCard } from "@/components/BarChartCard";
import { DashCard1 } from "@/components/DashCard1";
import { DashCard2 } from "@/components/DashCard2";
import { BalanceCard } from "@/components/BalanceCard";
import { RecordsCard } from "@/components/RecordsCard";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const handleJump = async (e) => {
    router.push("/records");
  };
  return (
    <div className="w-[1440px] h-fit flex flex-col items-center m-auto bg-slate-200">
      <div className="w-screen flex justify-between items-center px-[380px] py-5 bg-white mb-[25px]">
        <div className="flex items-center gap-7 ">
          <Image src="/headerlogo.png" alt="logo" width={40} height={40} />
          <p className="heading-4 font-bold cursor-pointer">Dashboard</p>
          <p onClick={handleJump} className="cursor-pointer">
            Records
          </p>
        </div>
        <div className="flex items-center gap-5">
          <button className="btn btn-sm h-[35px] text-[15px] rounded-full bg-[#0166FF] font-semibold text-white px-5">
            + Record
          </button>
          <Image src="/Avatar.png" alt="avatar" width={40} height={40} />
        </div>
      </div>
      <div className="bg-slate-200 h-fit w-full py-10 flex flex-col gap-10 items-center">
        <div className="flex justify-between w-screen px-[380px] gap-5">
          <BalanceCard ammount={"10,000,00"} />
          <DashCard1
            incomeAmmount={"1,200,000₮"}
            incomePercent={"32% from last month"}
          />

          <DashCard2
            incomeAmmount={"-1,200,000₮"}
            incomePercent={"32% from last month"}
          />
        </div>
        <div className="flex h-fit w-screen px-[380px] justify-between gap-5">
          <BarChartCard />
          <DoughnutChart />
        </div>
        <div className="w-screen px-[380px] h-fit">
          <RecordsCard />
        </div>
      </div>
    </div>
  );
}
