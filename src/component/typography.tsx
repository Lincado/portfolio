import type { HtmlHTMLAttributes } from 'react';

interface TypographyProps extends HtmlHTMLAttributes<
  HTMLHeadingElement & HTMLParagraphElement
> {
  children: string;
  elementType: 'h1' | 'h2' | 'h3' | 'span' | 'p';
}

export const Typography = ({
  children,
  elementType = 'span',
  ...props
}: TypographyProps) => {
  const Tag = elementType;

  return <Tag {...props}>{children}</Tag>;
};
