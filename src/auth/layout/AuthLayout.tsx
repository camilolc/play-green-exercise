

interface Props{
    children:JSX.Element
    title:string
}

export const AuthLayout = ({ children, title = '' }:Props) => {
  return (
    <>
        <h1>{title}</h1>
        {children}
    </>
  )
}
