//prettier-ignore
import Editor, { ControlledEditor, DiffEditor, monaco } from '@monaco-editor/react'
import { Checkboxes } from 'app/App.components/Checkboxes/Checkboxes.controller'
import { Dialog } from 'app/App.components/Dialog/Dialog.controller'
import Markdown from 'markdown-to-jsx'
import * as PropTypes from 'prop-types'
import * as React from 'react'
import { useState } from 'react'
import { backgroundColorLight } from 'styles'

import { PENDING, RIGHT, WRONG } from './Chapter.constants'
import { Question } from './Chapter.controller'
//prettier-ignore
import { Button, ButtonBorder, ButtonText, ChapterCourse, ChapterGrid, ChapterH1, ChapterH2, ChapterH3, ChapterH4, ChapterItalic, ChapterMonaco, ChapterQuestions, ChapterStyled, ChapterTab, ChapterValidator, ChapterValidatorContent, ChapterValidatorContentWrapper, ChapterValidatorTitle } from './Chapter.style'

monaco
  .init()
  .then((monacoInstance) => {
    monacoInstance.editor.defineTheme('myCustomTheme', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'comment', foreground: '#42edf8', fontStyle: 'italic' },
        { token: 'keyword', foreground: '#FF5A00' },
        { token: 'number', foreground: '#00FF47' },
        { token: 'string', foreground: '#FA00FF' },
      ],
      colors: {
        'editor.foreground': '#F8F8F8',
        'editor.background': backgroundColorLight,
        'editor.selectionBackground': '#DDF0FF33',
        'editor.lineHighlightBackground': '#FFFFFF08',
        'editorCursor.foreground': '#A7A7A7',
        'editorWhitespace.foreground': '#FFFFFF40',
      },
    })
  })
  .catch((error) => console.error('An error occurred during initialization of Monaco: ', error))

const MonacoReadOnly = ({ children }: any) => {
  const height = children.split('\n').length * 22
  return (
    <div style={{ marginTop: '10px' }}>
      <Editor
        height={height}
        value={children}
        language="rust"
        theme="myCustomTheme"
        options={{
          lineNumbers: false,
          scrollBeyondLastLine: false,
          minimap: { enabled: false },
          scrollbar: { vertical: 'hidden', verticalScrollbarSize: 0, alwaysConsumeMouseWheel: false },
          folding: false,
          readOnly: true,
          fontSize: 14,
          fontFamily: 'Proxima Nova',
        }}
      />
    </div>
  )
}

const MonacoEditorSupport = ({ support }: any) => {
  return (
    <div>
      <Editor
        height="500px"
        value={support}
        language="rust"
        theme="myCustomTheme"
        options={{
          lineNumbers: true,
          scrollBeyondLastLine: true,
          minimap: { enabled: false },
          scrollbar: { vertical: 'hidden', verticalScrollbarSize: 0 },
          folding: true,
          readOnly: true,
          fontSize: 14,
          fontFamily: 'Proxima Nova',
        }}
      />
    </div>
  )
}

const MonacoEditor = ({ proposedSolution, proposedSolutionCallback }: any) => {
  return (
    <div>
      <ControlledEditor
        height="500px"
        value={proposedSolution}
        language="rust"
        theme="myCustomTheme"
        onChange={(_, val) => proposedSolutionCallback(val)}
        options={{
          lineNumbers: true,
          scrollBeyondLastLine: true,
          minimap: { enabled: false },
          scrollbar: { vertical: 'hidden', verticalScrollbarSize: 0 },
          folding: true,
          readOnly: false,
          fontSize: 14,
          fontFamily: 'Proxima Nova',
        }}
      />
    </div>
  )
}

const MonacoDiff = ({ solution, proposedSolution }: any) => {
  return (
    <div>
      <DiffEditor
        height="500px"
        original={proposedSolution}
        modified={solution}
        language="rust"
        // @ts-ignore
        theme="myCustomTheme"
        options={{
          lineNumbers: true,
          scrollBeyondLastLine: true,
          minimap: { enabled: false },
          scrollbar: { vertical: 'hidden', verticalScrollbarSize: 0 },
          folding: true,
          readOnly: false,
          fontSize: 14,
          fontFamily: 'Proxima Nova',
          renderSideBySide: false,
        }}
      />
    </div>
  )
}

// Provides user with feedback after incorrect exploration
let triggerAnim = function () {
  const myTry = document.getElementById('try')!;
  myTry.classList.remove('tryagain');
  void myTry.offsetWidth;
  myTry.classList.add('tryagain');
};

