const { Router } = require("express");

const router = Router();

router.get("/chartsStacksActivos", async (req, res) => {
    let stack = [
        [0.47, 0.49, 0.52],
        [0.53, 0.51, 0.48]
      ];
   /*  console.log(stack) */
    res.send(stack);
});

module.exports = router;