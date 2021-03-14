import React from 'react'
import {Provider}from 'react-redux'

import { store } from './store/store'
import { LegosIndex } from './LegosIndex'

export const LegosApp = () => {
    return (
        <div>
            <Provider store={store}>
                <LegosIndex />
            </Provider>
        </div>
    )
}
