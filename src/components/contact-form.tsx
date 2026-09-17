"use client";

import { useState } from "react";

import { COMPANY } from "@/data/company";
import { useT } from "@/i18n/locale";
import type { L } from "@/i18n/types";
import { UI } from "@/i18n/ui";

type Errors = { name?: L; email?: L; body?: L };

// 메일 서버가 붙기 전까지 문의는 담당자 메일함으로 바로 간다.
// 백엔드가 생기면 buildMailto 대신 서버 액션만 갈아 끼우면 된다.
function buildMailto(f: {
  name: string;
  org: string;
  email: string;
  subject: string;
  body: string;
}) {
  const subject = f.subject.trim() || `${f.org.trim() || f.name.trim()} enquiry`;
  const lines = [
    `Name: ${f.name.trim()}`,
    f.org.trim() ? `Company: ${f.org.trim()}` : "",
    `Reply to: ${f.email.trim()}`,
    "",
    f.body.trim(),
  ].filter(Boolean);
  return `mailto:${COMPANY.mail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    lines.join("\n"),
  )}`;
}

export function ContactForm({
  idPrefix,
  submitLabel,
  withOrg = false,
  withSubject = false,
  note,
}: {
  idPrefix: string;
  submitLabel: L;
  withOrg?: boolean;
  withSubject?: boolean;
  note?: L;
}) {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);
  const t = useT();
  const id = (k: string) => `${idPrefix}-${k}`;

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const values = {
      name: String(data.get("name") ?? ""),
      org: String(data.get("org") ?? ""),
      email: String(data.get("email") ?? ""),
      subject: String(data.get("subject") ?? ""),
      body: String(data.get("body") ?? ""),
    };

    const next: Errors = {};
    if (!values.name.trim()) next.name = UI.fmErrName;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) next.email = UI.fmErrEmail;
    if (!values.body.trim()) next.body = UI.fmErrBody;

    setErrors(next);
    if (Object.keys(next).length > 0) {
      document.getElementById(id(Object.keys(next)[0]))?.focus();
      return;
    }

    window.location.href = buildMailto(values);
    setSent(true);
  }

  return (
    <form className="form u-mt6" onSubmit={onSubmit} noValidate>
      <div className={`field${errors.name ? " field--bad" : ""}`}>
        <label htmlFor={id("name")}>{t(withSubject ? UI.fmNameShort : UI.fmName)}</label>
        <input
          id={id("name")}
          name="name"
          type="text"
          autoComplete="name"
          placeholder={t(UI.fmNamePlaceholder)}
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? id("name-err") : undefined}
        />
        {errors.name ? (
          <p className="field__err" id={id("name-err")}>
            {t(errors.name)}
          </p>
        ) : null}
      </div>

      {withOrg ? (
        <div className="field">
          <label htmlFor={id("org")}>{t(UI.fmOrg)}</label>
          <input
            id={id("org")}
            name="org"
            type="text"
            autoComplete="organization"
            placeholder={t(UI.fmOrgPlaceholder)}
          />
        </div>
      ) : null}

      <div className={`field${errors.email ? " field--bad" : ""}`}>
        <label htmlFor={id("email")}>{t(withSubject ? UI.fmEmailReply : UI.fmEmail)}</label>
        <input
          id={id("email")}
          name="email"
          type="email"
          autoComplete="email"
          placeholder={t(UI.fmEmailPlaceholder)}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? id("email-err") : undefined}
        />
        {errors.email ? (
          <p className="field__err" id={id("email-err")}>
            {t(errors.email)}
          </p>
        ) : null}
      </div>

      {withSubject ? (
        <div className="field">
          <label htmlFor={id("subject")}>{t(UI.fmSubject)}</label>
          <input
            id={id("subject")}
            name="subject"
            type="text"
            placeholder={t(UI.fmSubjectPlaceholder)}
          />
        </div>
      ) : null}

      <div className={`field${errors.body ? " field--bad" : ""}`}>
        <label htmlFor={id("body")}>{t(withSubject ? UI.fmBodyShort : UI.fmBody)}</label>
        <textarea
          id={id("body")}
          name="body"
          rows={withSubject ? 6 : 5}
          placeholder={t(UI.fmBodyPlaceholder)}
          aria-invalid={errors.body ? true : undefined}
          aria-describedby={errors.body ? id("body-err") : undefined}
        />
        {errors.body ? (
          <p className="field__err" id={id("body-err")}>
            {t(errors.body)}
          </p>
        ) : note ? (
          <small>{t(note)}</small>
        ) : null}
      </div>

      <div>
        <button className="btn btn--primary" type="submit">
          {t(submitLabel)}
        </button>
      </div>

      <p aria-live="polite" className="dim" style={{ fontSize: ".875rem" }}>
        {sent ? `${t(UI.fmSentBefore)}${COMPANY.mail}${t(UI.fmSentAfter)}` : ""}
      </p>
    </form>
  );
}
