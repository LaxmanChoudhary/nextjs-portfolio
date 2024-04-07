interface TypographyProps  {
  children: React.ReactNode
}

export function TypographyH1({children}: TypographyProps) {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {children}
    </h1>
  )
}

export function TypographyH2({children}: TypographyProps) {
  return (
    <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {children}
    </h2>
  )
}

export function TypographyH3({children}: TypographyProps) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {children}
    </h3>
  )
}

export function TypographyH4({children}: TypographyProps) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  )
}

export function Typography({children}: TypographyProps) {
  return (
    <small className="leading-none">{children}</small>
  )
}

export function TypographySmall({children}: TypographyProps) {
  return (
    <small className="text-sm font-medium leading-none">{children}</small>
  )
}

export function TypographyXtraSmall({children}: TypographyProps) {
  return (
    <small className="text-xs font-medium leading-none">{children}</small>
  )
}

export function TypographyMuted({children}: TypographyProps) {
  return (
    <p className="text-sm text-muted-foreground">{children}</p>
  )
}