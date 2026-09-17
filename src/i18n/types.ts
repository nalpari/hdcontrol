export type Locale = "ko" | "en";

/** 한 문장의 두 언어. 데이터 파일은 전부 이 타입으로 적는다. */
export type L = { ko: string; en: string };

export const l = (ko: string, en: string): L => ({ ko, en });

/** 모델코드, 치수, 규격명처럼 번역하지 않는 값. */
export const u = (s: string): L => ({ ko: s, en: s });

export const pick = (v: L, locale: Locale) => v[locale];

export const joinL = (items: L[], sep = " · "): L => ({
  ko: items.map((i) => i.ko).join(sep),
  en: items.map((i) => i.en).join(sep),
});
