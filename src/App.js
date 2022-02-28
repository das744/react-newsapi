
import React, {useState, useEffect} from 'react'
import SearchForm from './SearchForm'


const API = process.env.REACT_APP_API_KEY;

const App = () => {
                 
  const [articles, setArticles] = useState([])
                 
  const [term, setTerm] = useState('Ukraine')
                 
  const [isLoading, setIsLoading ] = useState(true)
                      
  useEffect(() =>{
    const fetchArticles = async () =>{
    try{
        
        const res = await fetch(`
        https://newsapi.org/v2/everything?q=${term}&sortBy=popularity&apiKey=${API}`)
        
        const articles = await res.json();
        setArticles(articles.articles); 
        // console.log(articles.articles);
        setIsLoading(false)
       
      } catch (error){
        console.error(error)
      }
    }
    fetchArticles();

  }, [term])              

  return (
    <>

    <div className="showcase ">
      <div className="overlay px-5"> 
        <h1 className="text-4xl capitalize font-bold text-white text-center mb-4 lg:text-6xl">Looking articles about {term} </h1>
       
       <SearchForm searchText ={(text) => setTerm(text) }/> 


      </div>
    </div>
    
      {isLoading ? (
        <h1 className="text-center font-bold mt-30 text-4xl"> Loading ....</h1>
      ) : (
        <section className="grid grid-cols-1 px-5 pt-10 pb-20">
      
        {articles.map((article) =>{
          
          const {author, content, description,publishedAt,source:{name}, title,url,urlToImage ,id} = article;

          return(


            <article className="bg-white py-10 px-5 rounded-lg lg:w-9/12 lg:mx-auto"  key={id}>
              <img src={urlToImage} alt="" className="height-80 mb-5 "/>

              
              <h2 className="font-bold text-2xl mb-5 lg:text-4xl"> {title} </h2>
              <h4> {description} <a href={url} target="_blank" className="underline">Read More</a></h4>
              {/* <p>{content}</p> */}
              <ul className="my-4">
                <li ><span className="font-bold"> Author Name:</span> {author}</li>
                <li ><span className="font-bold"> Name:</span> {name}</li>
                <li><span className="font-bold">Published On:</span> {publishedAt}</li>
              </ul>

              <a href={url} target="_blank" className="underline"> Web Resource</a>
            </article>
          )

        })}

      </section>

      )}
      
    </>
  );
}

export default App;
