import {Alert, FlatList, StatusBar, View} from 'react-native';
import Post from "./src/components/post/Post";
import {useEffect, useState} from "react";
import axios from "axios";
import {dataPosts} from "./src/data";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState(dataPosts);

  const fetchPosts = () => {
    // setIsLoading(true)
    // axios.get('https://trycode.pw/c/6J8B6')
    //   .then(({data}) => setPosts(data))
    //   .catch(() => Alert.alert('Ошибка', 'Ну удалось загрузить посты...'))
    //   .finally(() => setIsLoading(false))
  }
  useEffect(fetchPosts, [])

  return (
    <View>
      <FlatList data={[...posts, ...posts]} renderItem={({item}) => (
        <Post title={item.title} imageUrl={item.imageUrl} createdAt={item.createdAt}/>
      )
      }/>

      {/*{[...posts, ...posts].map(({title,createdAt,imageUrl}) => (*/}
      {/*  <Post title={title}*/}
      {/*        createdAt={createdAt}*/}
      {/*        imageUrl={imageUrl}/>*/}
      {/*))}*/}
      <StatusBar theme="auto"/>
    </View>
  );
}
