import { forwardRef, useMemo } from 'react'
import type { Ref, AnchorHTMLAttributes } from 'react'
import NextLink from 'next/link'
import type { LinkProps as FrameworkLinkProps } from 'next/link'

import styles from './Link.module.scss'

export type Variant = 'default' | 'underlined'

export type LinkProps = FrameworkLinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: Variant
  }

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { href, children, variant = 'default', ...props }: LinkProps,
  ref: Ref<HTMLAnchorElement> | undefined
) {
  const isInternalLink = useMemo(
    () => href[0] === '/' && href[1] !== '/',
    [href]
  )

  if (isInternalLink) {
    return (
      <NextLink passHref href={href}>
        <a
          ref={ref}
          data-fes-link
          data-fes-link-variant={variant}
          className={styles.fesLink}
          {...props}
        >
          {children}
        </a>
      </NextLink>
    )
  }

  return (
    <a
      ref={ref}
      href={href}
      data-fes-link
      data-fes-link-variant={variant}
      className={styles.fesLink}
      {...props}
    >
      {children}
    </a>
  )
})
