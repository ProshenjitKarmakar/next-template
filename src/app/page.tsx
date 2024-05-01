import {Suspense} from "react";


const App = () => {
    return (
        <div style={{textAlign: 'center', marginTop: '50px'}}>
            <h1>Hi there! I'm Proshenjit Karmakar.</h1>
            <h2>Jr. Web Appplication Developer</h2>
            <h3>@Orangetoolz</h3>
        </div>
    )
}
const Home = () => {
    return (
        <Suspense fallback={<div> Loading... </div>}>
            <App/>
        </Suspense>

    )
}
export default Home;