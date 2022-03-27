import React from 'react'
import styled from 'styled-components'
import '../../fonts/font-OpenSans.css'

const Company = styled.label`
  font-family: "Open Sans", sans-serif;
  font-weight: 400;
  font-style: normal;
  line-height: 150%;
  color: #353238;
  order: 2;
  align-self: stretch;
  margin: 0em 0em 1em 0em;

  & html {
    font-family: "Open Sans", sans-serif;
  }
`

export default function Text () {
  return (
    <>
      <Company>
        Компания SK Design приглашает к взаимовыгодному сотрудничеству
        креативных дизайнеров, архитекторов и декораторов, дизайн-бюро и
        интерьерные студии — все, кто дизайн интерьера сделали своим призванием.{' '}
      </Company>
      <Company>
        Партнерство мы видим как доверительные отношения, основанные на
        честности реализации бизнес идей в сфере создания и продаж современной,
        качественной, удобной, функциональной и эксклюзивной мебели.
      </Company>
      <Company>
        Ознакомиться с проектами можете в нашем портфолио. Если Вы оформляете
        интерьеры жилых или коммерческих помещений — мы с радостью поможем Вам:
        составим уникальные условия сотрудничества, предоставим 3D модели
        (уточняйте у менеджеров) и разработаем коммерческое предложение к Вашему
        проекту или изображениям.
      </Company>
    </>
  )
}
