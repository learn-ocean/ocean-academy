import { Button } from 'app/App.components/Button/Button.controller'
import { chapterData } from 'pages/Chapter/Chapter.data'
import * as React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { FooterStyled } from './Footer.style'

export const FooterView = () => {
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
    <FooterStyled>
      <Link to={previousChapter}>
        <Button text="Previous Chapter" color="primary" icon="left-arrow" invertIcon />
      </Link>
      <Link to={nextChapter}>
        <Button text="Next Chapter" color="primary" icon="right-arrow" />
      </Link>
    </FooterStyled>
  )
}
