/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dtn6bfvnz/image/upload/**", // Update this to match your actual cloud name and folder structure
      },
    ],
  },
};

export default nextConfig;
