import React from "react";
import Header from "./components/Header"
import Page from "./components/Page"
import Footer from './components/Footer'
function App() {
  return (
<div className="orange">
  <Header />
  <main>
    <Page />
  </main>
  <Footer />
</div>
  );
}

export default App;
