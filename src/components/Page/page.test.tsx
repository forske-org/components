import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import Page from '.'

describe("Page", () => {
    it("renders", () => {
        const title = "Test Title"
        const children = "Test children"

        const { getByText } = render(
            <Page title={title}>{children}</Page>
        )

        const titleElement = getByText(title)
        const childrenElement = getByText(children)

        expect(titleElement).toBeInTheDocument()
        expect(childrenElement).toBeInTheDocument()
    })
})
