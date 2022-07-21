/* Metodos de la db */

const getTrimestres = async () => {
    const result = await db.query({
      text: `SELECT distinct(trimestre) FROM plan_cuentas WHERE rut = $1  AND tipo_de_informe = $2;`,
      values: [60503000, 'ESF C/NC']
    });
    return result.rows;
  }
  
  const getData = async () => {
    const result = await db.query({
      text: "SELECT plan_de_cuentas, monto, trimestre FROM plan_cuentas WHERE rut = $1 AND tipo_de_informe = $2 ORDER BY plan_de_cuentas;",
      values: [60503000, 'ESF C/NC']
    });
    return result.rows;
  }

/*   Ruta test (en tu caso deberías pasar la empresa y el tipo de informe a los métodos getData y getTrimestres) */
app.get("/api/v1/felipe", async (req, res) => {

    let data = await getData();
    let trimestres = await getTrimestres();
  
    // https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    // El metodo reduce permite recorrer un array y retornar un unico valor
    // En este caso recorremos los datos obtenidos y vamos agrupando los que tenga el mismo plan_de_cuentas
    // acc => accumulator (objeto unico) y curr => currentValue (valor actual)
    data = data.reduce((acc, curr) => {
      // validamos si ya existe la propiedad en el objeto, en caso contrario la creamos como un objeto vacio
      acc[curr.plan_de_cuentas] = acc[curr.plan_de_cuentas] || {};
      // creamos una propiedad con el trimeste y le asignamos como valor el monto del plan y trismentre
      acc[curr.plan_de_cuentas][curr.trimestre] = curr.monto;
      return acc;
    }, {});
  
    // obtenemos los keys del objeto para crear un arreglo con esta estructura
    // [{ plan_de_cuentas: nombre_plan, trimestre1: monto_trimestre1, trimestre2: monto_trimestre2 },...]
    data = Object.keys(data).map(plan => {
      return {
        plan_de_cuentas: plan,
        ...data[plan]
      }
    });
  
    return res.send({ rows: data, trimestres });
  })

  /* Vista HBS */

/*   <table class="table">
  <thead>
    <tr>
      <td>Plan de Cuentas</td>
      {{#each trimestres as |t|}}
      <th>{{ t.trimestre }}</th>
      {{/each}}
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>

<script>
  async function getData() {
    const { data } = await axios.get("/felipe");
    console.log(data)
    document.querySelector("tbody").innerHTML = `
      ${data.rows.map(row => `
      <tr>
        <td>${row.plan_de_cuentas}</td>
        ${data.trimestres.map(t => `<td>${row[t.trimestre] || ''}</td>`).join('')}
      </tr>`).join('')}
    `;
    console.log(data)
  }
  getData();
</script> */

/* un formater para las monedas */

/* <script>
  var clp = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
  });

  async function getData() {
    const { data } = await axios.get("/felipe");
    document.querySelector("tbody").innerHTML = `
      ${data.rows.map(row => `
      <tr>
        <td>${row.plan_de_cuentas}</td>
        ${data.trimestres.map(t => `<td>${clp.format(row[t.trimestre] || 0)}</td>`).join('')}
      </tr>`).join('')}
    `;
  }
  getData();
</script> */


/* 
Se coloca en el main.hbs => {{>VerifyAuth}}
Uso del partial en las rutas de las vistas:

// private routes
router.get("/perfil", (req, res) => {
    res.render("Perfil", { requiresAuth: true });
});

router.get("/user/tareas", async (req, res) => {
    res.render("UserTasks", { requiresAuth: true });
});


router.post("/api/verify", requiresAuth, async (req, res) => {
    res.send(req.user);
});

Consulta utilizada en el partial VerifyAuth

{{#if requiresAuth}}
<script>
    // validamos que el token sea correcto
    async function verifyToken() {
        if (localStorage.getItem("token")) {
            try {
                await axios.post("/auth/verify"); // 401
            } catch (error) {
                location.href = "/login";
            }
        } else {
            // si no existe el token, lo redireccionamos al login
            location.href = "/login";
        }
    }
    verifyToken();
</script>
{{/if}}









*/