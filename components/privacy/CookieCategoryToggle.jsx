"use client";

export function CookieCategoryToggle({ id, title, description, checked, disabled = false, onChange }) {
  return (
    <div className="cookie-category">
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <label className="cookie-switch" htmlFor={id}>
        <span className="sr-only">{disabled ? `${title} always active` : `Enable ${title}`}</span>
        <input id={id} type="checkbox" checked={checked} disabled={disabled} onChange={(event) => onChange(event.target.checked)} />
        <span aria-hidden="true" />
        {disabled && <strong>Always Active</strong>}
      </label>
    </div>
  );
}
