import CreateProduct from '../components/CreateProduct';
import PleaseSignIn from '../components/PleaseSignIn';

const sellPage = () => (
  <div>
    <PleaseSignIn>
      <CreateProduct />
    </PleaseSignIn>
  </div>
);

export default sellPage;
