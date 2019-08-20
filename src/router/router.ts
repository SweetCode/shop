import * as loadable from 'react-loadable'
import loading from './loading'

export default [
    {
        name: 'main',
        path: '/',
        exact: false,
        component:  loadable({
            loader: ()=>import('../pages/main/Main'),
            loading
        })
    }
]