pub fn hello() -> String {
  "Hello, top!"
}

pub fn handle_string(str : String) -> Unit {
  @lib.handle_string("top: " + str)
}

test "hello" {
  if hello() != "Hello, top!" {
    return Err("hello() != \"Hello, top!\"")
  }
}
