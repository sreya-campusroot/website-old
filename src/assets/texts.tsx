import { FC, ReactNode } from "react"

interface SectionHeadingProps {
    children: ReactNode;
    center?: boolean
}
const SectionHeading: FC<SectionHeadingProps> = ({ children, center }) => {
    return <h1 className={`${center}&&text-center text-2xl font-semibold my-4`}>{children}</h1>
}

export { SectionHeading }