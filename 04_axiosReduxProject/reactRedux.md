## React-Redux & Axios | Setup

- Open a terminal inside your react project and install packeges:
    ```
    npm install react-redux @reduxjs/toolkit axios
    ```
  
- Open your root file and create your store and wrap your app inside a `Provider`:
  ```
  import { configureStore } from '@reduxjs/toolkit'
  import somethingReducer from '..(some-path)/reducers/something'
  
  const store = configureStore({
    reducer: {
      something: somethingReducer,
    },
  })
  
  export default function App(...) {
    ...rest of the page
  
    return (
      <Provider store={store}>
        ...your app here
      </Provider>
    )
  }
  ```
- Create your reducer `...reducers/something.tsx(jsx)`:
  ```
  const initialState = {
    something: [],
  }
  
  type actionTypes = 'GET_SOMETHING'
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case 'GET_SOMETHING':
        return {
          ...state,
          something: action.payload,
        }
      default:
        return state
    }
  }
  ```
- Create your hook `/hooks/useSomething.tsx(jsx)`
  ```
  import axios from 'axios'
  import { useState } from 'react'
  import { useDispatch, useSelector } from 'react-redux'
  import { actionTypes } from '../reducers/workspaces'
  
  type SomethingType = {
    ...typeHere
  }
  
  export default function useSomethings() {
    const [somethingsError, setSomethingsError] = useState(null)
    const { somethings } = useSelector(
      (state: {
        somethings: {
          somethings: SomethingType[]
        }
      }) => ({
        somethings: state.somethings.somethings,
      }),
    )
    const dispatch = useDispatch()
  
    const getSomethings = () => {
      axios
        .get('your-endpoint')
        .then((res) => {
          dispatch({
            type: 'GET_SOMETHING',
            payload: res.data,
          })
        })
        .catch((err) => setSomethingsError(err))
    }
    
    const createSomething = (something: Partial<SomethingType>) => {
      axios
        .post('your-endpoint', something)
        .then((res) => getSomethings())
        .catch((err) => setSomethingsError(err))
    }
  
    const updateProject = (something: Partial<SomethingType>) => {
      axios
        .put('your-endpoint/${project.id}/`, something)
        .then((res) => getSomethings())
        .catch((err) => setSomethingsError(err))
    }
  
    const deleteProject = (something: Partial<SomethingType>) => {
      axios
        .delete(`your-endpoint/${something.id}/`)
        .then((res) => getSomethings())
        .catch((err) => setSomethingsError(err))
    }
  
    // will fetch projects whenever you invoke useSomethings()
    useEffect(() => {
      getSomethings()
    }, [])
    
    return {
      somethings,
      getSomething,
      createSomething,
      updateSomething,
      deleteSomething,
      SomethingsError,
    }
  }
  ```
  
- Consume on your component:
  ```
  const { somethings, getSomethings } = useSomethings()
  ```