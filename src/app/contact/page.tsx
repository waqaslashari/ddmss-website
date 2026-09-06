import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactPageVisual } from "@/components/contact/contact-page-visual";
import styles from "@/components/contact/contact-page.module.css";

export const metadata: Metadata = {
  title: { absolute: "Contact DDMSS | Start a Technology Conversation" },
  description:
    "Start a conversation with DDMSS about digital transformation, AI, software, smart infrastructure, EV charging, parking or digital twins.",
};

const startStages = [
  ["Understand", "Context / goals"],
  ["Define", "Scope / direction"],
  ["Design", "System / path"],
] as const;

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <div className={`content-container ${styles.layout}`}>
        <header className={styles.intro}>
          <p className={styles.marker}>CONTACT / 01</p>
          <h1>Start a Conversation.</h1>
          <p className={styles.introCopy}>
            Tell us what you are trying to achieve. We&apos;ll start by understanding
            the business challenge, operational environment and technology
            requirements.
          </p>
          <p className={styles.technicalLine}>
            Strategy · Software · AI · Data · Connected Infrastructure
          </p>
        </header>

        <ContactForm />

        <aside className={styles.context} aria-labelledby="how-we-start-heading">
          <h2 id="how-we-start-heading">How we start</h2>
          <p>
            Every engagement starts with understanding the objective, users,
            operating environment and existing systems before recommending
            technology.
          </p>
          <div className={styles.stages} aria-label="Engagement starting stages">
            {startStages.map(([name, detail], index) => (
              <div className={styles.stage} key={name}>
                <span>{name}</span>
                <small>
                  {String(index + 1).padStart(2, "0")} / {detail}
                </small>
              </div>
            ))}
          </div>
          <p className={styles.regionalLine}>
            Oman-based · Supporting regional and international engagements
          </p>
          <ContactPageVisual />
        </aside>
      </div>
    </div>
  );
}