const Validator = ({ validatorState, validateCallback }: any) => (
  <ChapterValidator className={validatorState === RIGHT ? 'ok' : 'no'}>
    {validatorState === PENDING && (
      <ChapterValidatorContentWrapper>
        <ChapterValidatorTitle>CHAPTER VALIDATION</ChapterValidatorTitle>
        <ChapterValidatorContent>Provide your answer above and validate chapter</ChapterValidatorContent>
        <Button>
          <ButtonBorder />
          <ButtonText onClick={() => validateCallback()}>SUBMIT ANSWER</ButtonText>
        </Button>
      </ChapterValidatorContentWrapper>
    )}
    {validatorState === RIGHT && (
      <ChapterValidatorContentWrapper>
        <ChapterValidatorTitle>EXPLORATION SUCCESSFUL</ChapterValidatorTitle>
        <ChapterValidatorContent>Go on to the next chapter</ChapterValidatorContent>
      </ChapterValidatorContentWrapper>
    )}
    {validatorState === WRONG && (
      <ChapterValidatorContentWrapper>
        <ChapterValidatorTitle id={'try'} className={'tryagain'}>EXPLORATION FAILED</ChapterValidatorTitle>
        <ChapterValidatorContent>Correct your answer and try again</ChapterValidatorContent>
        <Button>
          <ButtonBorder />
          <ButtonText onClick={() => {validateCallback(); triggerAnim();}}>TRY AGAIN</ButtonText>
        </Button>
      </ChapterValidatorContentWrapper>
    )}
  </ChapterValidator>
)

const Content = ({ course }: any) => (
  <Markdown
    children={course}
    options={{
      // disableParsingRawHTML: true,
      overrides: {
        h1: {
          component: ChapterH1,
        },
        h2: {
          component: ChapterH2,
        },
        h3: {
          component: ChapterH3,
        },
        h4: {
          component: ChapterH4,
        },
        code: {
          component: MonacoReadOnly,
        },
        em: {
          component: ChapterItalic,
        },
        dialog: {
          component: Dialog,
        },
      },
    }}
  />
)

type ChapterViewProps = {
  validatorState: string
  validateCallback: () => void
  solution: string
  proposedSolution: string
  proposedSolutionCallback: (e: string) => void
  showDiff: boolean
  course?: string
  supports: Record<string, string | undefined>
  questions: Question[]
  proposedQuestionAnswerCallback: (e: Question[]) => void
}

export const ChapterView = ({
  validatorState,
  validateCallback,
  solution,
  proposedSolution,
  proposedSolutionCallback,
  showDiff,
  course,
  supports,
  questions,
  proposedQuestionAnswerCallback,
}: ChapterViewProps) => {
  const [display, setDisplay] = useState('solution')

  let extension = '.rs'

  return (
    <ChapterStyled>
      <ChapterCourse>
        <Content course={course || ''} />
      </ChapterCourse>
      <ChapterGrid hasTabs={Object.keys(supports).length > 0}>
        {Object.keys(supports).length > 0 && (
          <div>
            <ChapterTab isSelected={display === 'solution'} onClick={() => setDisplay('solution')}>
              Exercice
            </ChapterTab>
            {Object.keys(supports).map((key, index) => (
              <ChapterTab isSelected={display === key} onClick={() => setDisplay(key)}>
                {`${key}.${extension}`}
              </ChapterTab>
            ))}
          </div>
        )}
        {questions.length > 0 ? (
          <ChapterQuestions>
            {questions.map((question, i) => (
              <div key={question.question}>
                <h2>{question.question}</h2>
                <Checkboxes
                  items={question.answers}
                  onUpdate={(selected) => {
                    const proposedQuestions = questions
                    proposedQuestions[i].proposedResponses = selected
                    proposedQuestionAnswerCallback(proposedQuestions)
                  }}
                />
              </div>
            ))}
          </ChapterQuestions>
        ) : (
            <div>
              {display === 'solution' ? (
                <ChapterMonaco>
                  {showDiff ? (
                    <MonacoDiff solution={solution} proposedSolution={proposedSolution} />
                  ) : (
                      <MonacoEditor
                        proposedSolution={proposedSolution}
                        proposedSolutionCallback={proposedSolutionCallback}
                      />
                    )}
                </ChapterMonaco>
              ) : (
                  <ChapterMonaco>
                    <MonacoEditorSupport support={supports[display]} />
                  </ChapterMonaco>
                )}
            </div>
          )}
        <Validator validatorState={validatorState} validateCallback={validateCallback} />
      </ChapterGrid>
    </ChapterStyled>
  )
}

ChapterView.propTypes = {
  validatorState: PropTypes.string,
  validateCallback: PropTypes.func.isRequired,
  solution: PropTypes.string,
  proposedSolution: PropTypes.string,
  showDiff: PropTypes.bool.isRequired,
  proposedSolutionCallback: PropTypes.func.isRequired,
  course: PropTypes.string,
  supports: PropTypes.object.isRequired,
  questions: PropTypes.array.isRequired,
}

ChapterView.defaultProps = {
  validatorState: PENDING,
  solution: '',
  proposedSolution: '',
}
