import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Account | Devlinks",
  description: "Devlinks",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
