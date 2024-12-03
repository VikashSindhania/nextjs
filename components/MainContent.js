const MainContent = () => {
  const title = "Welcome to Our Landing Page";
  const description = "This is a static landing page built with Next.js.";
  return (
    <section>
      <h1 style={{ color: "red" }}>{title}</h1>
      <h2>Your main content goes here</h2>
      <button>See More</button>
      <button>Call to Action</button>
    </section>
  );
};
export default MainContent;
