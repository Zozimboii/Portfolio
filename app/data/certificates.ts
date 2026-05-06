export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  year: string;
  file: string;
  image: string;
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "Bronto Dev",
    issuer: "Bronto",
    year: "2025",
    file: "/certificate/brontodev.pdf",
    image: "/cert-preview/brontodev.png",
  },
  {
    id: 2,
    title: "Future Tech",
    issuer: "FutureTech",
    year: "2024",
    file: "/certificate/FutureTech.pdf",
    image: "/cert-preview/FutureTech.png",
  },
  {
    id: 3,
    title: "Java",
    issuer: "Oracle",
    year: "2025",
    file: "/certificate/JAVA.pdf",
    image: "/cert-preview/Java.png",
  },
  {
    id: 4,
    title: "Microsoft",
    issuer: "Microsoft",
    year: "2023",
    file: "/certificate/microsoft.pdf",
    image: "/cert-preview/microsoft.png",
  },
  {
    id: 5,
    title: "LINK",
    issuer: "Link",
    year: "2024",
    file: "/certificate/LINK.pdf",
    image: "/cert-preview/LINK.png",
  },
  {
    id: 6,
    title: "Onramp",
    issuer: "Onramp",
    year: "2023",
    file: "/certificate/Onramp.pdf",
    image: "/cert-preview/Onramp.png",
  },
  {
    id: 7,
    title: "StaticMath",
    issuer: "StaticMath",
    year: "2023",
    file: "/certificate/StaticMath.pdf",
    image: "/cert-preview/StaticMath.png",
  },
];
