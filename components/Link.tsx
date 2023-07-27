import { FC, ReactNode } from "react";
import NextLink from "next/link";

interface IProps {
  href: string;
  text?: string;
  classNames?: string;
  children?: ReactNode;
}

const Link: FC<IProps> = ({ href, classNames, text }) => {
  return (
    <div className={classNames}>
      <NextLink href={`/${href}`}>{text}</NextLink>
    </div>
  );
};

export default Link;
