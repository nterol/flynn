import React, { useState, useEffect, createRef } from 'react'
import styled from 'styled-components'
import { CustomAnnotation } from './CustomAnnotation'

const SvgContainer = styled.svg`
  width: 900px;
  height: 500px;
`

export function ArticleRule() {
  const [allWordWidth, setAllWordWidth] = useState([])
  const sentence = [
    { word: 'We', annotation: false },
    { word: 'make', annotation: false },
    { word: 'the machines', annotation: true },
    { word: 'run', annotation: true },
  ]
  const sentenceRef = Array.from({ length: sentence.length }, () => createRef())

  useEffect(() => {
    const allWordWidth = sentenceRef.map(ref => ref.current.getBBox().width)

    const sequentalyCompiledWidth = allWordWidth.reduce((acc, curr, i) => {
      if (i === 0) acc[i] = curr + 5
      else acc[i] = curr + acc[i - 1] + 5
      return acc
    }, [])

    setAllWordWidth(sequentalyCompiledWidth)
  }, [sentenceRef])

  const getWordX = i => {
    if (i === 0 || !allWordWidth.length) return 0
    return allWordWidth[i - 1]
  }

  return (
    <SvgContainer>
      {sentence.map(({ word, annotation }, i) => {
        const decalX = getWordX(i)
        return (
          <g key={word}>
            <text ref={sentenceRef[i]} x={150 + decalX} y={170}>
              {word}
            </text>

            {annotation && (
              <CustomAnnotation title={sentence[i].word} x={150 + decalX} />
            )}
          </g>
        )
      })}
    </SvgContainer>
  )
}
