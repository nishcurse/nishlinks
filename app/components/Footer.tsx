import { PROFILE } from "../constants";

export default function Footer() {
  return (
    <footer className="shrink-0 pb-10 px-6 z-10 text-center">
      <p className="text-xs md:text-sm font-bold uppercase text-[var(--text-muted)] tracking-widest opacity-60">
        {PROFILE.footer.text}
      </p>
    </footer>
  );
}
