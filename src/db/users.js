const db = require("./index.js");

const newUser = async ({ email, name, password, foto }) => {
  const result = await db.query({
    text: `INSERT INTO users  (email, name, password, foto) values ($1,$2, $3, $4) RETURNING *`,
    values: [email, name, password, foto]
  });
  return result.rows[0];
}

const updateUser = async ({ name, password, email}, id) => {
  //console.log(name,password, id)

  const result = await db.query({
    text: `UPDATE users SET name = $1, password = $2 WHERE id = $3 RETURNING *`,
    values: [name, password, id]
  },(err,res)=>{
    //se ajustó a res, porque con result, había un problema, daba indefinido.
    return res.rows[0];
  });
  
  
}

const getUsers = async () => {
  const result = await db.query("SELECT id, name, email, foto FROM users");
  return result.rows;
}

const getUser = async (email) => {
  const result = await db.query(
    "SELECT * FROM users WHERE email = $1",
    [email]
  );

  return result.rows[0];
}

const deleteUser = async (id) => {
 
  const result = await db.query({
    text: "DELETE FROM users WHERE id = $1 RETURNING *",
    values: [id]
  });
  const skater = result.rows[0];
  return skater;
}

const eliminarusuario = async () => {
  const SQLQuery = {
      rowMode: "array",
      text: `
        DELETE FROM users
        `,
  };
  const { rows } = await db.query(SQLQuery);
  return rows;
};

module.exports = {
  newUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
  eliminarusuario
};
