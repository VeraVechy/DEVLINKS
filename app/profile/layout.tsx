import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile | Devlinks",
  description: "Devlinks",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
