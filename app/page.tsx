import ThemeToggle from "./components/ThemeToggle";
import ConfettiBackground from "./components/ConfettiBackground";
import ProfileHeader from "./components/ProfileHeader";
import LinkGrid from "./components/LinkGrid";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col relative overflow-hidden dot-grid">
      {/* Theme toggle button */}
      <ThemeToggle />

      {/* Floating confetti shapes */}
      <ConfettiBackground />

      {/* Profile section */}
      <ProfileHeader />

      {/* Link cards */}
      <main className="flex-1 px-6 pt-10 pb-16 z-10 relative max-w-md md:max-w-2xl lg:max-w-4xl mx-auto w-full">
        <LinkGrid />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
