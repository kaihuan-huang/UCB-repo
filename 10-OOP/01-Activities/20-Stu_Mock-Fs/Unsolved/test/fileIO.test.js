
const FileIO = require('../fileIO');

describe('FileIO', () => {
  describe('read', () => {
    it("should call fs.readFileSync with the passed in 'file' argument", () => {
      const FileIO = new FileIO();
      const file = "message.txt";

      expect(fs.readFileSync).toEqual('')
    });
  });

  describe('write', () => {
    it("should call fs.writeFileSync with the passed in 'path' and 'data' arguments", () => {
      // TODO: Your code here
    });
  });
});
