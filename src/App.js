return (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home tours={tours} removeTour={removeTour}/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
  </BrowserRouter>
);


export default App
