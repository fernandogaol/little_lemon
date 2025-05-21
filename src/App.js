import './App.css';
import Desserts from './Desserts';

const italianDesserts = [
  {
    id: 1,
    title: "Tiramisu",
    description: "A classic Italian dessert made of layers of coffee-soaked ladyfingers and mascarpone cheese, topped with cocoa powder.",
    image: "https://example.com/tiramisu.jpg"
  },
  {
    id: 2,
    title: "Cannoli",
    description: "Crisp pastry tubes filled with sweet ricotta cheese and often adorned with chocolate chips, candied fruit, or pistachios.",
    image: "https://example.com/cannoli.jpg"
  },
  {
    id: 3,
    title: "Panna Cotta",
    description: "A creamy dessert made from sweetened cream thickened with gelatin, usually served with fruit coulis or caramel sauce.",
    image: "https://example.com/panna-cotta.jpg"
  },
  {
    id: 4,
    title: "Gelato",
    description: "Italian-style ice cream, known for its rich, creamy texture and intense flavors, often made with fresh, high-quality ingredients.",
    image: "https://example.com/gelato.jpg"
  },
  {
    id: 5,
    title: "Sfogliatella",
    description: "A flaky pastry filled with ricotta, semolina, and citrus zest, often associated with Naples and the Amalfi Coast.",
    image: "https://example.com/sfogliatella.jpg"
  },
  {
    id: 6,
    title: "Zabaglione",
    description: "A light, custard-like dessert made with egg yolks, sugar, and Marsala wine, often served warm with fruit or cookies.",
    image: "https://example.com/zabaglione.jpg"
  },
  {
    id: 7,
    title: "Baba au Rhum",
    description: "A small yeast cake soaked in rum syrup, originally from Naples but now popular across Italy.",
    image: "https://example.com/baba-au-rhum.jpg"
  },
  {
    id: 8,
    title: "Ricotta Cheesecake",
    description: "A creamy cheesecake made with ricotta cheese, offering a lighter and fluffier texture than traditional cheesecakes.",
    image: "https://example.com/ricotta-cheesecake.jpg"
  },
  {
    id: 9,
    title: "Cassata",
    description: "A Sicilian dessert made with layers of sponge cake, ricotta cheese, candied fruit, and marzipan.",
    image: "https://example.com/cassata.jpg"
  },
  {
    id: 10,
    title: "Tartufo",
    description: "A rich, chocolatey dessert with a gelato core, often covered in cocoa powder or crushed nuts, resembling a truffle.",
    image: "https://example.com/tartufo.jpg"
  }
];
function App() {
  return (
    <div className="App">
     <h2>Little Lemon Restaurant</h2>
     <h3>Desserts</h3>
     <ol>      
      <Desserts data={italianDesserts}/>
     </ol>
    </div>
  );
}

export default App;
