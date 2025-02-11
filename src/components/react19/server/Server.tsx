const Server = () => {
  async function createNoteAction() {
    "use server";

    console.log("server");
  }

  return <button onClick={createNoteAction}>server</button>;
};

export default Server;
