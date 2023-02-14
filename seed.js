const { Bill,db } = require('./db/bill');

const connector = async () => {
    await db.sync({
        force: true
    })

    console.log('Database has been synced')

        // Create Bills
        const jess = await Bill.create({
            name: 'Jess Bracht',
            address: '123 home lane',
            hospital: 'NYC Hospital',
            date:'2022-01-07',
            bill:15.40
        })
    
        const ben = await Bill.create({
            name: 'Ben Bill',
            address: '123 church lane',
            hospital: 'NJS Hospital',
            date:'2020-12-24',
            bill:10.15
        })
    
        const fin = await Bill.create({
            name: 'Finngis Lard',
            address: '123 Park Street',
            hospital: 'PA Hospital',
            date:'2023-02-09',
            bill:30.51
        })


}



connector()