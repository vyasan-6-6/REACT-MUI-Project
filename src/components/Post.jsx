import { Checkbox } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import { useState } from "react";

const Post = () => {
  const [likes, setLikes] = useState({});

 const posts = [
  {
    id: 1,
    author: "John Doe",
    avatar: "https://i.pravatar.cc/150?img=1",
    date: "September 14, 2022",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests."
  },
  {
    id: 2,
    author: "Jane Smith",
    avatar: "https://i.pravatar.cc/150?img=2",
    date: "September 15, 2022",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
    description: "Amazing mountain views! Nothing beats a day in nature with friends and family."
  },
  {
    id: 3,
    author: "Mike Johnson",
    avatar: "https://i.pravatar.cc/150?img=3",
    date: "September 16, 2022",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    description: "Just finished an amazing project! So excited to share this with everyone. Check it out!"
  },
  {
    id: 4,
    author: "Sarah Williams",
    avatar: "https://i.pravatar.cc/150?img=4",
    date: "September 17, 2022",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
    description: "Coffee and coding - the perfect combination for productivity!"
  }
  ,{
    id: 5,
    author: "John Doe",
    avatar: "https://i.pravatar.cc/150?img=1",
    date: "September 14, 2022",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
    description: "This impressive paella is a perfect party dish and a fun meal to cook together with your guests."
  },
  {
    id: 6,
    author: "Jane Smith",
    avatar: "https://i.pravatar.cc/150?img=2",
    date: "September 15, 2022",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
    description: "Amazing mountain views! Nothing beats a day in nature with friends and family."
  },
  {
    id: 7,
    author: "Mike Johnson",
    avatar: "https://i.pravatar.cc/150?img=3",
    date: "September 16, 2022",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    description: "Just finished an amazing project! So excited to share this with everyone. Check it out!"
  },
  {
    id: 8,
    author: "Sarah Williams",
    avatar: "https://i.pravatar.cc/150?img=4",
    date: "September 17, 2022",
    image: "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=800&q=80",
    description: "Coffee and coding - the perfect combination for productivity!"
  }
];


  const toggleLike = (postId) => {
    setLikes((prev) => ({
      ...prev,
      [postId]: !prev[postId]
    }));
  };

  return (
    <>
      {posts.map((post) => (
        <Card key={post.id} sx={{ margin: 5 }}>
          <CardHeader
            avatar={
              <Avatar src={post.avatar} aria-label={post.author}>
                {post.author.charAt(0)}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title={post.author}
            subheader={post.date}
          />
          <CardMedia
            component="img"
            height="400"
            image={post.image}
            alt={post.description}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {post.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton 
              aria-label="add to favorites"
              onClick={() => toggleLike(post.id)}
            >
              <Checkbox 
                icon={<FavoriteBorder />} 
                checkedIcon={<Favorite sx={{ color: "red" }} />}
                checked={likes[post.id] || false}
              />
            </IconButton>
            <IconButton aria-label="share">
              <Share />
            </IconButton>
          </CardActions>
        </Card>
      ))}
    </>
  );
};

export default Post;