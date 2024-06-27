// import { UserButton, currentUser } from "@clerk/nextjs";
import Link from "next/link";
import { ThemeButton } from "@repo/ui/themes/theme-button";


const ControlButtons = async () => {
  // const user = await currentUser();
  //FIXME: Theme toggle button is not working
  return (
    <aside className="flex gap-2 items-center">

      {/* <Link
        href={'#'}
        className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full dark:bg-slate-950 bg-white px-3 py-1 text-sm font-medium dark:text-white text-slate-950 backdrop-blur-3xl">
          {user ? 'Dashboard' : 'Login'}
          
        </span>
      </Link> */}
      {/* <UserButton /> */}
      <ThemeButton />
    </aside>
  );
}

export default ControlButtons;
