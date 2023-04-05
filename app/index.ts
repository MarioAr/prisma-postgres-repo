import UserRepository from "../repositories/UserRepository";

main();
async function main() {
  const user = new UserRepository();

  try {
    // const rta = await user.create({
    //   email: "uns@email.com",
    //   name: "un nombre",
    // });
    
    const rta = await user.findMany();
    console.log(rta)
  } catch (error) {
    console.log("error");
  }
}
