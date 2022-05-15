import { Client } from "discord.js";

import { Keys } from "./config/index.js";

const keys = await Keys();

const client = new Client();

client.login(keys.DISCORD_TOKEN);

client.on("message", async (message) => {
  if (message.content === "!cat") {
    message.channel.send(`https://cataas.com/cat?t=${new Date().getTime()}`);
  }
});
