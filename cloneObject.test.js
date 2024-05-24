const cloneObject = require("./cloneObject");

describe("cloneObject", () => {
  it("should create an exact copy of the object", () => {
    const sample = { foo: { bar: "baz" } };
    const cloned = cloneObject(sample);
    expect(cloned).toMatchObject(sample);
  });

  it("should make a deep copy of the object", () => {
    const sample = { parent: { child: "value" } };
    const mutatedObject = { parent: { child: "new-value" } };
    const cloned = cloneObject(sample);
    cloned.parent.child = "new-value";
    expect(cloned).toMatchObject(mutatedObject);
    expect(sample).not.toMatchObject(mutatedObject);
  });
});
