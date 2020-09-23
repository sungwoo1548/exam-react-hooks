import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './Routes.css';

import Home from '../main/home/Home';
import ChannelRanking from '../main/ChannelRanking';
import TodayVideos from '../main/TodayVideos';
import PostList from '../main/post/PostList';

export default function Routes() {
  return (
    <>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route path="/channelranking" render={() => <ChannelRanking />} />
        <Route path="/todayvideos" render={() => <TodayVideos />} />
        <Route path="/post/list" render={() => <PostList />} />
      </Switch>
    </>
  )
}
