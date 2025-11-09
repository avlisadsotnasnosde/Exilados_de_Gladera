"use client";

import { CacheProvider } from "@emotion/react";
import createEmotionCache from "./createEmotionCache"; // ajuste o caminho conforme necessário

const clientSideEmotionCache = createEmotionCache();

export default function EmotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CacheProvider value={clientSideEmotionCache}>{children}</CacheProvider>
  );
}
