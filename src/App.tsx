import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { GetUsers } from "./redux/actions/userActions"
import { RootStore } from './redux/store'


const App = () => {
	const dispatch = useDispatch()
	const store = useSelector((state : RootStore) => state.user)

	useEffect(() => {
		dispatch(GetUsers())
	}, [dispatch])

  	return(
		<div>
			<h1>Demo React - Redux - Typescript</h1>

			{ store.loading && <p>loading...</p> }
			{ store.error && <p>Error !!</p> }

			<ul>
				{store.users?.map(user => (
					<li key={user.id}>
						<h3>{ user.name }</h3>
					</li>
				))}
			</ul>
		</div>
	)
}


export default App
