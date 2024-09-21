import React from 'react'

import { PageProps } from './types'
import './page.css'

export function Page ({
    title,
    children,
}: PageProps) {
    return (
        <React.Fragment>
            <h1 className={'page__title'}>{title}</h1>
            {children}
        </React.Fragment>
    )
}

export default Page
