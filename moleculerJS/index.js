import UserService from "./services/user.service.js";
import EmailService from "./services/email.service.js";
import AuthService from "./services/auth.service.js";

async function start() {
  await UserService.start();
  await EmailService.start();
  await AuthService.start();

  try {
    const newUser = await UserService.call("user.createUser", {
      username: "admin",
      email: "admin@gmail.com",
    });
    console.log("New user created : ", newUser);
    const users = await UserService.call("user.getUsers");
    console.log("All users : ", users);

    const emailResult = await EmailService.call("email.sendEmail", {
      recipient: newUser.email,
      subject: "Welcome to learn microservices : moleculer js",
      content: "Thank you for your time",
    });

    console.log(emailResult);

    const authResult = await AuthService.call("auth.authUser", {
      username: newUser.username,
      password: "password",
    });

    console.log("Auth result : ", authResult);
  } catch (error) {
    console.log(error);
  } finally {
    await UserService.stop();
    await EmailService.stop();
    await AuthService.stop();
  }
}

start();
