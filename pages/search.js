import Footer from '../components/Footer'
import Header from '../components/Header'

function Search() {
    return (
        <div>
           <Header/>

           <main className='flex'>
                <section>
                    <p className='text-xs '>300+ Stay for 5 number of guests</p>

                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in Sahnur</h1>

                    <div>
                        <p>Cancellation Flexibility</p>
                    </div>
                </section>
           </main>

           <Footer/>
        </div>
    )
}

export default Search;
