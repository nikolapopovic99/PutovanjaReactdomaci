import Tours from '../components/Tours'
function Home({tours,removeTour}){

    return(
    <main>
        <Tours tours={tours} removeTour={removeTour} />
    </main>

    )
    
}

export default Home;