class Logger {
  logMessage(type, message, data) {
    const formattedMessage = `[${type}] ${message}`;
    if (data === undefined) {
      process.stdout.write(formattedMessage);
    } else {
      process.stdout.write(`${formattedMessage} ${JSON.stringify(data, null, 2)}`);
    }
  }

  success({ message, data }) {
    this.logMessage('SUCCESS', message, data);
  }

  error({ message, data }) {
    this.logMessage('ERROR', message, data);
  }

  info({ message, data }) {
    this.logMessage('INFO', message, data);
  }
}

module.exports = Logger;
