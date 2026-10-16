export default function ConfettiBackground() {
  return (
    <>
      {/* 1. Circle top-left */}
      <div
        className="confetti top-12 left-8 w-12 h-12 md:w-16 md:h-16 rounded-full opacity-35 animate-float-v"
        style={{ backgroundColor: "var(--confetti-1)" }}
      />

      {/* 2. Outline circle top-right */}
      <div
        className="confetti top-40 right-[-20px] w-24 h-24 md:w-48 md:h-48 rounded-full border-4 opacity-40 animate-float-h"
        style={{ borderColor: "var(--confetti-2)" }}
      />

      {/* 3. Tilted square bottom-left */}
      <div
        className="confetti bottom-20 left-[-30px] w-32 h-32 md:w-64 md:h-64 rotate-45 opacity-25 rounded-lg animate-drift"
        style={{ backgroundColor: "var(--confetti-3)" }}
      />

      {/* 4. Outline circle middle-right (large screens) */}
      <div
        className="confetti hidden lg:block top-[60%] right-20 w-32 h-32 border-[6px] rounded-full opacity-25 animate-float-v"
        style={{ borderColor: "var(--confetti-4)", animationDuration: "18s" }}
      />

      {/* 5. Tilted pill bottom-right (large screens) */}
      <div
        className="confetti hidden lg:block bottom-10 right-40 w-24 h-4 rotate-12 opacity-40 rounded-full animate-slow-scale"
        style={{ backgroundColor: "var(--confetti-2)" }}
      />
    </>
  );
}
