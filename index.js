function handlePing(message, messageApi) {
  message.reply("Pong!");
}

function install(coreApi) {
  coreApi.registerMessageTrigger(["ping"], handlePing);
}

module.exports = {
  install
}