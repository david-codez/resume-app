import { ReactDOM } from 'react-dom'
import Home from '../pages/index'

import { render, cleanup } from '@testing-library/react'
import 'jest-dom/extend-expect'
import { IsoTwoTone } from '@mui/icons-material'


it("renders without crashing", () => {
    const div = document.createElement('div')
    ReactDOM.render(<Home />, div)
})