const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.supabase.co", // ← tous les sous-domaines Supabase
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },
};

export default nextConfig;
