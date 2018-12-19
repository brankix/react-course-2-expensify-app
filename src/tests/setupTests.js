import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

require('dotenv').config({ path: '.env.test'} );
// configure({ adapter: new Adapter() });
Enzyme.configure({
  adapter: new Adapter()
});
