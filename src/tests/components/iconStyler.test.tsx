import React from "react"
import {  render, screen } from "@testing-library/react"
import IconStyler from "../../components/iconStyler/iconStyler"

describe('test icon - styler being rendered',()=>{
    it('renders properly', ()=>{
        render(<IconStyler><div>test</div></IconStyler>)

        const iconStyler = screen.getByTestId('icon-styler')

        expect(iconStyler).toBeInTheDocument()
    })
})

