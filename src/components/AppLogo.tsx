import Image from 'next/image';

export default function AppLogo(props: { className?: string }) {
  return (
    <Image
      src="/assets/Mediscan.png"
      alt="MediScan Logo"
      width={100}
      height={100}
      className={props.className}
      priority
    />
  );
}
