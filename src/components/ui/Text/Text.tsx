import styles from './text.module.scss'

type Variants =
  | 'heading-1'
  | 'heading-2'
  | 'heading-3'
  | 'heading-link'
  | 'subheading-1/button-text'
  | 'subheading-2'
  | 'paragraph'
  | 'paragraph-bold'
  | 'caption-g'
  | 'caption-m'
  | 'caption-p'

interface Props {
  children?: React.ReactNode
  /**
   * Specifies the component variant
   */
  variant?: Variants
  /**
   * Defines if the text will be in uppercase
   */
  uppercased?: boolean
  /**
   * Defines if the text will be spaced
   */
  spaced?: boolean
  /**
   * Defines if the text will be bold
   */
  bold?: boolean
}

export type TextProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  Props
>

export const Text = <C extends React.ElementType = 'span'>({
  as,
  children,
  variant = 'paragraph',
  uppercased,
  spaced,
  bold,
  ...props
}: TextProps<C>) => {
  const Component = as ?? 'span'

  return (
    <Component
      className={styles.fesText}
      data-fes-text
      data-fes-text-variant={variant}
      data-fes-text-uppercased={uppercased}
      data-fes-text-spaced={spaced}
      data-fes-text-bold={bold}
      {...props}
    >
      {children}
    </Component>
  )
}
