import AddBook from "./features/books/AddBook";
import Books from "./features/books/Books";

function App() {
  return (
      <div className="lg:container lg:mx-auto px-5 py-5">
        <AddBook />
        <Books />
      </div>
  );
}

export default App;
