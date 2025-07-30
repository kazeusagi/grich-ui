'use client';

type Props = {
  label: string;
  color?: string;
  onClick?: () => void;
};

export function Button({ label, color, onClick }: Props) {
  return (
    <button type="button" style={{ color }} onClick={onClick}>
      {label}
    </button>
  );
}
