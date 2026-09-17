# 생성 이미지 출처

이 폴더의 이미지는 **실제 촬영물이 아니다.** 시안의 분위기를 보여주기 위해
Higgsfield로 생성했다. 실제 사이트로 옮기기 전에 현대콘트롤전기의 실제 공장,
설비, 제품 사진으로 교체해야 한다.

- 생성일: 2026-09-16
- 도구: Higgsfield (`soul_location`, `recraft_v4_1`)
- 텍스트 프롬프트만 사용. 참조 이미지 없음. 실제 인물 없음.
- 모든 프롬프트에 "no text, no signage, no logos"를 넣어 실재하지 않는 회사명이나
  표지가 들어가지 않도록 했다.

| 파일 | 쓰이는 곳 | 내용 |
|---|---|---|
| `hero-room.webp` | `index.html` 히어로 | 배전반이 늘어선 수전실 |
| `fab-floor.webp` | `index.html`, `work-process.html`, `intro/overview.html` | 판금 가공 공장 |
| `busbar-macro.webp` | `index.html` 대표제품, `intro/overview.html` | 배전반 내부 부스바와 단자대 |
| `seismic-base.webp` | `index.html` 대표제품 | 면진 베이스 |
| `plant-dusk.webp` | `intro/greetings.html`, `intro/overview.html` | 해질녘 공장 외관 |

교체가 필요한 이유: 위 이미지는 현대콘트롤전기의 실제 공장도, 실제 제품도 아니다.
발주처 담당자가 시안을 보고 "이 설비가 있는 회사"로 오해할 수 있다.
제품 사진, 도면, 인증서(`../img/`, `../products/img/`, `../intro/img/`)는 전부
현행 사이트에서 가져온 실제 자료이므로 그대로 쓸 수 있다.
