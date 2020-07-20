import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import { AppWrapper } from './App.style'

const childFactoryCreator = (props: any) => (child: any) => React.cloneElement(child, props)

export const AppTransitions = ({ pageKey, children, reverse }: { pageKey: any; children: any; reverse: boolean }) => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const animation = reverse ? 'slide-right' : 'slide-left'

  return (
    <TransitionGroup
      childFactory={childFactoryCreator({
        classNames: animation,
        timeout: 300,
      })}
    >
      <CSSTransition timeout={0} key={pageKey}>
        <AppWrapper>{children}</AppWrapper>
      </CSSTransition>
    </TransitionGroup>
  )
}
