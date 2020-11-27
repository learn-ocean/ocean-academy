import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { State } from 'reducers'

import {
    hideCourseDrawer,
    hideMenuDrawer,
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

// Subdrawer of CourseDrawer
// [1] IT'S CHANGING THE VIEW STATE CORRECTLY (BOOL, state.chapterDrawer.showingChapter) But ChapterDrawer isn't being called to show the chapters.
export const ChapterDrawer = () => {
    const dispatch = useDispatch()
    const showingChapter = useSelector((state: State) => state.chapterDrawer.showingChapter)
    const currentCourse = useSelector((state: State) => state.chapterDrawer.course)
    console.log("Status: Showing ", currentCourse, ", ", showingChapter)
    const { pathname } = useLocation()

    const hideCallback = ((showingChapter: boolean, currentCourse: string) => {
        switch (currentCourse) {
            case ``: {
                break;
            }
            case `ocean101`: {
                if (showingChapter) {
                    dispatch(showOcean101Drawer())
                }
                else {
                    dispatch(hideOcean101Drawer())
                }
                break;
            }
            case `oceanBusiness`: {
                if (showingChapter) {
                    dispatch(showOcean101Drawer())
                }
                else {
                    dispatch(hideBusinessDrawer())
                }
                break;
            }
            case `oceanOutreach`: {
                if (showingChapter) {
                    dispatch(showOutreachDrawer())
                }
                else {
                    dispatch(hideOutreachDrawer())
                }
                break;
            }
            case `computeToData`: {
                if (showingChapter) {
                    dispatch(showC2DDrawer())
                }
                else {
                    dispatch(hideC2DDrawer())
                }
                break;
            }
        }
    })

    return (
        <ChapterDrawerView
            showingChapter={showingChapter}
            currentCourse={currentCourse}
            hideCallback={hideCallback}
            pathname={pathname}
        />
    )
}