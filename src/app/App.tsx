import { Route, Routes } from 'react-router-dom';
import Menu from '../components/Menu';
import { ProductMarket } from '../pages/ProductMarket';
import { BattleDrops } from '../pages/BattleDrops';

import {
  styledPageContainer,
  styledAppContainer,
  styledContentContainer,
} from './styles';

const App = () => {
  return (
    <div style={styledAppContainer()}>
      <Menu />
      <div style={styledContentContainer()}>
        <div style={styledPageContainer()}>
          <Routes>
            <Route path='/esimfo' element={<ProductMarket />} />
            <Route path='/esimfo/battleDrops' element={<BattleDrops />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
