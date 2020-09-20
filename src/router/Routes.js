import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './Routes.css';

import ChannelRanking from '../pages/ChannelRanking';
import TodayVideos from '../pages/TodayVideos';
import Post from '../pages/Post';

export default function Routes() {
  return (
    <main>
      <div className="mainWrapper">
        <Switch>
          <Route exact path="/" render={() => <div>This is greeting page</div>} />
          <Route path="/channelranking" render={() => <ChannelRanking />} />
          <Route path="/todayvideos" render={() => <TodayVideos />} />
          <Route path="/post" render={() => <Post />} />
        </Switch>
      </div>
    </main>
  )
}
