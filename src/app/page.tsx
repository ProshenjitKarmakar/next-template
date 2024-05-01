import {Suspense} from "react";


const App = () => {
    return (
        <div>
            <h1>Hi there! this is home page.</h1>
        </div>
    )
}
const Home = () => {
    return (
        <Suspense>
            <App/>
        </Suspense>

    )
}
export default Home;