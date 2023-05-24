module.exports = (CatalogService) => {

const {Books} =cds.entities ('my.bookshop')

//Reduce stock of ordered books

CatalogService.before ('CREATE' , 'Orders' , async(req) => {

    const order = req.data
    if(!order.amount || order.amount <= 0) return req.error (409, 'Please order at least 1 book ')
    const transaction = cds.transaction(req)


    const book = await transaction.run(
        SELECT.one(Books)
        .where({ID : order.book_ID})

    )
    
    if(book == null) return req.error(400, "Sorry, no such book found!")

    if(order.amount > book.stock) return req.error(400, "Sorry, insufficient stock!")
    const result = await transaction.run (
        UPDATE (Books)
        .set ({stock: {'-=' : order.amount}})
        .where({ stock: {'>=' : order.amount}, ID: order.book_ID })
    )

    if (result === 0) req.error (409, "Sorry, sold out")
}
)
}
