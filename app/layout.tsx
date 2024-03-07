import { ClerkProvider } from "@clerk/nextjs";
import { Clapperboard } from "lucide-react";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider afterSignInUrl="/" afterSignUpUrl="/onboarding">
      <html lang="ja">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
