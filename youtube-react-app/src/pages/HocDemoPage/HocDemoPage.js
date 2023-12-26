import applyStyles from '../../hoc/applyStyles';
import Hello from './Hello/Hello';
import Bye from './Bye/Bye';
import HelmetSetup from '../../components/HelmetSetup/HelmetSetup';

const StyledHello = applyStyles(Hello);
const StyledBye = applyStyles(Bye);

const HocDemoPage = () => {
  return (
    <>
      <HelmetSetup title='HOC Demo' />
      <div>
        <h1>higher Order Component Pattern</h1>
        <StyledHello name='John' />
        <StyledBye name='John' />
      </div>
    </>
  );
};

export default HocDemoPage;
