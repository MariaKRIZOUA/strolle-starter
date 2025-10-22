export const metadata = {
  title: "Strollé — L’amitié, le temps du bien",
  description: "On ne matche pas. On é.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body style={{ background: "#F5F3EE", color: "#2E3835", margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
