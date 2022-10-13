module.exports = {
  name: "test",
  description: "Test command",
  usage: "s!test",
  aliases: ["t"],
  execute(msg, args) {
    msg.reply("test");
  },
};
