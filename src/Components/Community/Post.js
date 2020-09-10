import React from 'react'

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import CommentIcon from '@material-ui/icons/Comment'
import ShareIcon from '@material-ui/icons/Share'

function Post({ date, content, image, likes, comments, shares }) {

    return (
        <Card style={{ backgroundColor: "white" }}>
            <CardHeader
                avatar={
                    <Avatar alt="Page Profile" src="images/logo.jpg" />
                }
                title="ကဝိ-KaWi"
                subheader={date}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {content.slice(0,50)+" ..."}
                 </Typography>
            </CardContent>
            <CardMedia
                image={image}
                style={{height: 0,paddingTop: '60%'}}
            />
            <CardActions style={{display:"flex",justifyContent:"space-between"}}>
                <Button startIcon={<ThumbUpAltIcon/>} style={{color:"grey"}}>
                    {likes}
                </Button>
                <Button startIcon={<CommentIcon/>} style={{color:"grey"}}>
                    {comments}
                </Button>
                <Button startIcon={<ShareIcon/>} style={{color:"grey"}}>
                    {shares}
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post