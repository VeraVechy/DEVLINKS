import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preview | Devlinks",
  description: "Devlinks",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
