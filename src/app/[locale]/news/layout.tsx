export const metadata = {
  robots: {
    index: false,
    follow: true,
  },
};

export default function NewsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
