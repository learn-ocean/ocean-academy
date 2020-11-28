import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { State } from 'reducers'
import {
    showOcean101Drawer,
    hideOcean101Drawer,
    showBusinessDrawer,
    hideBusinessDrawer,
    showOutreachDrawer,
    hideOutreachDrawer,
    showC2DDrawer,
    hideC2DDrawer
} from './Drawer.actions'
import { ChapterDrawerView } from './ChapterDrawer.view'
import { ShowingChaptersState } from 'reducers/chapterDrawer'

type chapterDrawerProps = {
    course: string
}

export const ChapterDrawer = ({ course }: chapterDrawerProps) => {
    const dispatch = useDispatch()
    const chapterStates = useSelector((state: State) => state.chapterDrawer)
    const { pathname } = useLocation()

    console.log(`[ChapterDrawer.controller] course = ${course}
    \nchapterStates[ocean101]: ${chapterStates.ocean101}
    \nchapterStates[oceanBusiness]: ${chapterStates.oceanBusiness}
    \nchapterStates[oceanOutreach]: ${chapterStates.oceanOutreach}
    \nchapterStates[computeToData]: ${chapterStates.computeToData}`)

    const hideCallback = ((chapterStates: ShowingChaptersState, course: string) => {
        console.log("[ChapterDrawer.controller hideCallback] Passing through...\n[changeChapterState] course: ", course)
        switch (course) {
            case `ocean101`: {
                if (chapterStates.ocean101) {
                    dispatch(showOcean101Drawer())
                } else {
                    dispatch(hideOcean101Drawer())
                }
                break;
            }
            case `oceanBusiness`: {
                if (chapterStates.oceanBusiness) {
                    dispatch(showBusinessDrawer())
                } else {
                    dispatch(hideBusinessDrawer())
                }
                break;
            }
            case `oceanOutreach`: {
                if (chapterStates.oceanOutreach) {
                    dispatch(showOutreachDrawer())
                } else {
                    dispatch(hideOutreachDrawer())
                }
                break;
            }
            case `computeToData`: {
                if (chapterStates.computeToData) {
                    dispatch(showC2DDrawer())
                } else {
                    dispatch(hideC2DDrawer())
                }
                break;
            }
        }
    })

    console.log("[ChapterDrawer.controller] Returning ChapterDrawerView... ")
    return (
        <ChapterDrawerView
            course={course}
            chapterStates={chapterStates}
            hideCallback={hideCallback}
            pathname={pathname}
        />
    )
}