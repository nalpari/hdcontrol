// 하나의 선 굵기(1.75)로 통일한 자체 아이콘. 유니코드 글리프를 쓰지 않는다.

const PATHS = {
  chevron: <path d="M4 6.5 8 10.5 12 6.5" />,
  chevronRight: <path d="M6.5 4 10.5 8 6.5 12" />,
  arrow: <path d="M3 8h10M9 4l4 4-4 4" />,
  plus: <path d="M8 3.5v9M3.5 8h9" />,
  phone: (
    <path d="M13.5 11.3v1.9a1 1 0 0 1-1.1 1 11 11 0 0 1-9.6-9.6 1 1 0 0 1 1-1.1h1.9a1 1 0 0 1 1 .9c.1.7.2 1.3.5 2a1 1 0 0 1-.3 1l-.8.8a8 8 0 0 0 3 3l.8-.8a1 1 0 0 1 1-.2c.6.2 1.3.4 2 .4a1 1 0 0 1 .9 1Z" />
  ),
  mail: (
    <>
      <path d="M2.5 4.5h11v7h-11z" />
      <path d="m2.5 5 5.5 4 5.5-4" />
    </>
  ),
  menu: <path d="M3 5h12M3 9h12M3 13h12" />,
  close: <path d="M4 4l8 8M12 4l-8 8" />,
  doc: (
    <>
      <path d="M9 2H4.5v12h9V6.5z" />
      <path d="M9 2v4.5h4.5" />
    </>
  ),
} as const;

export type IconName = keyof typeof PATHS;

export function Icon({ name, size = 16 }: { name: IconName; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
