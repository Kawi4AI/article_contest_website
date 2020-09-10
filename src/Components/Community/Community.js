import React from 'react'
import Post from './Post'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
import Grid from '@material-ui/core/Grid'

function Community() {

    return (
        <div>
            <Navigation/>
            <h1 style={{textAlign:"center",paddingTop:"130px",marginBottom:"30px"}}>Our Community</h1>
            <Grid container spacing={3} style={{width:"80%",margin:"auto"}}>
                
                {[1,2,3,4,5,6,7,8,9,10].map(value =>
                <Grid key={value} item lg={4} sm={6} xs={12}   >
                    <a href="#" style={{textDecoration:"none",color:"black"}}>
                    <Post date="Aug 21"
                        content="Something about content Something about content Something about content Something about content Something about content"
                        image="images/logo.jpg"
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