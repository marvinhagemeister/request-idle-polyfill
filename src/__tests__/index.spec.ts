import { assert as t } from "chai";
import "../index";

describe("requestIdleCallback", () => {
  it("should schedule callback", done => {
    const cb = (deadline: RequestIdleCallback) => {
      t.equal(deadline.didTimeout, false);
      t.equal(deadline.timeRemaining() > 0, true);
      done();
    };

    window.requestIdleCallback(cb);
  });

  it("should abort scheduled callback", done => {
    const cb = (deadline: RequestIdleCallback) => {
      t.fail();
    };

    const id = window.requestIdleCallback(cb);
    window.cancelIdleCallback(id);
    setTimeout(() => {
      done();
    }, 100);
  });
});
