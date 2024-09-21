import Page from '.'

export default {
    title: '@forske/components/Page',
    component: Page,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        title: {
            description: 'The title of the page',
            control: {
                type: 'text',
            },
        },
        children: {
            description: 'The content of the page',
            control: {
                type: 'text',
            },
        },
    },
    args: {
        title: 'Page Title',
        children: 'Page Content'
    },
}

export const PageOne = {
    args: {
        title: 'Page One Title',
        children: 'Page One Content'
    }
}
