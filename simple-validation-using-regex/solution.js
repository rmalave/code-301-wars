function validateUsr(username) {
    res =  /^[0-9a-z_]{4,16}$/g.test(username);
    return res;
  }