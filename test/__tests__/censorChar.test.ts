import { CensorChars } from "../../utils/CensorChars";

describe("Censor/ Mask Characters", () => {
  test("0xdce27d41b4ff72b55a876c621f5a5fef8537c99d should return 0xdce2...537c99d", () => {
    expect(CensorChars("0xdce27d41b4ff72b55a876c621f5a5fef8537c99d")).toBe("0xdce2...537c99d");
  });
});

//test('test', () => {
//    expect(true).toBe(true);
//})
