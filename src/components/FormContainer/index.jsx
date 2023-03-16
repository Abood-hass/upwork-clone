
import React from 'react'
import { FormBox } from './style'

export default function Index(props) {
    return (
        <FormBox style={props.sx} onSubmit={(e) => e.preventDefault()} children={props.children} />
    )
}
