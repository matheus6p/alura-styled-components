import React from 'react'
import alimentacao from '../assets/images/alimentacao.svg'
import outros from '../assets/images/outros.svg'
import saude from '../assets/images/saude.svg'
import transporte from '../assets/images/transporte.svg'
import utilidades from '../assets/images/utilidades.svg'
import { IconeTema } from './UI'

export default (type) => {
  const Images = {
    Restaurante: <IconeTema src={alimentacao} />,
    Utilidades: <IconeTema src={utilidades} />,
    Saude: <IconeTema src={saude} />,
    Transporte: <IconeTema src={transporte} />,
    default: <IconeTema src={outros} />,
  }

  return Images[type] || Images.default
}