import { useEffect, useState } from "react";
import axios from 'axios'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import { Main } from "../pages/main/main";
import { Page404 } from "../pages/page404/page404";
import { Game } from "../pages/game/game";
import { AppRoute } from "../const/const";
import { TopHeader } from "../components/header/header";
import { Login } from "../pages/login/login";
import { Registration } from "../pages/registration/registration";



// type IImage = {
//   movieId: number;
//   type: string;
//   url: string;
//   previewUrl: string;
//   height: number;
//   width: number;
//   id: string;
// }

// function Img ({item}: {item: {previewUrl: string, id: string, type: string }}) {
//   return (
//     <div>
//       {item.type}
//  <img src={item.previewUrl} alt={item.id}/>
//     </div>
//   )
// }


// const getIdAndCount = (iimages: IImage[]) => iimages.reduce((acc, item) => {
//     if (acc[item.movieId]) {
//       acc[item.movieId] = acc[item.movieId] + 1
//     } else {
//       acc[item.movieId] = 1;
//     }
//     return acc
//   }, {} as {[key: string]: number})





export function App () {

  useEffect(() => {
    console.log('useEffect')
    axios.get('http://localhost:5000/api/movies')
      .then((data) => {
        console.log({data})
      })
      .catch((err) => console.log({err}))
      .finally(() => console.log('{finally}') )
      console.log('end')
  }, [])



  return (
  <BrowserRouter>
    <Layout style={{height:"100vh"}}>
      <TopHeader/>
        <Routes>
          <Route path={AppRoute.Main} element={<Main />}/>
          <Route path={AppRoute.Game} element={<Game />}/>
          <Route path={AppRoute.Login} element={<Login />}/>
          <Route path={AppRoute.Registration} element={<Registration />}/>

          <Route path="*" element={<Page404 />} />
        </Routes>
    </Layout>

    </BrowserRouter>

  )
}

