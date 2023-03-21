const spaces = {
  none: 'none',
  xxxs: 'xxxs',
  xxs: 'xxs',
  xs: 'xs',
  sm: 'sm',
  md: 'md', // 24px
  lg: 'lg',
  xl: 'xl',
  xxl: 'xxl',
  xxxl: 'xxxl'
} as const;

export default Object.freeze(spaces);