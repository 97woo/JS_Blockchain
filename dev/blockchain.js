function Blockchain (){
    this.chain = [];
    this.pendingTransactions = [];
}
//블록생성
Blockchain.prototype.createNewBlock = function (nonce, previousBlockHash, hash){
    const newBlock = {
        index: this.chain.length + 1,
        timestamp: Date.now(),
        transactions: this.pendingTransactions,
        nonce :nonce,
        hash: hash,
        previousBlockHash: previousBlockHash
    };
    this.pendingTransactions = []; //이 코드 추가 이유는 새로운 블록을 만들때 새운 트랜잭션을 해당 블록에 추가 하기 때문에 
    this.chain.push(newBlock)
    return newBlock;
}

//마지막 블록
Blockchain.prototype.getLastBlock = function() { 
    return this.chain[this.chain.length - 1];
    }

//트랜잭션 생성
Blockchain.prototype.createNewTransaction = function(amount,sender, recipient) {
    const newTransaction ={
        amount : amount,
        sender : sender,
        recipient : recipient
    };
    this.pendingTransactions.push(newTransaction);
    return this.getLastBlock()['index'] + 1;
}


module.exports = Blockchain;