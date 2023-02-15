import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';

type CustomLinkProps = {
  children: ReactElement | string;
  className?: string;
  href: string;
  icon: { color: string; icon: IconProp };
};

const CustomLink = (props: CustomLinkProps) => {
  return (
    <Link
      href={props.href}
      target="_blank"
      rel="noreferrer"
      className={twMerge(
        `
          relative flex w-full flex-row items-center justify-center rounded-xl
          bg-white px-6 py-2 font-bold text-black shadow-md
          transition-transform duration-150 hover:scale-105 hover:odd:rotate-1 hover:even:-rotate-1
        `,
        props.className,
      )}
    >
      <FontAwesomeIcon className="absolute left-3 h-6" icon={props.icon.icon} color={props.icon.color} />

      <span className="text-center">{props.children}</span>
    </Link>
  );
};

export default CustomLink;
