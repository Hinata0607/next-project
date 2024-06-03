import { movieCard } from '@/mock/movie/mock';
import { fetchMovieResponse } from '@/mock/movie/MovieInterface';
import React from 'react';
import { Box } from '@yamada-ui/react';
import { MovieCard } from './_components/block/MovieCard';



const Page = () => {
  return (
    <div style={{ display:"flex", margin:"0 auto", width:"1200px", height:"2000px", backgroundColor:"#fff"}}>
      <div style={{width:"315px", backgroundColor:"#111"}}>
        <div style={{width:"315px", height:"15px", color:"#fff"}}></div>
        <div style={{width:"315px", height:"50px", backgroundColor:"#08f",textAlign:"center", fontSize:"30px", lineHeight:"1.5", color:"#fff"}}>ジャンル</div>
        <div style={{width:"315px", height:"50px", textAlign:"center", fontSize:"30px", lineHeight:"1.5", color:"#fff"}}>アクション</div>
        <div style={{width:"315px", height:"2px", backgroundColor:"#fff"}}></div>
        <div style={{width:"315px", height:"50px", textAlign:"center", fontSize:"30px", lineHeight:"1.5", color:"#fff"}}>冒険</div>
        <div style={{width:"315px", height:"2px", backgroundColor:"#fff"}}></div>
        <div style={{width:"315px", height:"50px", textAlign:"center", fontSize:"30px", lineHeight:"1.5", color:"#fff"}}>アニメ</div>
        <div style={{width:"315px", height:"2px", backgroundColor:"#fff"}}></div>
        <div style={{width:"315px", height:"50px", textAlign:"center", fontSize:"30px", lineHeight:"1.5", color:"#fff"}}>ドキュメンタリー</div>
        <div style={{width:"315px", height:"2px", backgroundColor:"#fff"}}></div>
        <div style={{width:"315px", height:"50px", textAlign:"center", fontSize:"30px", lineHeight:"1.5", color:"#fff"}}>SF</div>
        <div style={{width:"315px", height:"2px", backgroundColor:"#fff"}}></div>
        <div style={{width:"315px", height:"50px", textAlign:"center", fontSize:"30px", lineHeight:"1.5", color:"#fff"}}>恋愛</div>
        <div style={{width:"315px", height:"2px", backgroundColor:"#fff"}}></div>
        <div style={{width:"315px", height:"50px", textAlign:"center", fontSize:"30px", lineHeight:"1.5", color:"#fff"}}>ホラー</div>
        <div style={{width:"315px", height:"2px", backgroundColor:"#fff"}}></div>
      </div>
      <div>
        <div style={{width:"855px", height:"30px", marginTop:"15px", marginLeft:"15px", borderRadius:"2px", backgroundColor:"#111"}}>
          <p style={{paddingLeft:"10px", fontSize:"16px", lineHeight:"1.8", color:"#fff"}}>トップページ {" > "} 作品一覧</p>
        </div>
        <div style={{width:"855px", height:"60px", marginTop:"15px", marginLeft:"15px", borderRadius:"2px", backgroundColor:"#111"}}>
          <p style={{paddingLeft:"10px", fontSize:"30px", lineHeight:"1.8", color:"#fff"}}>作品一覧</p>
        </div>
        <Box
          width="870px"
          display="flex"
          alignItems="start"
          flexWrap="wrap"
        >
          {movieCard.map((data: fetchMovieResponse) => (
            <MovieCard
              key={data.id}
              movie_image={data.movie_image}
              title={data.title}
            />
          ))}
          {movieCard.map((data: fetchMovieResponse) => (
            <MovieCard
              key={data.id}
              movie_image={data.movie_image}
              title={data.title}
            />
          ))}
        </Box>
      </div>
    </div>
  );
};

export default Page;