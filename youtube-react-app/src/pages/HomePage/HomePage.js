import { Link } from 'react-router-dom';
import HelmetSetup from '../../components/HelmetSetup/HelmetSetup';
import FakeFragment from './FakeFragment/FakeFragment';
import LatestVideo from './LatestVideo/LatestVideo';
import LifeCycle from './LifeCycleDemo/LifeCycleDemo';
import MyProfile from './MyProfile/MyProfile';
import RecommendedVideoList from './RecommendedVideoList/RecommendedVideoList';
import Subscription from './Subscription/Subscription';
import TrendingVideoList from './TrendingVideoList/TrendingVideoList';

const HomePage = () => {
  return (
    <div className='pt-2'>
      <HelmetSetup title='Home' />
      <h1 className='text-center'>Learn about Main Concepts of ReactJS</h1>
      <h2>Latest Videos | Fn Comp and Props Demo</h2>
      <div className='row'>
        <div className='col-md-3'>
          <LatestVideo
            id='1'
            title='FraVsArg Football 2022 Highlights'
            thumbnailUrl='https://plchldr.co/i/300x200?&bg=ff0000&fc=ffffff&text=FraVsArg'
            channel='FIFA'
            views='5.5M'
            publishedDate='10 days ago'>
            Watch higlights of Arg vs France Final at FIFA 2022, Qatar
          </LatestVideo>
        </div>
        <div className='col-md-3'>
          <LatestVideo
            id='2'
            title='EngVsNZ Test Cricket 2023 Highlights'
            thumbnailUrl='https://plchldr.co/i/300x200?&bg=00ff00&fc=000000&text=EngVsNZTest'
            channel='ECB'
            views='4M'
            publishedDate='1 day ago'>
            Watch thrilling highlights of EngVsNZ Test Cricket 2023
          </LatestVideo>
        </div>

        <div className='col-md-3'>
          <LatestVideo
            id='3'
            title='EngVsNZ Test Cricket 2023 Highlights'
            thumbnailUrl='https://plchldr.co/i/300x200?&bg=00ff565&fc=ffffff&text=EngVsNZTest'
            channel='ECB'
            views='4M'
            publishedDate='1 day ago'>
            Watch thrilling highlights of EngVsNZ Test Cricket 2023
          </LatestVideo>
        </div>
        <div className='col-md-3'>
          <LatestVideo
            id='4'
            title='EngVsNZ Test Cricket 2023 Highlights'
            thumbnailUrl='https://plchldr.co/i/300x200?&bg=02\9000&fc=000000&text=EngVsNZTest'
            channel='ECB'
            views='4M'
            publishedDate='1 day ago'>
            Watch thrilling highlights of EngVsNZ Test Cricket 2023
          </LatestVideo>
        </div>
        {/*
        <div className="col-md-3">
          <LatestVideo />
        </div>
        <div className="col-md-3">
          <LatestVideo />
        </div> */}
      </div>
      <hr />

      <h2>Trending Videos | Class Comp, States, Events, Props Demo</h2>
      <TrendingVideoList />
      <hr />

      <h2>
        Recommended Videos | Class Comp, States, Event, Conditional Rendering, Lists & Keys Demo
      </h2>
      <RecommendedVideoList />
      <hr />

      <h2>Subscription Component</h2>
      <Subscription />
      <hr />

      <h2>TWO Way Binding Example | Profile</h2>
      <MyProfile></MyProfile>
      <hr />

      <h2>LifeCycle Explained</h2>
      <LifeCycle></LifeCycle>
      <hr />
      <FakeFragment>
        <span>FakeFragment comes here</span>
      </FakeFragment>
      <hr />
      <Link to='/video'>
        <button className='btn btn-primary' data-testid='videoPageBtn'>
          Video Page
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
