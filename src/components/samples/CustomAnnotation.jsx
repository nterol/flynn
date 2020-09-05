import React from 'react'
import { EditableAnnotation, ConnectorLine, Note } from 'react-annotation'

export const CustomAnnotation = ({ title, x }) => (
  <EditableAnnotation
    x={x}
    y={170}
    dy={117}
    dx={162}
    color={'#9610ff'}
    title={title}
    label={'yes us Humans'}
  >
    <ConnectorLine />
    <Note
      lineType={'vertical'}
      bgPadding={{ top: 15, left: 10, right: 10, bottom: 10 }}
      padding={15}
      titleColor={'#59039c'}
    />
  </EditableAnnotation>
)
