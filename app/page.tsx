import TextField from "@/components/TextField";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-900 via-purple-900 to-violet-600">
      <Logo />
      <TextField />
    </main>
  );
}
