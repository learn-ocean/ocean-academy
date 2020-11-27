import * as React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { ShowingChaptersState } from '../../../pages/Course/Course.controller'

import {
    showOcean101Drawer,
    hideOcean101Drawer,
    hideBusinessDrawer,
    showOutreachDrawer,
    hideOutreachDrawer,
    showC2DDrawer,
    hideC2DDrawer
} from './Drawer.actions'

import { ChapterDrawerView } from './ChapterDrawer.view'

export const ChapterDrawer = () => {
    const dispatch = useDispatch()
    const showingChapters = useSelector((state: ShowingChaptersState) => state.showingChapters)
    const currentCourse = useSelector((state: ShowingChaptersState) => state.course)
    console.log("Status: Showing ", currentCourse, ", ", showingChapters)
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
            showingChapter={showingChapters}
            currentCourse={currentCourse}
            hideCallback={hideCallback}
            pathname={pathname}
        />
    )
}