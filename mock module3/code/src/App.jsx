import React from "react";

const Header=()=>{
  const{ theme, toggleTheme} = useTheme();
  return(
    <header className="header">
      <h1>Posts App</h1>
      <button onClick={toggleTheme}>Switch Theme({theme === "light" ? "Light -> Dark" : "dark -> Light"}) </button>

    </header>
  );
};

const AppInner = () =>{
     <PostsProvider>
      <div className="app">
        <Header />
      </div>
     </PostsProvider>
};

const App = () =>{
  <ThemeProvider>
    <AppInner/>
  </ThemeProvider>
};
export default App;
