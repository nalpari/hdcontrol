"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";

import type { L, Locale } from "@/i18n/types";

const KEY = "hd-locale";
const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  window.addEventListener("storage", onChange);
  return () => {
    listeners.delete(onChange);
    window.removeEventListener("storage", onChange);
  };
}

function getSnapshot(): Locale {
  try {
    return window.localStorage.getItem(KEY) === "en" ? "en" : "ko";
  } catch {
    return "ko";
  }
}

// 서버는 항상 한국어로 그린다. 영어를 고른 방문자는 하이드레이션 직후 바뀐다.
const getServerSnapshot = (): Locale => "ko";

export function useLocale(): Locale {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function useSetLocale() {
  return useCallback((next: Locale) => {
    try {
      window.localStorage.setItem(KEY, next);
    } catch {
      // 사생활 보호 모드 등으로 저장이 막혀도 이번 세션 전환은 되어야 한다.
    }
    for (const fn of listeners) fn();
  }, []);
}

/** 문장 하나를 현재 언어로 그린다. */
export function T({ s }: { s: L }) {
  return <>{s[useLocale()]}</>;
}

/** alt, placeholder처럼 문자열이 필요한 자리. */
export function useT() {
  const locale = useLocale();
  return useCallback((s: L) => s[locale], [locale]);
}

/** 이미지는 교체하지 않는다. 대체텍스트만 언어를 따른다. */
export function Img({
  src,
  alt,
  ...rest
}: Omit<React.ImgHTMLAttributes<HTMLImageElement>, "alt" | "src"> & {
  src: string;
  alt: L;
}) {
  return <img src={src} alt={alt[useLocale()]} {...rest} />;
}

/** <html lang>을 현재 언어에 맞춘다. */
export function HtmlLang() {
  const locale = useLocale();
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return null;
}
