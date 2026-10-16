import type { IconType } from "react-icons";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import {
  SiCodeforces,
  SiLeetcode,
  SiCodechef,
} from "react-icons/si";
import { LuCode } from "react-icons/lu";

export interface LinkItem {
  id: string;
  title: string;
  description: string;
  href: string;
  Icon: IconType;
  iconBg: string;
  darkIconBg?: string;
  darkIconColor?: string;
}

export const links: LinkItem[] = [
  {
    id: "github",
    title: "GitHub",
    description: "Cooking something new almost everyday",
    href: "https://github.com/nishcurse",
    Icon: FaGithub,
    iconBg: "#1E293B",
    darkIconBg: "#F8FAFC",
    darkIconColor: "#1E293B",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    description: "Connect with me over here!",
    href: "https://www.linkedin.com/in/utkarshmudgalnish/",
    Icon: FaLinkedin,
    iconBg: "#0A66C2",
    darkIconColor: "#FFFFFF",
  },
  {
    id: "twitter",
    title: "Twitter",
    description: "i want to active here but too lazy..",
    href: "https://x.com/nishcurse",
    Icon: FaTwitter,
    iconBg: "var(--link-twitter-bg)",
    darkIconColor: "var(--link-twitter-text)",
  },
  {
    id: "codeforces",
    title: "Codeforces",
    description: "Specialist (max. 1522) , if there were no cheaters , easy expert",
    href: "https://codeforces.com/profile/nish",
    Icon: SiCodeforces,
    iconBg: "var(--link-codeforces-bg)",
    darkIconColor: "var(--link-codeforces-text)",
  },
  {
    id: "leetcode",
    title: "LeetCode",
    description: "Knight (max. 2003)",
    href: "https://leetcode.com/u/nishcurse/",
    Icon: SiLeetcode,
    iconBg: "var(--link-leetcode-bg)",
    darkIconColor: "var(--link-leetcode-text)",
  },
  {
    id: "codechef",
    title: "CodeChef",
    description: "Almost 4 star (max. 1796)",
    href: "https://www.codechef.com/users/nishcurse",
    Icon: SiCodechef,
    iconBg: "var(--link-codechef-bg)",
    darkIconColor: "var(--link-codechef-text)",
  },
];

/** AtCoder renders full-width below the main grid */
export const fullWidthLink: LinkItem = {
  id: "atcoder",
  title: "AtCoder",
  description: "best problemset for learning (max. 1086)",
  href: "https://atcoder.jp/users/nishcurse",
  Icon: LuCode,
  iconBg: "#1E293B",
  darkIconBg: "#F8FAFC",
  darkIconColor: "#1E293B",
};
