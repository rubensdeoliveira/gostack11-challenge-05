import { EntityRepository, Repository } from 'typeorm'

import Transaction from '../models/Transaction'

interface Balance {
  income: number
  outcome: number
  total: number
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  public async getBalance(): Promise<Balance> {
    const findIncome = await this.find({ type: 'income' })
    const income = findIncome.reduce((total: number, { value }) => {
      return total + value
    }, 0)

    const findOutcome = await this.find({ type: 'outcome' })
    const outcome = findOutcome.reduce((total: number, { value }) => {
      return total + value
    }, 0)

    const balance = {
      income,
      outcome,
      total: income - outcome,
    }

    return balance
  }

  public async getOperationPermission(
    value: number,
    type: 'income' | 'outcome',
  ): Promise<boolean> {
    const balance = await this.getBalance()

    if (type === 'outcome' && value > balance.total) return false

    return true
  }

  public async findTransactionById(id: string): Promise<Transaction | null> {
    const transaction = await this.findOne(id)

    return transaction || null
  }
}

export default TransactionsRepository
