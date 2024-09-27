import { Feature } from "@/types/feature";
import Image from "next/image";

const featuresData: Feature[] = [
  // {
  //   id: 1,
  //   icon: (
  //     <svg
  //       width="80"
  //       height="80"
  //       viewBox="0 0 64 64"
  //       fill="currentColor"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <path
  //         d="M32 2C15.4 2 2 6.4 2 12V48C2 53.6 15.4 58 32 58C48.6 58 62 53.6 62 48V12C62 6.4 48.6 2 32 2ZM32 54C17.7 54 6 49.7 6 44V40C10.5 42.1 19.2 44 32 44C44.8 44 53.5 42.1 58 40V44C58 49.7 46.3 54 32 54ZM32 40C17.7 40 6 35.7 6 30V26C10.5 28.1 19.2 30 32 30C44.8 30 53.5 28.1 58 26V30C58 35.7 46.3 40 32 40ZM32 26C17.7 26 6 21.7 6 16V12C6 10.7 9.8 8.4 16.3 6.9C19.5 6.1 23.2 6 26.6 6C30.4 6 34.5 6.3 37.5 6.9C44.2 8.4 48 10.7 48 12V16C48 21.7 36.3 26 32 26Z"
  //       />
  //       <path
  //         d="M32 20C28.1 20 25 23.1 25 27C25 30.9 28.1 34 32 34C35.9 34 39 30.9 39 27C39 23.1 35.9 20 32 20ZM32 30C30.3 30 29 28.7 29 27C29 25.3 30.3 24 32 24C33.7 24 35 25.3 35 27C35 28.7 33.7 30 32 30ZM32 36C25.9 36 21 40.9 21 47V50H43V47C43 40.9 38.1 36 32 36ZM39 47H25V47C25 42.6 28.6 39 32 39C35.4 39 39 42.6 39 47Z"
  //       />
  //     </svg>
  //   ),
  //   title: "Identity Management and  National Databases",
  //   paragraph:
  //     "",
  // },
  // {
  //   id: 1,
  //   icon: (
  //     <svg
  //       width="80"
  //       height="80"
  //       viewBox="0 0 64 64"
  //       fill="currentColor"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <rect x="10" y="8" width="44" height="56" rx="4" ry="4" stroke="currentColor" strokeWidth="2" fill="none" />
  //       <circle cx="32" cy="26" r="8" stroke="currentColor" strokeWidth="2" fill="none" />
  //       <path d="M24 26C24 22.7 27.3 20 32 20C36.7 20 40 22.7 40 26" stroke="currentColor" strokeWidth="2" fill="none" />
  //       <line x1="24" y1="34" x2="40" y2="34" stroke="currentColor" strokeWidth="2" />
  //       <line x1="24" y1="38" x2="40" y2="38" stroke="currentColor" strokeWidth="2" />
  //       <line x1="24" y1="42" x2="40" y2="42" stroke="currentColor" strokeWidth="2" />
  //     </svg>
  //   ),
  //   title: "Passports, IDs, Driver Licenses, Visas and Other Secure Documents",
  //   paragraph:
  //     "",
  // },
  // {
  //   id: 1,
  //   icon: (
  //     <svg
  //       width="80"
  //       height="80"
  //       viewBox="0 0 64 64"
  //       fill="currentColor"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" fill="none" />
  //       <path d="M32 14C25 14 20 20 20 26V38C20 44 25 50 32 50C39 50 44 44 44 38V26C44 20 39 14 32 14Z" stroke="currentColor" strokeWidth="2" fill="none" />
  //       <line x1="32" y1="14" x2="32" y2="50" stroke="currentColor" strokeWidth="2" />
  //       <circle cx="26" cy="22" r="2" fill="currentColor" />
  //       <circle cx="26" cy="32" r="2" fill="currentColor" />
  //       <circle cx="26" cy="42" r="2" fill="currentColor" />
  //       <circle cx="38" cy="22" r="2" fill="currentColor" />
  //       <circle cx="38" cy="32" r="2" fill="currentColor" />
  //       <circle cx="38" cy="42" r="2" fill="currentColor" />
  //       <rect x="6" y="50" width="6" height="10" fill="currentColor" />
  //       <rect x="14" y="46" width="6" height="14" fill="currentColor" />
  //       <rect x="22" y="42" width="6" height="18" fill="currentColor" />
  //       <rect x="46" y="46" width="6" height="14" fill="currentColor" />
  //       <rect x="54" y="50" width="6" height="10" fill="currentColor" />
  //     </svg>
  //   ),
  //   title: "Artificial Intelligence in Governance and Taxation",
  //   paragraph:
  //     "",
  // },
  // {
  //   id: 1,
  //   icon: (
  //     <svg
  //       width="80"
  //       height="80"
  //       viewBox="0 0 64 64"
  //       fill="currentColor"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <rect x="12" y="30" width="40" height="28" fill="currentColor" />
  //       <polygon points="32,10 10,30 54,30" fill="currentColor" />
  //       <rect x="18" y="42" width="6" height="16" fill="#ffffff" />
  //       <rect x="28" y="42" width="6" height="16" fill="#ffffff" />
  //       <rect x="38" y="42" width="6" height="16" fill="#ffffff" />

  //       <circle cx="32" cy="14" r="2" fill="currentColor" />
  //       <line x1="32" y1="16" x2="32" y2="28" stroke="currentColor" strokeWidth="2" />
  //       <circle cx="48" cy="24" r="2" fill="currentColor" />
  //       <line x1="46" y1="24" x2="32" y2="24" stroke="currentColor" strokeWidth="2" />
  //       <circle cx="16" cy="24" r="2" fill="currentColor" />
  //       <line x1="18" y1="24" x2="32" y2="24" stroke="currentColor" strokeWidth="2" />

  //       <path d="M6 58 L58 58" stroke="currentColor" strokeDasharray="4 2" strokeWidth="2" />
  //     </svg>
  //   ),
  //   title: "E-Governance Solutions and Digital Transformation",
  //   paragraph:
  //     "",
  // },
  // {
  //   id: 1,
  //   icon: (
  //     <svg
  //       width="80"
  //       height="80"
  //       viewBox="0 0 64 64"
  //       fill="currentColor"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <path d="M32 8 L8 24 L8 56 H56 V24 L32 8 Z" fill="currentColor" />

  //       <circle cx="20" cy="35" r="3" fill="#ffffff" />
  //       <path d="M18 38 Q20 44 22 38 Z" fill="#ffffff" />

  //       <circle cx="32" cy="30" r="4" fill="#ffffff" />
  //       <path d="M29 34 Q32 45 35 34 Z" fill="#ffffff" />

  //       <circle cx="44" cy="35" r="3" fill="#ffffff" />
  //       <path d="M42 38 Q44 44 46 38 Z" fill="#ffffff" />

  //       <path d="M32 56 L32 44 Q32 42 30 40 Q28 38 26 44 Q24 48 24 56" stroke="#ffffff" strokeWidth="2" fill="none" />
  //     </svg>
  //   ),
  //   title: "Large Scale Social Protection and Refugee Management Solutions",
  //   paragraph:
  //     "",
  // },
  // {
  //   id: 1,
  //   icon: (
  //     <svg
  //       width="80"
  //       height="80"
  //       viewBox="0 0 64 64"
  //       fill="currentColor"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <rect x="10" y="24" width="44" height="30" rx="3" ry="3" fill="currentColor" />

  //       <path d="M24 16 H40 V24 H24 Z" fill="#ffffff" />
  //       <rect x="27" y="8" width="10" height="16" fill="#ffffff" />

  //       <path d="M28 36 L32 42 L40 32" stroke="#ffffff" strokeWidth="2" fill="none" />

  //       <line x1="12" y1="54" x2="52" y2="54" stroke="#ffffff" strokeWidth="2" strokeDasharray="4" />
  //     </svg>
  //   ),
  //   title: "Election Management and Online Election",
  //   paragraph:
  //     "",
  // },
  {
    id: 1,
    icon: (
      <svg width="40" height="45" viewBox="0 0 40 45" className="fill-current">
        {/* <path
          opacity="0.5"
          d="M31.579 37.8948C28.6737 37.8948 26.3158 35.5369 26.3158 32.6317C26.3158 31.9159 26.4527 31.2306 26.7135 30.6015C26.7959 30.4027 26.7605 30.1711 26.6083 30.019L24.9997 28.4103C24.7766 28.1872 24.4043 28.2238 24.2487 28.4983C23.5588 29.7145 23.1579 31.125 23.1579 32.6317C23.1579 37.2843 26.9263 41.0527 31.579 41.0527V43.0035C31.579 43.449 32.1175 43.6721 32.4325 43.3571L35.9622 39.8273C36.1575 39.6321 36.1575 39.3155 35.9622 39.1202L32.4325 35.5905C32.1175 35.2755 31.579 35.4986 31.579 35.9441V37.8948ZM31.579 24.2106V22.2598C31.579 21.8144 31.0404 21.5913 30.7254 21.9063L27.1957 25.436C27.0004 25.6313 27.0004 25.9479 27.1957 26.1431L30.7254 29.6729C31.0404 29.9879 31.579 29.7648 31.579 29.3193V27.3685C34.4842 27.3685 36.8421 29.7264 36.8421 32.6317C36.8421 33.3474 36.7052 34.0328 36.4444 34.6618C36.362 34.8606 36.3974 35.0922 36.5496 35.2444L38.1582 36.853C38.3813 37.0762 38.7536 37.0396 38.9092 36.7651C39.5991 35.5488 40 34.1384 40 32.6317C40 27.9791 36.2316 24.2106 31.579 24.2106Z"
        />
        <path d="M18.9474 32.6316C18.9474 35.4705 19.8099 38.0969 21.2941 40.2796C21.7904 41.0094 21.3054 42.1053 20.4229 42.1053H4.21053C1.87368 42.1053 0 40.2316 0 37.8947V4.21053C0 1.89474 1.87368 0 4.21053 0H6.31579H16.8421H29.4737C31.7895 0 33.6842 1.87368 33.6842 4.21053V17.9544C33.6842 18.5032 33.1804 18.9474 32.6316 18.9474C25.0737 18.9474 18.9474 25.0737 18.9474 32.6316Z" /> */}
      </svg>
    ),
    title: "",
    paragraph:
      "",
  },
  {
    id: 1,
    icon: (
      <Image
        src="/images/logo/ibmlogo.png"
        alt="logo"
        width={250}
        height={30}
        className=""
      />
    ),
    title: "",
    paragraph:
      "Software, Hardware and Services",
  },
  {
    id: 1,
    icon: (
      <svg width="40" height="45" viewBox="0 0 40 45" className="fill-current">
        {/* <path
          opacity="0.5"
          d="M31.579 37.8948C28.6737 37.8948 26.3158 35.5369 26.3158 32.6317C26.3158 31.9159 26.4527 31.2306 26.7135 30.6015C26.7959 30.4027 26.7605 30.1711 26.6083 30.019L24.9997 28.4103C24.7766 28.1872 24.4043 28.2238 24.2487 28.4983C23.5588 29.7145 23.1579 31.125 23.1579 32.6317C23.1579 37.2843 26.9263 41.0527 31.579 41.0527V43.0035C31.579 43.449 32.1175 43.6721 32.4325 43.3571L35.9622 39.8273C36.1575 39.6321 36.1575 39.3155 35.9622 39.1202L32.4325 35.5905C32.1175 35.2755 31.579 35.4986 31.579 35.9441V37.8948ZM31.579 24.2106V22.2598C31.579 21.8144 31.0404 21.5913 30.7254 21.9063L27.1957 25.436C27.0004 25.6313 27.0004 25.9479 27.1957 26.1431L30.7254 29.6729C31.0404 29.9879 31.579 29.7648 31.579 29.3193V27.3685C34.4842 27.3685 36.8421 29.7264 36.8421 32.6317C36.8421 33.3474 36.7052 34.0328 36.4444 34.6618C36.362 34.8606 36.3974 35.0922 36.5496 35.2444L38.1582 36.853C38.3813 37.0762 38.7536 37.0396 38.9092 36.7651C39.5991 35.5488 40 34.1384 40 32.6317C40 27.9791 36.2316 24.2106 31.579 24.2106Z"
        />
        <path d="M18.9474 32.6316C18.9474 35.4705 19.8099 38.0969 21.2941 40.2796C21.7904 41.0094 21.3054 42.1053 20.4229 42.1053H4.21053C1.87368 42.1053 0 40.2316 0 37.8947V4.21053C0 1.89474 1.87368 0 4.21053 0H6.31579H16.8421H29.4737C31.7895 0 33.6842 1.87368 33.6842 4.21053V17.9544C33.6842 18.5032 33.1804 18.9474 32.6316 18.9474C25.0737 18.9474 18.9474 25.0737 18.9474 32.6316Z" /> */}
      </svg>
    ),
    title: "",
    paragraph:
      "",
  },
];
export default featuresData;
