import Image from "next/image";
import { Inter } from "next/font/google";
import Main from "@/components/Main";

import Login from "@/components/Login";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Main>
        <Login />
      </Main>
    </div>
  );
}
