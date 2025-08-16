import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateViewport() {
  return {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  }
}

export const metadata: Metadata = {
  title: "AsQ - すぐに知りたい疑問を即解決 | リアルタイム質問アプリ",
  description: "AsQは現地の人に直接質問できるリアルタイム質問アプリです。お出かけ先の混雑状況、デートスポット情報、買い物の相談など、すぐに知りたい疑問を現地の人から即座に回答をもらえます。App Storeからダウンロード可能。",
  keywords: ["質問アプリ", "リアルタイム回答", "現地情報", "AsQ", "旅行", "デート", "買い物相談", "混雑状況"],
  authors: [{ name: "AsQ" }],
  creator: "AsQ",
  publisher: "AsQ",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://asq-app.com"),
  openGraph: {
    title: "AsQ - すぐに知りたい疑問を即解決",
    description: "現地の人に直接質問できるリアルタイム質問アプリ。お出かけ先の混雑状況、デートスポット情報、買い物の相談などを即座に解決。",
    url: "https://asq-app.com",
    siteName: "AsQ",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/asq-logo.png",
        width: 1200,
        height: 630,
        alt: "AsQ - リアルタイム質問アプリ",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AsQ - すぐに知りたい疑問を即解決",
    description: "現地の人に直接質問できるリアルタイム質問アプリ。App Storeからダウンロード可能。",
    images: ["/asq-logo.png"],
    creator: "@asq_app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              "name": "AsQ",
              "applicationCategory": "SocialNetworkingApplication",
              "operatingSystem": "iOS",
              "description": "現地の人に直接質問できるリアルタイム質問アプリ。お出かけ先の混雑状況、デートスポット情報、買い物の相談などを即座に解決。",
              "url": "https://asq-app.com",
              "downloadUrl": "https://apps.apple.com/app/asq",
              "softwareVersion": "1.0",
              "datePublished": "2024-01-01",
              "dateModified": "2024-01-01",
              "author": {
                "@type": "Organization",
                "name": "AsQ"
              },
              "publisher": {
                "@type": "Organization",
                "name": "AsQ",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://asq-app.com/asq-logo.png"
                }
              },
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "JPY"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.5",
                "reviewCount": "100"
              },
              "featureList": [
                "リアルタイム質問・回答システム",
                "回答者検索機能",
                "プロフィール確認",
                "評価システム",
                "通知機能",
                "現地情報取得"
              ]
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "AsQはどのようなアプリですか？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AsQは現地の人に直接質問できるリアルタイム質問アプリです。お出かけ先の混雑状況、デートスポット情報、買い物の相談などを即座に解決できます。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "どのように使いますか？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "①回答者を検索 ②プロフィール確認 ③質問を送信 ④回答者に通知 ⑤回答を受信 ⑥回答を評価の6ステップで簡単に利用できます。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "料金はかかりますか？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "AsQは無料でダウンロード・利用いただけます。App Storeから今すぐダウンロードできます。"
                  }
                }
              ]
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AsQ",
              "url": "https://asq-app.com",
              "logo": "https://asq-app.com/asq-logo.png",
              "description": "リアルタイム質問アプリAsQを開発・運営する会社",
              "foundingDate": "2024",
              "sameAs": [
                "https://twitter.com/asq_app"
              ]
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
