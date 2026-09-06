"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitContactEnquiry } from "@/app/contact/actions";
import { ArrowIcon } from "@/components/ui/arrow-icon";
import { engagementTypes, initialContactFormState } from "@/types/contact";
import { ProjectTypeSelector } from "./project-type-selector";
import styles from "./contact-page.module.css";

function FieldError({ id, message }: { id: string; message?: string }) {
  return message ? (
    <p className={styles.fieldError} id={id}>
      {message}
    </p>
  ) : null;
}

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactEnquiry,
    initialContactFormState,
  );
  const statusRef = useRef<HTMLDivElement>(null);
  const startedAtRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (startedAtRef.current) {
      startedAtRef.current.value = String(Date.now());
    }
  }, []);

  useEffect(() => {
    if (state.attempt > 0) statusRef.current?.focus();
  }, [state.attempt]);

  if (state.status === "success") {
    return (
      <div className={styles.successState} role="status" tabIndex={-1}>
        <span className={styles.successSignal} aria-hidden="true" />
        <p className={styles.stepMarker}>ENQUIRY / RECEIVED</p>
        <h2>Thank you.</h2>
        <p>Your enquiry has been received.</p>
        <p>We&apos;ll review the context and follow up with an appropriate next step.</p>
      </div>
    );
  }

  const errors = state.errors ?? {};

  return (
    <form action={formAction} className={styles.form} noValidate>
      <input ref={startedAtRef} type="hidden" name="startedAt" />
      <div className={styles.honeypot} aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div
        ref={statusRef}
        className={`${styles.formStatus} ${
          state.status === "development" ? styles.developmentStatus : ""
        }`}
        role={state.status === "development" ? "status" : "alert"}
        tabIndex={-1}
        hidden={!state.message}
      >
        <span aria-hidden="true" />
        {state.message}
      </div>

      <section className={styles.formStage} aria-labelledby="project-type-heading">
        <div className={styles.stageHeading}>
          <p className={styles.stepMarker}>STEP 01 / OUTCOME</p>
          <h2 id="project-type-heading">What are you looking to achieve?</h2>
        </div>
        <ProjectTypeSelector
          error={errors.projectType}
          selectedValue={state.values.projectType}
        />
      </section>

      <section className={styles.formStage} aria-labelledby="project-context-heading">
        <div className={styles.stageHeading}>
          <p className={styles.stepMarker}>STEP 02 / CONTEXT</p>
          <h2 id="project-context-heading">Tell us about the project.</h2>
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel} htmlFor="engagementType">
            Engagement context <span>Optional</span>
          </label>
          <div className={styles.selectShell}>
            <select
              id="engagementType"
              name="engagementType"
              defaultValue={state.values.engagementType}
              aria-invalid={Boolean(errors.engagementType)}
              aria-describedby={
                errors.engagementType ? "engagement-type-error" : undefined
              }
            >
              <option value="">Select a context</option>
              {engagementTypes.map((engagementType) => (
                <option key={engagementType} value={engagementType}>
                  {engagementType}
                </option>
              ))}
            </select>
            <span aria-hidden="true">↓</span>
          </div>
          <FieldError id="engagement-type-error" message={errors.engagementType} />
        </div>

        <div className={styles.fieldGroup}>
          <label className={styles.fieldLabel} htmlFor="message">
            Tell us about the challenge <span>Required</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            maxLength={3000}
            defaultValue={state.values.message}
            placeholder="What are you trying to transform, build or connect?"
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "message-error" : "message-hint"}
            required
          />
          <div className={styles.fieldFooter}>
            <p id="message-hint">
              A short description is enough. Include the problem, current
              environment, expected outcome or technology requirement where relevant.
            </p>
            <span>MAX / 3000</span>
          </div>
          <FieldError id="message-error" message={errors.message} />
        </div>
      </section>

      <section className={styles.formStage} aria-labelledby="contact-details-heading">
        <div className={styles.stageHeading}>
          <p className={styles.stepMarker}>STEP 03 / CONTACT</p>
          <h2 id="contact-details-heading">How can we reach you?</h2>
        </div>

        <div className={styles.fieldGrid}>
          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel} htmlFor="name">
              Your name <span>Required</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              maxLength={100}
              autoComplete="name"
              defaultValue={state.values.name}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? "name-error" : undefined}
              required
            />
            <FieldError id="name-error" message={errors.name} />
          </div>
          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel} htmlFor="company">
              Company / organization <span>Required</span>
            </label>
            <input
              id="company"
              name="company"
              type="text"
              maxLength={160}
              autoComplete="organization"
              defaultValue={state.values.company}
              aria-invalid={Boolean(errors.company)}
              aria-describedby={errors.company ? "company-error" : undefined}
              required
            />
            <FieldError id="company-error" message={errors.company} />
          </div>
          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel} htmlFor="email">
              Work email <span>Required</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              maxLength={254}
              autoComplete="email"
              inputMode="email"
              defaultValue={state.values.email}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "email-error" : undefined}
              required
            />
            <FieldError id="email-error" message={errors.email} />
          </div>
          <div className={styles.fieldGroup}>
            <label className={styles.fieldLabel} htmlFor="phone">
              Phone <span>Optional</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              maxLength={40}
              autoComplete="tel"
              inputMode="tel"
              defaultValue={state.values.phone}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? "phone-error" : undefined}
            />
            <FieldError id="phone-error" message={errors.phone} />
          </div>
        </div>
      </section>

      <div className={styles.submitArea}>
        <button type="submit" disabled={isPending} aria-disabled={isPending}>
          <span>{isPending ? "Sending..." : "Start the Conversation"}</span>
          <ArrowIcon className={styles.submitArrow} />
        </button>
        <p>
          By submitting this form, you agree that DDMSS may use the information
          provided to respond to your enquiry.
        </p>
      </div>
    </form>
  );
}
