// deno-lint-ignore-file
const user = {
    id: 123,
   
    admin: false,
    becomeAdmin: function () {
      this.admin = true;
    },
  };
  user.becomeAdmin();
  console.log(user.admin);
  