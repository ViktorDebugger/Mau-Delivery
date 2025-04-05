import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const Profile = () => {
  return (
    <main className="flex h-full justify-center items-center p-4">
      <div className="bg-[#FAB735] rounded-4xl px-[180px] pb-[90px] pt-[20px] max-w-[700px] h-[570px]">
        <Link href="/" className="absolute left-8 top-8 bg-[#F2680FB2] hover:bg-[#f26a0fdd] transition duration-300 ease-in-out w-8 h-8 rounded-4xl flex justify-center items-center cursor-pointer">
          <ArrowLeft />
        </Link>
        <h1 className="font-karantina text-[100px] text-center">ACCOUNT</h1>
        <div className="mt-[100px] flex flex-col gap-[50px] w-full">
          <Link href="/sign-in" className="font-katibeh text-[30px] bg-[#F2680FB2] cursor-pointer rounded-[50px] px-[120px] pb-[20px] pt-[5px] hover:bg-[#F2680F] transition duration-300 ease-in-out">
            <span>Sign in</span>
          </Link>
          <Link href="/sign-up" className="font-katibeh text-[30px] bg-[#F2680FB2] cursor-pointer rounded-[50px] px-[120px] pb-[20px] pt-[5px] hover:bg-[#F2680F] transition duration-300 ease-in-out">
            <span>Sign up</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Profile;
