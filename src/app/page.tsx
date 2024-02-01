const Home = async () => {
  const data = await fetch("http://google.com");
  console.log(data.body);
  return (
    <main className="h-screen w-screen flex flex-col items-center m-2 p-2">
      <h1 className="text-6xl text-center font-bold">
        Schedule your twits
      </h1>
      <br />
      <div>SignIn Signup</div>
    </main>
  );
};

export default Home;
