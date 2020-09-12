import React , {useState,useEffect} from 'react'
import Post from './Post'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
import Grid from '@material-ui/core/Grid'
import  Loader from '@material-ui/core/CircularProgress'
import * as defaultPosts from './posts.json'

function Community() {

   const [pages,setPages] = useState([])
   const [loading,setLoading] = useState(true)

    useEffect(() => {
        fetch("https://graph.facebook.com/v8.0/107873770970056/posts?fields=updated_time,message,permalink_url,full_picture&access_token=EAAKQdhi2HioBAOdCYJtEWKeJZBaZB95g2g9ikBSP2ZCnwv0fJxzlYw9Ao0G9D7bM4bhseEHpWuQTI4DlcaJKHfAx8vv3uQiAZA5klRgtrj2syVG1D36PIVq0N1ogElBZBnczA2GmvgvB3cBhxlmMFfwziZC8SZBDXvZB5SZB0fk74SAZDZD")
        .then((res)=>res.json())
        .then(json => 
        {
            console.log(json);
            if(json.error==null){
               setPages(json.data)
               setLoading(false)
            }else{
               setPages(defaultPosts.data)
               setLoading(false)
            }
        })

      }, []);
    

    return (loading?
        <div>
        <Navigation/>
        <Loader style={{position:"absolute",top:"40%",left:"48%"}}/>
        </div> :
        <div>
            <Navigation/>
            <h1 style={{textAlign:"center",paddingTop:"130px",marginBottom:"30px"}}>Our Community</h1>
            <Grid container spacing={3} style={{width:"80%",margin:"auto"}}>
                
                {pages.map(value =>
                <Grid key={value.id} item lg={4} sm={6} xs={12}   >
                    <a href={value.permalink_url} style={{textDecoration:"none",color:"black"}}>
                    <Post date={value.updated_time.substring(0,10)}
                        content={value.message}
                        image={value.full_picture}
                        likes={70}
                        comments={2}
                        shares={21}
                    />
                    </a>
                </Grid>
                )
                }

            </Grid>
            <Footer />
        </div>
    )
}

export default Community