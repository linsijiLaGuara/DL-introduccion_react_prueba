
import MyApi from './componets/myApi/MyApi';

const App = () => {
  return (
    <div>
      <header>
        <h1>Busca tu Pokemon</h1>
      </header>
      <main>
        <h3 className="text-buscar">Buscar Pokemon</h3>

        <MyApi/>


      </main>
      <footer>
        <p>© 2024 Tu Compañía</p>
      </footer>
    </div>
  );
};

export default App;
