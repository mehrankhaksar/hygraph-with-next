import { RiArrowRightSLine } from "@remixicon/react";
import Link from "next/link";
import { ReactNode } from "react";

interface IPrimaryButtonProps {
  className?: string;
  children: ReactNode;
  href: string;
}

export default function PrimaryButton({
  children,
  href,
  className = "",
}: IPrimaryButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex rounded whitespace-nowrap items-center bg-linear-to-r from-primary-600 to-indigo-600 text-white py-2 px-4 text-sm shadow-md transition-all hover:-translate-y-0.5 hover:from-primary-700 hover:to-indigo-700 hover:shadow-lg ${className}`}
    >
      {children}
      <RiArrowRightSLine />
    </Link>
  );
}
