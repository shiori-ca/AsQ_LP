import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AsQ - すぐに知りたい疑問を即解決',
    short_name: 'AsQ',
    description: '現地の人に直接質問できるリアルタイム質問アプリ。お出かけ先の混雑状況、デートスポット情報、買い物の相談などを即座に解決。',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    orientation: 'portrait',
    icons: [
      {
        src: '/asq-logo.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/asq-logo.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    lang: 'ja',
    dir: 'ltr',
    categories: ['social', 'lifestyle', 'travel'],
    screenshots: [
      {
        src: '/asq-logo.png',
        sizes: '1280x720',
        type: 'image/png',
        form_factor: 'wide',
        label: 'AsQアプリのスクリーンショット',
      },
      {
        src: '/asq-logo.png',
        sizes: '750x1334',
        type: 'image/png',
        form_factor: 'narrow',
        label: 'AsQアプリのモバイルスクリーンショット',
      },
    ],
  }
}