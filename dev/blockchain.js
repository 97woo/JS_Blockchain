function Blockchain (){
    this.chain = [];
    this.newTransactions = [];
}

Blockchain.prototype.createNewBlock = function (nonce, previousBlockHash, hash){
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.newTransactions,
        nonce :nonce,
        hash: hash,
        previousBlockHash: previousBlockHash
    };
    this.newTransaction = []; //이 코드 추가 이유는 새로운 블록을 만들때 새운 트랜잭션을 해당 블록에 추가 하기 때문에 
    this.chain.push(newBlock)
    return newBlock;
}

Blockchain.prototype.getLastBlock = function() { 
    return this.chain[this.chain.length - 1];
    }


module.exports = Blockchain;