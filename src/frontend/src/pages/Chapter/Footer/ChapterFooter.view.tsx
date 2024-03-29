import { Button } from 'app/App.components/Button/Button.controller'
import { chapterData as ComputeToData } from 'pages/Courses/ComputeToData/Chapters/Chapters.data'
// band-aid hardcode import. fix later.
import { chapterData as chapterDataOcean101 } from 'pages/Courses/introToDataDefi/Chapters/Chapters.data'
// band-aid hardcode import. fix later.
import { chapterData as chapterDataDefi } from 'pages/Courses/ocean101/Chapters/Chapters.data'
import * as React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { ChapterFooterStyled } from './ChapterFooter.style'

const chapterData = chapterDataOcean101.concat(ComputeToData).concat(chapterDataDefi);

export const ChapterFooterView = () => {
  const { pathname } = useLocation()
  let previousChapter = '/'
  let nextChapter = '/'

  chapterData.forEach((chapter, i) => {
    if (pathname === chapter.pathname) {
      if (i - 1 >= 0) previousChapter = chapterData[i - 1].pathname
      if (i + 1 < chapterData.length) nextChapter = chapterData[i + 1].pathname
    }
  })

  return (
    <ChapterFooterStyled>
      <Link to={previousChapter}>
        <Button text="Previous Chapter" color="primary" icon="left-arrow" invertIcon />
      </Link>
      <Link to={nextChapter}>
        <Button text="Next Chapter" color="primary" icon="right-arrow" />
      </Link>
    </ChapterFooterStyled>
  )
}
