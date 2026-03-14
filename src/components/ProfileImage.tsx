import Image from "next/image";

interface ProfileImageProps {
  src: string;
  alt: string;
  size?: number;
}

export default function ProfileImage({ src, alt, size = 200 }: ProfileImageProps) {
  return (
    <div className="relative w-full h-full">
      <Image
        src={src}
        alt={alt}
        fill
        className="rounded-full object-cover shadow-2xl hover:shadow-3xl transition-shadow duration-300 transform hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 animate-gradient" />
    </div>
  );
}
