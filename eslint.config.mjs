import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // 제품 사진·도면·인증서 186장은 원본 치수를 모른 채 들어온다.
      // hd.css가 직접 크기를 잡으므로 next/image 대신 <img>를 쓴다.
      "@next/next/no-img-element": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // 정적 시안 원본과 도구 스크립트. 빌드 대상이 아니다.
    "docs/**",
    ".agents/**",
    ".claude/**",
  ]),
]);

export default eslintConfig;
