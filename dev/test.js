const Blockchain = require('./blockchain');

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389,'OIUOEREDHKHKD','78s97d4x6dsf')

bitcoin.createNewTransaction(100,'WOO99FJFJDL9','HOO12GEDKG')

bitcoin.createNewBlock(568764,'ASSAFSA213SAD','S8A1DAS0D24V8S')

console.log(bitcoin.chain[1])
