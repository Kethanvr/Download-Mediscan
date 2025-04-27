import type { CSSProperties } from 'react';

interface PlaceholderProps {
  width: string | number;
  height: string | number;
  text: string;
}

export default function Placeholder({ width, height, text }: PlaceholderProps) {
  return (
    <div 
      style={{ 
        width, 
        height, 
        background: '#f3f4f6', 
        borderRadius: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#9ca3af',
        fontSize: '0.875rem',
        fontWeight: 500
      } as CSSProperties}
    >
      {text}
    </div>
  );
}
