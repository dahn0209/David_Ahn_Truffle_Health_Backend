const router = require('express').Router()
const {Bill} = require('../db/bill')


//localhost:1340/bills
router.get('/', async (req, res, next) => {
    try {

        const bills = await Bill.findAll();
        bills.map(bill=>{
            return bill
        })
        res.json(bills)
    } catch (error) { next (error) }

})
///localhost:1340/bills/:id
router.get('/:id', async (req, res, next) => {
    try {
      const bill = await Bill.findByPk(req.params.id)

      if(bill){
        res.json(bill)
      }else{
        res.status(404).send('no bill!!')
      }

      
    } catch (err) {
      next(err)
    }
  })


//localhost:1340/bills
router.post('/', async (req, res, next) => {
    try {
        // Create new bill
        const newBill = await Bill.create(req.body)
        res.json(newBill)

    } catch (error) {
        next(error)
    }
})


module.exports = router
