export interface ActionButtonItem {
  id: string;
  label: string;
  href: string;
  color: string;
}

export interface ProfileConfig {
  name: string;
  role: string;
  avatar: {
    src: string;
    alt: string;
  };
  actions: ActionButtonItem[];
  cta: {
    label: string;
    href: string;
    color: string;
  };
  footer: {
    text: string;
  };
}

export const PROFILE: ProfileConfig = {
  name: "Utkarsh M.",
  role: "Likes to build cool stuff & solve problems",
  avatar: {
    src: "/profile.mp4",
    alt: "Avatar",
  },
  actions: [
    {
      id: "btn-download-resume",
      label: "Download Resume",
      href: "https://drive.google.com/uc?export=download&id=1tYgiCuErrmGT7md8a_4eKU6UYD9Czk4k",
      color: "var(--btn-download)",
    },
    {
      id: "btn-view-resume",
      label: "View Resume",
      href: "https://drive.google.com/file/d/1tYgiCuErrmGT7md8a_4eKU6UYD9Czk4k/view?usp=sharing",
      color: "var(--btn-view)",
    },
    {
      id: "btn-mail-me",
      label: "Mail Me",
      href: "mailto:nishcurse@zohomail.in",
      color: "var(--btn-mail)",
    },
  ],
  cta: {
    label: "Let's Build Something Great",
    href: "mailto:nishcurse@zohomail.in",
    color: "var(--accent-violet)",
  },
  footer: {
    text: "All rights reserved / nish",
  },
};
