fn main {
  println("main function called!")
  println(hello())
}

pub fn hello() -> String {
  "hello_main: " + @lib.hello()
}

pub fn handle_string(str : String) -> Int {
  let len = str.length()
  println("handle_string(\(str)) = \(len)")
  len
}
