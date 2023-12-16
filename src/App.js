import Books from "./features/books/Books";

function App() {
  return (
    <div className="lg:container lg:mx-auto px-5 py-5">
      <div className="flex flex-col gap-5">
        <Books />
      </div>
    </div>
  );
}

export default App;
