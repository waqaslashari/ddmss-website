import { projectTypes } from "@/types/contact";
import styles from "./contact-page.module.css";

type ProjectTypeSelectorProps = {
  error?: string;
  selectedValue: string;
};

export function ProjectTypeSelector({
  error,
  selectedValue,
}: ProjectTypeSelectorProps) {
  return (
    <fieldset
      className={styles.projectTypeFieldset}
      aria-describedby={error ? "project-type-error" : undefined}
    >
      <legend className={styles.fieldLabel}>
        Area of interest <span>Required</span>
      </legend>
      <div className={styles.projectTypeGrid}>
        {projectTypes.map((projectType, index) => (
          <label className={styles.projectTypeOption} key={projectType}>
            <input
              type="radio"
              name="projectType"
              value={projectType}
              defaultChecked={selectedValue === projectType}
              required
            />
            <span className={styles.radioIndex} aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span>{projectType}</span>
          </label>
        ))}
      </div>
      {error ? (
        <p className={styles.fieldError} id="project-type-error">
          {error}
        </p>
      ) : null}
    </fieldset>
  );
}
