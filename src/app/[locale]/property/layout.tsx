export const metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function PropertyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
