import LoreIpsun from "./components/lorem";
import StartPage from "./components/startPage";
import ResponsiveAppBar from "./components/appbar";

export default function Home() {
  return (
    // <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
    <div>
      <ResponsiveAppBar />
      <StartPage />
      <LoreIpsun />
    </div>
  );
}
