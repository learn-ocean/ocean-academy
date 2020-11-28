import { data as data1 } from '../Chapters/Chapter1'
import { data as data2 } from '../Chapters/Chapter2'
import { course } from '..'

// To be filled with content
export const chapterData = [
    {
        pathname: `/${course.path}/chapter-1`,
        name: '1 - What is Compute To Data?',
        data: data1,
    },
    {
        pathname: `/${course.path}/chapter-2`,
        name: '2 - How do you use Compute To Data?',
        data: data2,
    }
]